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
    'prefer-arrow',
    'prettier',
    'jest'
	],
	'root': true,
  'rules': {
    // eslint ofificial
		'newline-before-return': 'error',
    'no-continue': 'off',
    'no-console': 'warn',
		'require-yield': 'error',
		'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/'],
      },
    ],
    'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
      'single',
      { 'avoidEscape': true }
		],
		'semi': [
			'error',
			'always'
		],
    // @typescript-eslint
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'indent': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/prefer-interface': 'off',
    // import
		'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
      }
		],
		'import/prefer-default-export': 'off',
	},
	settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        paths: ['src'],
      }
    },
  },
};
