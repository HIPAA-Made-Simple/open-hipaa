import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async (context) => {
	const docs = await getCollection('docs');
	const content = docs.filter(
		(d) => d.id.startsWith('questions/') || d.id.startsWith('architectures/'),
	);

	return rss({
		title: 'Open HIPAA',
		description:
			'Open, plain-language HIPAA answers and reference architectures — built for humans and AI agents.',
		site: context.site!,
		items: content.map((d) => ({
			title: d.data.title,
			description: d.data.description,
			link: `/${d.id}/`,
			pubDate:
				d.data.lastUpdated instanceof Date ? d.data.lastUpdated : new Date(),
		})),
	});
};
