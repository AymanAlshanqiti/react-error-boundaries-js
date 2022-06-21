const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
	// other webpack configuration
	devtool: 'source-map',
	plugins: [
		new SentryWebpackPlugin({
			// sentry-cli configuration - can also be done directly through sentry-cli
			// see https://docs.sentry.io/product/cli/configuration/ for details
			authToken:
				'bb2986aa68334dd5a026832d4345e8bdec6e3d810e2841a8bf0a570f03c4b24e',
			org: 'aymans-company',
			project: 'demo',
			release: process.env.SENTRY_RELEASE,

			// other SentryWebpackPlugin configuration
			include: '.',
			ignore: ['node_modules', 'webpack.config.js'],
		}),
	],
};
