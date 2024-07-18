import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import i18nextPlugin from "eslint-plugin-i18next";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    {
        plugins: {
            i18next: i18nextPlugin,
        },
    },
    {
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            'indent': ['error', 4],
            'no-tabs': 0,
            'react/jsx-filename-extension': [
                2,
                { extensions: ['.js', '.jsx', '.tsx'] }
            ],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'react/no-deprecated': 'warn',
            'i18next/no-literal-string': [
                'error',
                {
                    markupOnly: true,
                    ignoreAttribute: ['label', 'alt']
                }
            ],
            'max-len': ['error', { ignoreComments: true, tabWidth: 4 }]
        },
    }
];
