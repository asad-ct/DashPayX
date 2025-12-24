import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionImage } from '../entities/section-image.entity';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
    imports: [TypeOrmModule.forFeature([SectionImage])],
    controllers: [ImageController],
    providers: [ImageService],
    exports: [ImageService],
})
export class ImageModule { }
