import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { ContentService } from '../src/content/content.service';

async function seed() {
    const app = await NestFactory.create(AppModule);
    const contentService = app.get(ContentService);

    console.log('🌱 Starting database seed...');

    try {
        const result = await contentService.seedContent();
        console.log('✅ Database seeded successfully!');
        console.log(`📝 Created/Updated ${Object.keys(result).length} sections`);
        console.log('Sections:', Object.keys(result));
    } catch (error) {
        console.error('❌ Error seeding database:', error);
    }

    await app.close();
    process.exit(0);
}

seed().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
