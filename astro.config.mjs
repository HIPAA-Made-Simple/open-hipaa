// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// Update this when a custom domain is chosen — sitemap, RSS, llms.txt,
	// and canonical URLs are all derived from it.
	site: 'https://open-hipaa.vercel.app',
	integrations: [
		starlight({
			title: 'Open HIPAA',
			description:
				'Open, plain-language HIPAA answers and reference architectures — built for humans and AI agents.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/compliance-rehab/open-hipaa',
				},
			],
			components: {
				// Injects JSON-LD structured data + markdown-mirror links on every page.
				Head: './src/components/Head.astro',
			},
			sidebar: [
				{
					label: 'Questions',
					items: [{ autogenerate: { directory: 'questions' } }],
				},
				{
					label: 'Reference Architectures',
					items: [{ autogenerate: { directory: 'architectures' } }],
				},
				{ label: 'Browse by Topic', link: '/topics/' },
				{ label: 'About', slug: 'about' },
				{ label: 'Contribute', slug: 'contribute' },
			],
		}),
	],
});
