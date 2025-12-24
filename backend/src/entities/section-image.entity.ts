import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('section_images')
export class SectionImage {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    section_type: string; // "hero", "banner", "secondbanner", "faq", etc.

    @Column({ type: 'varchar', length: 50 })
    image_key: string; // "main", "qr_1", "article_1", etc.

    @Column({ type: 'bytea' })
    image_data: Buffer; // Binary image data

    @Column({ type: 'varchar', length: 50 })
    mime_type: string; // "image/png", "image/jpeg", etc.

    @Column({ type: 'varchar', length: 255, nullable: true })
    original_filename: string;

    @CreateDateColumn()
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
