const common = require('./build/webpack.common.js');

module.exports = env => {
	const configPath = `./build/webpack.${env || 'dev'}.js`;
	console.log(`Using ${configPath}`);
	return Object.assign(common, require(configPath));
};
