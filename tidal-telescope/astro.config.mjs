// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Zamunda',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{ label: 'Munda Mail',
					items: [
						{ label: 'Case Study', slug: 'munda-mail/case-study' },
						{ label: 'asr', slug: 'munda-mail/asr' },
						{ label: 'as', slug: 'munda-mail/as' },
						{ label: 'ac', slug: 'munda-mail/ac' },
					]
				 },
				
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
				
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
