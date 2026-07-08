import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

// Markdown mirror: every content page is also served as raw markdown at
// <url>.md (e.g. /questions/foo/ -> /questions/foo.md), advertised via
// <link rel="alternate" type="text/markdown"> in the page head.
export const getStaticPaths: GetStaticPaths = async () => {
	const docs = await getCollection('docs');
	return docs.map((doc) => ({
		params: { slug: doc.id === '' ? 'index' : doc.id },
		props: { doc },
	}));
};

export const GET: APIRoute = ({ props }) => {
	const { doc } = props;
	const frontmatter = [
		'---',
		`title: "${String(doc.data.title).replaceAll('"', '\\"')}"`,
		...(doc.data.description
			? [`description: "${String(doc.data.description).replaceAll('"', '\\"')}"`]
			: []),
		...(doc.data.tags?.length ? [`tags: [${doc.data.tags.join(', ')}]`] : []),
		'---',
	].join('\n');

	return new Response(`${frontmatter}\n\n# ${doc.data.title}\n\n${doc.body ?? ''}`, {
		headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
	});
};
