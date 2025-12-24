import { Controller, Post, Get, Delete, Param, Body, HttpCode, UseGuards } from '@nestjs/common';
import { ContactService } from './contact.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('contact')
export class ContactController {
    constructor(private contactService: ContactService) { }

    @Post('submit')
    @HttpCode(200)
    async submitContact(
        @Body() body: { name: string; email: string; phone: string; message?: string },
    ) {
        const submission = await this.contactService.createSubmission(body);
        return {
            message: 'Contact submission received successfully',
            id: submission.id,
        };
    }

    @Get('submissions')
    @UseGuards(AuthGuard)
    async getAllSubmissions() {
        return this.contactService.getAllSubmissions();
    }

    @Delete('submissions/:id')
    @UseGuards(AuthGuard)
    async deleteSubmission(@Param('id') id: string) {
        await this.contactService.deleteSubmission(parseInt(id));
        return { message: 'Submission deleted successfully' };
    }
}
