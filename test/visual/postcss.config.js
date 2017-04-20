const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'iOS 8.1',
            ],
        }),
    ],
};
