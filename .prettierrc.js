module.exports = {
    printWidth: 120,
    tabWidth: 4,
    singleQuote: true,
    semi: true,
    trailingComma: 'es5',
    bracketSpacing: true,
    jsxBracketSameLine: true,
    arrowParens: 'always',
    parser: 'typescript',
    overrides: [
        {
            files: '*.scss',
            options: {
                parser: 'css',
            },
        },
        {
            files: '*.html',
            options: {
                parser: 'html',
            },
        },
    ],
};
