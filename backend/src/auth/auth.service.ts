import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userRepository.findOne({ where: { username } });
        if (!user) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid credentials');
        }

        const { password: _, ...result } = user;
        return result;
    }

    async login(username: string, password: string) {
        const user = await this.validateUser(username, password);
        const payload = { username: user.username, sub: user.id, role: user.role };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        };
    }

    async createAdminUser() {
        const existingAdmin = await this.userRepository.findOne({
            where: { username: 'admin' }
        });

        if (existingAdmin) {
            return existingAdmin;
        }

        const hashedPassword = await bcrypt.hash('dashpayx-31202-admin', 10);
        const admin = this.userRepository.create({
            username: 'admin',
            password: hashedPassword,
            role: 'admin',
        });

        return this.userRepository.save(admin);
    }
}
