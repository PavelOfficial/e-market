module.exports = {
  extends: [
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react-hooks'],
  env: {
    browser: true,
  },
  rules: {
    'max-len': ['error', 120],
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-unused-expressions': ['error', {allowTernary: true}],
    'no-underscore-dangle': ['error', {allowAfterThis: true}],
    'function-paren-newline': 'off',
    camelcase: 'warn',
    curly: ['error', 'all'],
    'no-multiple-empty-lines': ['error', {max: 1}],
    'no-constant-condition': 'off',
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'padded-blocks': ['error', {classes: 'always'}],
    'class-methods-use-this': 'off',
    'no-confusing-arrow': ['error', {allowParens: true}],
    'no-param-reassign': 'off',
    'arrow-parens': 'off',

    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'import/no-cycle': ['off', {maxDepth: '∞'}],

    'react/jsx-no-bind': ['off', {ignoreRefs: true}],
    'react/jsx-props-no-spreading': ['off'],
    'react/sort-comp': ['error', {
      order: [
        'propTypes',
        'defaultProps',
        'static-variables',
        'static-methods',
        'getChildContext',
        'instance-variables',
        'lifecycle',
        '/^on.+$/',
        'getters',
        'setters',
        '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
        'everything-else',
        'instance-methods',
        '/^handle.+$/',
        'rendering',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'state',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
        rendering: [
          '/^render.+$/',
          'render',
        ],
      },
    }],
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',

    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'error',

    'jsx-a11y/anchor-is-valid': ['warn', {aspects: ['invalidHref']}],
    'jsx-a11y/href-no-hash': 'off',
  },
};
