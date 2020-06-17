module.exports = {
	title: 'Stera',
	description: 'A tiny web component library using the shadow dom',
	base: "/stera/docs/",
	themeConfig: {
		docsRepo: 'trickypr/stera',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve the docs!',
		nav: [
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Github', link: 'https://github.com/trickypr/stera' }
		],
		sidebar: [
			'/guide/quickStart.md',
			'/guide/usingStates.md',
			'/guide/attributes.md',
			'/guide/jsx.md'
		]
	}
}
