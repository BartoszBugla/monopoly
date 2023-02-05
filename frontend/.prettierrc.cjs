module.exports = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: 'all',
    singleQuote: true,
    semi: true,
    importOrder: [
        '^@mui/(.*)$',
        '^@assets/(.*)$',
        '^@common/(.*)$',
        '^@components/(.*)$',
        '^@pages/(.*)$',
        '^[./]',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
