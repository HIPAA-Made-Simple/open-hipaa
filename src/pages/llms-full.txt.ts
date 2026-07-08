import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// llms-full.txt: the entire site's content as one markdown document,
// for agents that want everything in a single fetch.
export const GET: APIRoute = async (context) => {
	const docs = await getCollection('docs');
	const site = context.site?.href.replace(/\/$/, '') ?? '';

	const sections = docs
		.filter((d) => d.id.startsWith('questions/') || d.id.startsWith('architectures/'))
		.map((d) =>
			[
				`# ${d.data.title}`,
				'',
				`Source: ${site}/${d.id}/`,
				...(d.data.description ? ['', d.data.description] : []),
				'',
				d.body ?? '',
			].join('\n'),
		);

	return new Response(sections.join('\n\n---\n\n'), {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
