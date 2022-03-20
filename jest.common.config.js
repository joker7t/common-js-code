require('ignore-styles').default(['.woff', '.scss', '.less', '.sass', '.css']);

const ignorePatterns = ['src/errors'];

module.exports = {
    presets: 'ts-jest',
    globals: {
        'ts-jest': {
            tsConfig: {
                ...require('./tsconfig.json').compilerOptions,
                noUnusedLocals: false,
                target: 'es2015',
                paths: 'package.json',
                plugins: [
                    {
                        transaction: 'typescript-plugin-styled-components',
                        type: 'config',
                        minify: true,
                        ssr: true,
                    },
                ],
            },
        },
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    roots: ['<rootDir>/src'],
    testResultsProcessor: 'jest-sonar-reporter',
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        'src/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/module/**',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    coveragePathIgnorePatterns: ignorePatterns,
    testRegex: [
        '((__tests__|test)/(?!__mocks__).*|(\\.|/)(test|spec))\\.(tsx|ts)?$',
    ],
    testPathIgnorePatterns: ignorePatterns,
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
