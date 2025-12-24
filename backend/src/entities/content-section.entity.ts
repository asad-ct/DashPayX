import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity('content_sections')
export class ContentSection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50, unique: true })
    section_type: string; // "hero", "faq", "staking", "tokenomics", "roadmap", "testimonials", "news", "features", "banner", "secondbanner", "contact"

    @Column({ type: 'jsonb' })
    content: Record<string, any>;

    @Column({ default: true })
    is_published: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
