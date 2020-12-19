module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
    'prettier/standard'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12,
		'sourceType': 'module',
		'project': './tsconfig.json',
	},
	'plugins': [
		'@typescript-eslint',
    'import',
    'jest',
    'jsx-a11y',
    'prefer-arrow',
    'prettier',
    'react',
    'react-hooks',
	],
	'root': true,
	'rules': {
		'newline-before-return': 'error',
		'no-continue': 'off',
		'require-yield': 'error',
		'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
		],
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'indent': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
		'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: false
      }
		],
		'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['jsx', 'tsx']
      }
    ],
    'react/jsx-props-no-spreading': [
      'warn',
      {
        custom: 'ignore',
      },
		],
		'react/prop-types': 'off',
		'react/prefer-stateless-function': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
		],
		'import/prefer-default-export': 'off',
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	},
	settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', 'jsx', '.ts', '.tsx'],
        paths: ['src'],
      }
    },
    react: {
      version: 'detect'
    }
  },
};
