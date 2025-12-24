import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentSection } from '../entities/content-section.entity';
import { CreateContentDto, UpdateContentDto } from './dto/content.dto';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(ContentSection)
        private contentRepository: Repository<ContentSection>,
    ) { }

    async getContentByType(type: string): Promise<ContentSection> {
        const content = await this.contentRepository.findOne({
            where: { section_type: type, is_published: true },
        });

        if (!content) {
            throw new NotFoundException(`Content section '${type}' not found`);
        }

        return content;
    }

    async getAllContent(): Promise<ContentSection[]> {
        return this.contentRepository.find({
            where: { is_published: true },
            order: { created_at: 'ASC' },
        });
    }

    async createContent(createContentDto: CreateContentDto): Promise<ContentSection> {
        const existingContent = await this.contentRepository.findOne({
            where: { section_type: createContentDto.section_type },
        });

        if (existingContent) {
            throw new BadRequestException(`Content section '${createContentDto.section_type}' already exists`);
        }

        const content = this.contentRepository.create({
            section_type: createContentDto.section_type,
            content: createContentDto.content,
            is_published: true,
        });

        return this.contentRepository.save(content);
    }

    async updateContent(type: string, updateContentDto: UpdateContentDto): Promise<ContentSection> {
        const content = await this.contentRepository.findOne({
            where: { section_type: type },
        });

        if (!content) {
            throw new NotFoundException(`Content section '${type}' not found`);
        }

        content.content = updateContentDto.content;
        content.is_published = updateContentDto.is_published ?? content.is_published;

        return this.contentRepository.save(content);
    }

    async deleteContent(type: string): Promise<void> {
        const result = await this.contentRepository.delete({ section_type: type });

        if (result.affected === 0) {
            throw new NotFoundException(`Content section '${type}' not found`);
        }
    }

    async seedContent(): Promise<ContentSection[]> {
        const existingCount = await this.contentRepository.count();

        if (existingCount > 0) {
            return this.contentRepository.find();
        }

        const seedData = [
            {
                section_type: 'hero',
                content: {
                    title: 'BEP-20 . BNB SMART CHAIN\nREAL - WORLD PAYMENTS',
                    description: 'A utility - first BEP-20 toke designed for everyday payments\nstarting form Pakistan and the GCC. Send value in seconds',
                    primaryCta: { text: 'Token Distribution', link: '/' },
                    secondaryCta: { text: 'Whitepaper', link: '/' },
                    image: '/hero-image.png',
                },
            },
            {
                section_type: 'banner',
                content: {
                    heading: 'What is DashPayX (DPX)?',
                    description: 'DashPayX (DPX) is a BEP-20 token on the BNB Smart Chain designed for real-world payments and long-term staking rewards. The project is focused on enabling fast, low-friction transfers starting from Pakistan and the GCC region, with a roadmap to expand globally.',
                    image: '/banner-image.png',
                    features: [
                        {
                            id: 'everyday-users',
                            icon: '/users-people-svgrepo-com-1.svg',
                            iconAlt: 'Users people svgrepo',
                            title: 'For Everyday Users',
                            description: 'Send and receive value in seconds with low fees. DPX aims to make cross-border value transfer as simple as sending a message, especially for Pakistan ↔ GCC users and families.',
                        },
                        {
                            id: 'merchants-partners',
                            icon: '/cooperate-svgrepo-com-1.svg',
                            iconAlt: 'Cooperate svgrepo',
                            title: 'For Merchants & Partners',
                            description: 'Over time, DashPayX plans to enable simple payment acceptance, loyalty use cases and integrations, so merchants can accept DPX while settling in their preferred currency.',
                        },
                        {
                            id: 'long-term-holders',
                            icon: '/cup-svgrepo-com-1.svg',
                            iconAlt: 'Cup svgrepo com',
                            title: 'For Long-Term Holders',
                            description: 'DPX includes a staking-focused design. Holders will be able to lock their tokens (subject to future terms) to earn additional DPX as rewards, aligned with the long-term growth of the ecosystem.',
                        },
                    ],
                },
            },
            {
                section_type: 'secondbanner',
                content: {
                    title: 'Planned Staking Parameters (Conceptual)',
                    description: 'Staking is currently in the design and planning phase. Nothing on this page is financial advice or a guarentee of future returns.',
                    image: '/secondbanner-image.png',
                    bulletPoints: [
                        'Separate pools / options for different lock durations.',
                        'Reward rates adjusted over time based on adoption and liquidity.',
                        'All contracts to be verifiable on-chain before launch.',
                        'Detailed documentation and "how-to" guides to be published prior to staking going live.',
                    ],
                    ctaText: 'Start Your Demo',
                },
            },
            {
                section_type: 'staking',
                content: {
                    title: 'Staking',
                    subtitle: 'Earn Rewards',
                    features: [
                        {
                            title: 'Simple Concept',
                            description: 'You commit (stake) a certain amount of DPX for a period of time. While your tokens are staked, they cannot be used for transfers, but they work on your behalf to earn staking rewards.',
                        },
                        {
                            title: 'Designed for Sustainability',
                            description: 'Staking parameters (lock periods, reward rates, caps) are planned to be designed carefully so that rewards are meaningful for holders but still sustainable for the long-term health of the DashPayX economy.',
                        },
                        {
                            title: 'Transparent & Optional',
                            description: 'Staking will always be optional. Users who prefer pure liquidity can simply hold or use DPX for payments, while those with a longer horizon can choose to stake and earn extra DPX, with clear terms and on-chain transparency.',
                        },
                    ],
                },
            },
            {
                section_type: 'tokenomics',
                content: {
                    title: 'Tokenomics',
                    subtitle: 'Token Details',
                    cards: [
                        {
                            title: 'Total Supply',
                            description: '1,000,000,000 DPX (fixed supply)',
                        },
                        {
                            title: 'Buy / Sell Tax',
                            description: '0% — no extra token tax on transfers.',
                        },
                        {
                            title: 'Presale',
                            description: 'No presale. No private allocations. Distribution aligned with long-term ecosystem usage and liquidity.',
                        },
                        {
                            title: 'Primary Use Cases',
                            description: 'Everyday payments (starting with Pakistan & GCC), staking rewards, and future integrations with partner platforms and merchants.',
                        },
                    ],
                },
            },
            {
                section_type: 'roadmap',
                content: {
                    title: 'Roadmap',
                    subtitle: 'Our Journey',
                    phases: [
                        {
                            phaseNumber: '1',
                            title: 'Foundation',
                            description: [
                                'Token design and initial smart contracts (DPX & staking).',
                                'Brand identity, official website & social channels.',
                                'Core documentation and positioning for payments & staking.',
                            ],
                        },
                        {
                            phaseNumber: '2',
                            title: 'Community & Liquidity',
                            description: [
                                'Launch of public community channels (Telegram, X, Discord).',
                                'Initial liquidity provision on DEX (e.g. PancakeSwap).',
                                'Transparent communication on token distribution and treasury policy.',
                            ],
                        },
                        {
                            phaseNumber: '3',
                            title: 'Staking & Ecosystem',
                            description: [
                                'Deployment of audited staking contracts for DPX.',
                                'Publishing of detailed staking documentation & tutorials.',
                                'Early ecosystem integrations and utility pilots for DPX payments.',
                            ],
                        },
                        {
                            phaseNumber: '4',
                            title: 'Payments & Expansion',
                            description: [
                                'Partnerships with payment facilitators, fintechs and merchants in Pakistan & GCC.',
                                'Exploration of remittance and bill payment use cases with compliant partners.',
                                'Broader regional expansion based on adoption, regulation and demand.',
                            ],
                        },
                    ],
                },
            },
            {
                section_type: 'testimonials',
                content: {
                    title: 'Transparency',
                    subtitle: 'Key Milestones',
                    cards: [
                        {
                            title: 'Contract Address',
                            description: 'The final mainnet contract address for DPX will be published here once deployment is completed and verified.',
                            status: 'To be announced',
                            qrCode: '/qr-contract.png',
                        },
                        {
                            title: 'BscScan Listing',
                            description: 'Once live, the verified contract and token details will be visible on BscScan so anyone can independently inspect supply, holders and transactions.',
                            status: 'Planned',
                            qrCode: '/qr-bscscan.png',
                        },
                        {
                            title: 'Whitepaper',
                            description: 'A detailed whitepaper describing the DashPayX vision, tokenomics, staking model and payment strategy is being prepared and will be shared with the community.',
                            status: 'In preparation',
                            qrCode: '/qr-whitepaper.png',
                        },
                        {
                            title: 'Smart Contract Audit',
                            description: 'Before large-scale adoption, DashPayX intends to engage an independent auditor to review the main contracts for security issues and best practices.',
                            status: 'Planned',
                            qrCode: '/qr-audit.png',
                        },
                    ],
                },
            },
            {
                section_type: 'faq',
                content: {
                    title: 'Frequently Asked Questions',
                    subtitle: 'Some of the most common questions about DashPayX (DPX). This section will be expanded over time as the project and community grow.',
                    image: '/faq-image.png',
                    faqs: [
                        {
                            question: 'What is DashPayX (DPX) in simple terms?',
                            answer: 'DPX is a BEP-20 token on the BNB Smart Chain focused on two things: fast, low-friction payments (starting with Pakistan & GCC) and a staking mechanism that rewards long-term holders with additional DPX over time.',
                        },
                        {
                            question: 'On which blockchain does DPX live?',
                            answer: 'DPX is designed as a BEP-20 token on the BNB Smart Chain (BSC), chosen for its low fees, fast confirmation times and strong ecosystem of wallets and DeFi tools.',
                        },
                        {
                            question: 'Is there a presale or private round?',
                            answer: 'The current vision is to avoid complicated presale structures and focus on transparent distribution and liquidity. Any future sale or allocation plan will be communicated clearly via the official DashPayX announcement channels.',
                        },
                        {
                            question: 'How will staking rewards work?',
                            answer: 'Staking is planned as an optional feature. Holders will be able to lock DPX into a smart contract and earn additional DPX, with reward parameters (rates, lock durations, caps) defined and published before launch. All details will be explained in simple guides.',
                        },
                        {
                            question: 'Is this financial advice or a guarantee of returns?',
                            answer: 'No. Nothing about DashPayX is financial advice or a promise of profit. Crypto assets are highly volatile and involve risk. Always do your own research and only participate at a level you are comfortable with.',
                        },
                        {
                            question: 'How can I stay updated on DashPayX progress?',
                            answer: 'The best way to stay updated is to follow the official DashPayX channels: Telegram community, Telegram announcement channel and X (Twitter). Key updates will also be reflected on this website over time.',
                        },
                    ],
                },
            },
            {
                section_type: 'news',
                content: {
                    title: 'Latest News of CryptoCurrency',
                    subtitle: 'Stay updated with the latest insights, market trends, and expert analysis from the world of cryptocurrency.',
                    articles: [
                        {
                            image: '/news-1.png',
                            title: 'Bitcoin price today: ticks down below $90k amid risk-off mood; key US data awaited',
                            description: 'Tatsuzo Tomita, Nissan\'s new chief for total delivered cost transformation, is spearheading the embattled Japanese company\'s',
                            date: '19 November 2025',
                            link: 'https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239',
                        },
                        {
                            image: '/news-2.png',
                            title: 'EV registrations jump 27% in July for legacy brands as U.S. tax credit nears end; Tesla slips',
                            description: 'Chevrolet, Honda and VW surged while Tesla and Rivian lost ground. EV market share in the U.S. rose to 8.9 percent, according to',
                            date: '19 November 2025',
                            link: 'https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239',
                        },
                        {
                            image: '/news-3.png',
                            title: 'The Interactive Brokers now allows to fund the accounts with stablecoins',
                            description: 'Along with blistering performance, The Lamborghinis are known for wild styling. From the chunky wheel arches and towering wing',
                            date: '19 November 2025',
                            link: 'https://www.investing.com/news/cryptocurrency-news/bitcoin-price-today-ticks-down-below-90k-amid-riskoff-mood-key-us-data-awaited-4407239',
                        },
                    ],
                },
            },
            {
                section_type: 'features',
                content: {
                    title: 'Why Choose Us',
                    subtitle: 'Key Features',
                    features: [
                        {
                            image: '/image-41.png',
                            title: 'Investment planning services',
                            description: 'Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.',
                        },
                        {
                            image: '/image-44.png',
                            title: 'Manage Your Trading Effectively',
                            description: 'Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.',
                        },
                        {
                            image: '/image-43.png',
                            title: 'System Designed by Experts',
                            description: 'Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.',
                        },
                        {
                            image: '/image-42.png',
                            title: 'Investment planning services',
                            description: 'Praesent imperdiet tellus et risus auctor volutpat in lacus. Sed tincidunt vel mi sed sagittis. Nam vel ante sapien. Quisque volutpat neque eget ligula convallis, id porttitor nulla aliquet. Donec massa vel leo pretium vehicula. Duis id nisi ex. Aenean suscipit leo sed neque mattis.',
                        },
                    ],
                },
            },
            {
                section_type: 'contact',
                content: {
                    title: 'Join the DashPayX (DPX) Community',
                    subtitle: 'DashPayX will grow community-first. Join our official channels to follow development updates, exchange listings, staking updates, roadmap execution and real-world payment adoption.',
                    qrTelegram: {
                        name: 'Telegram Community',
                        image: '/qr-telegram.png',
                        link: 'https://t.me/dashpayx',
                    },
                    qrAnnouncements: {
                        name: 'Announcements Channel',
                        image: '/qr-announcements.png',
                        link: 'https://t.me/dashpayx_announcements',
                    },
                    qrTwitter: {
                        name: 'X / Twitter',
                        image: '/qr-twitter.png',
                        link: 'https://twitter.com/dashpayx',
                    },
                    formTitle: 'Ready to get started?',
                    formSubtitle: 'Start your free trial',
                    features: [
                        'Free 30 days trial',
                        'Exclusive support',
                        'No fees',
                    ],
                },
            },
        ];

        const sections = seedData.map(data =>
            this.contentRepository.create({
                section_type: data.section_type,
                content: data.content,
                is_published: true,
            })
        );

        return this.contentRepository.save(sections);
    }
}
