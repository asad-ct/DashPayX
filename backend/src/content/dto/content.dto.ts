import { IsString, IsObject, IsOptional, IsBoolean } from 'class-validator';

export class CreateContentDto {
    @IsString()
    section_type: string;

    @IsObject()
    content: Record<string, any>;

    @IsOptional()
    @IsBoolean()
    is_published?: boolean;
}

export class UpdateContentDto {
    @IsObject()
    content: Record<string, any>;

    @IsOptional()
    @IsBoolean()
    is_published?: boolean;
}
