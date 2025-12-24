import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactSubmission } from '../entities/contact-submission.entity';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(ContactSubmission)
        private contactRepository: Repository<ContactSubmission>,
    ) { }

    async createSubmission(data: {
        name: string;
        email: string;
        phone: string;
        message?: string;
    }): Promise<ContactSubmission> {
        const submission = this.contactRepository.create(data);
        return this.contactRepository.save(submission);
    }

    async getAllSubmissions(): Promise<ContactSubmission[]> {
        return this.contactRepository.find({
            order: { created_at: 'DESC' },
        });
    }

    async deleteSubmission(id: number): Promise<void> {
        await this.contactRepository.delete(id);
    }
}
