import {
    Controller,
    Post,
    Get,
    Delete,
    Param,
    UseInterceptors,
    UploadedFile,
    BadRequestException,
    Res,
    UseGuards,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Response } from 'express';
import { ImageService } from './image.service';
import { AuthGuard } from '../auth/auth.guard';

interface UploadedFileInterface {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    buffer: Buffer;
}

@Controller('images')
export class ImageController {
    constructor(private imageService: ImageService) { }

    @Post('upload/:section_type/:image_key')
    @UseGuards(AuthGuard)
    @UseInterceptors(
        FileInterceptor('file', {
            limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
            fileFilter: (req, file, cb) => {
                if (!file.mimetype.startsWith('image/')) {
                    return cb(
                        new BadRequestException('Only image files are allowed'),
                        false,
                    );
                }
                cb(null, true);
            },
        }),
    )
    async uploadImage(
        @Param('section_type') section_type: string,
        @Param('image_key') image_key: string,
        @UploadedFile() file: UploadedFileInterface,
    ) {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        const result = await this.imageService.uploadImage(
            section_type,
            image_key,
            file,
        );

        // Return the API endpoint reference with timestamp for cache busting
        const timestamp = Date.now();
        const imageUrl = `/api/images/${section_type}/${image_key}?t=${timestamp}`;

        return {
            id: result.id,
            message: 'Image uploaded successfully',
            section_type: result.section_type,
            image_key: result.image_key,
            image: imageUrl, // Store reference URL in content
        };
    }

    @Get(':section_type/:image_key')
    async getImage(
        @Param('section_type') section_type: string,
        @Param('image_key') image_key: string,
        @Res() res: Response,
    ) {
        const image = await this.imageService.getImage(section_type, image_key);

        res.setHeader('Content-Type', image.mime_type);
        res.setHeader('Cache-Control', 'no-cache, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.send(image.image_data);
    }

    @Get('section/:section_type')
    async getSectionImages(
        @Param('section_type') section_type: string,
    ) {
        const images = await this.imageService.getSectionImages(section_type);
        return images.map((img) => ({
            id: img.id,
            section_type: img.section_type,
            image_key: img.image_key,
            mime_type: img.mime_type,
            original_filename: img.original_filename,
        }));
    }

    @UseGuards(AuthGuard)
    @Delete(':section_type/:image_key')
    async deleteImage(
        @Param('section_type') section_type: string,
        @Param('image_key') image_key: string,
    ) {
        await this.imageService.deleteImage(section_type, image_key);
        return { message: 'Image deleted successfully' };
    }
}
