module.exports = {
    entry: ['./src/app.ts'],
    output: {
        filename: './wwwroot/js/bundle.js'
    },
    resolve: { extensions: ['.js', '.ts'] },
    module: {
        loaders: [
            {
                test: /\.ts$/, use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    devtool: 'source-map',
    externals: {
        "jquery": '$'
    }
};