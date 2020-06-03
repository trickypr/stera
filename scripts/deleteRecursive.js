// eslint-disable-next-line no-undef
const { existsSync, lstatSync, readdirSync, unlinkSync, rmdirSync } = require('fs')

function deleteRecursive(path) {
	if (existsSync(path)) {
		readdirSync(path).forEach(file => {
			const curPath = `${path}/${file}`

			if (lstatSync(curPath).isDirectory()) 
				deleteRecursive(curPath)
			
			else 
				unlinkSync(curPath)
		})
		rmdirSync(path)
	}
}

// eslint-disable-next-line no-undef
module.exports = deleteRecursive
