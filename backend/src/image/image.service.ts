import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SectionImage } from '../entities/section-image.entity';

interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
}

@Injectable()
export class ImageService {
    constructor(
        @InjectRepository(SectionImage)
        private imageRepository: Repository<SectionImage>,
    ) { }

    async uploadImage(
        section_type: string,
        image_key: string,
        file: UploadedFile,
    ): Promise<SectionImage> {
        // Delete existing image if it exists
        await this.imageRepository.delete({ section_type, image_key });

        const sectionImage = this.imageRepository.create({
            section_type,
            image_key,
            image_data: file.buffer,
            mime_type: file.mimetype,
            original_filename: file.originalname,
        });

        return this.imageRepository.save(sectionImage);
    }

    async getImage(
        section_type: string,
        image_key: string,
    ): Promise<SectionImage> {
        const image = await this.imageRepository.findOne({
            where: { section_type, image_key },
        });

        if (!image) {
            throw new NotFoundException(
                `Image not found for section: ${section_type}, key: ${image_key}`,
            );
        }

        return image;
    }

    async deleteImage(section_type: string, image_key: string): Promise<void> {
        const result = await this.imageRepository.delete({
            section_type,
            image_key,
        });

        if (result.affected === 0) {
            throw new NotFoundException(
                `Image not found for section: ${section_type}, key: ${image_key}`,
            );
        }
    }

    async getSectionImages(section_type: string): Promise<SectionImage[]> {
        return this.imageRepository.find({ where: { section_type } });
    }

    async getAllImages(): Promise<SectionImage[]> {
        return this.imageRepository.find();
    }
}
