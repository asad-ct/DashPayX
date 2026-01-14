import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentModule } from './content/content.module';
import { ImageModule } from './image/image.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { ContentSection } from './entities/content-section.entity';
import { SectionImage } from './entities/section-image.entity';
import { ContactSubmission } from './entities/contact-submission.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_DATABASE || 'dashpayx',
      entities: [ContentSection, SectionImage, ContactSubmission, User],
      synchronize: process.env.DB_SYNCHRONIZE === 'true' || true,
      // logging: process.env.DB_LOGGING === 'true' || true,
    }),
    ContentModule,
    ImageModule,
    ContactModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
