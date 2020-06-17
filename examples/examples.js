function example(folder) {
	return { 
		// eslint-disable-next-line no-undef
		src: `${__dirname}/${folder}`,
		tmp: `../tmp/${folder}`,
		name: folder
	}
}

// eslint-disable-next-line no-undef
module.exports = {
	home: example('home'),
	static: [
		example('card'),
		example('counter'),
		example('nav'),
		example('progressBar')
	],
	parcel: [
		example('jsx')
	]
}
