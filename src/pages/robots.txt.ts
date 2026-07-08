import type { APIRoute } from 'astro';

// Explicitly welcome AI crawlers alongside traditional ones.
const AI_BOTS = [
	'GPTBot',
	'OAI-SearchBot',
	'ChatGPT-User',
	'ClaudeBot',
	'Claude-User',
	'Claude-SearchBot',
	'PerplexityBot',
	'Perplexity-User',
	'Google-Extended',
	'Applebot-Extended',
	'CCBot',
];

export const GET: APIRoute = (context) => {
	const body = [
		'User-agent: *',
		'Allow: /',
		'',
		...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
		`Sitemap: ${new URL('sitemap-index.xml', context.site).href}`,
	].join('\n');

	return new Response(body, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
