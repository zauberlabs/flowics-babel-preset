module.exports = {
  plugins: ['import'], 
  extends: 'plugin:import/recommended',
  rules: {
    'import/no-absolute-path': 'error',
    'import/no-mutable-exports': 'warn',
    'import/no-duplicates': 'error',
    'import/order': ['warn', {
      groups: [
        ['builtin', 'external'],
        'parent',
        'sibling'
      ],
      'newlines-between': 'always-and-inside-groups'
    }]

  },
  settings: {
    'import/extensions': ['.js', '.jsx']
  }
  
}