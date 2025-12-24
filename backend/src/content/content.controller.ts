import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, UseGuards } from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto, UpdateContentDto } from './dto/content.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('content')
export class ContentController {
    constructor(private readonly contentService: ContentService) { }

    @Get()
    getAllContent() {
        return this.contentService.getAllContent();
    }

    @Get('seed')
    @HttpCode(200)
    seedDatabase() {
        return this.contentService.seedContent();
    }

    @Get(':type')
    getContentByType(@Param('type') type: string) {
        return this.contentService.getContentByType(type);
    }

    @Post()
    @UseGuards(AuthGuard)
    @HttpCode(201)
    createContent(@Body() createContentDto: CreateContentDto) {
        return this.contentService.createContent(createContentDto);
    }

    @Put(':type')
    @UseGuards(AuthGuard)
    updateContent(
        @Param('type') type: string,
        @Body() updateContentDto: UpdateContentDto,
    ) {
        return this.contentService.updateContent(type, updateContentDto);
    }

    @Delete(':type')
    @UseGuards(AuthGuard)
    @HttpCode(204)
    deleteContent(@Param('type') type: string) {
        return this.contentService.deleteContent(type);
    }
}
