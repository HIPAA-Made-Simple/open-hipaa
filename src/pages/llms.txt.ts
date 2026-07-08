import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// llms.txt (https://llmstxt.org): a concise, LLM-friendly index of the site.
export const GET: APIRoute = async (context) => {
	const docs = await getCollection('docs');
	const site = context.site?.href.replace(/\/$/, '') ?? '';

	const line = (d: (typeof docs)[number]) =>
		`- [${d.data.title}](${site}/${d.id}.md)${d.data.description ? `: ${d.data.description}` : ''}`;

	const questions = docs.filter((d) => d.id.startsWith('questions/'));
	const architectures = docs.filter((d) => d.id.startsWith('architectures/'));

	const body = [
		'# Open HIPAA',
		'',
		'> Open, plain-language HIPAA answers and reference architectures, free to use and cite (CC BY 4.0). Every page is also available as raw markdown at the same URL with a `.md` suffix.',
		'',
		'## Questions',
		'',
		...questions.map(line),
		'',
		'## Reference Architectures',
		'',
		...architectures.map(line),
		'',
		'## Optional',
		'',
		`- [Full content dump](${site}/llms-full.txt): every page in one markdown file`,
	].join('\n');

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
