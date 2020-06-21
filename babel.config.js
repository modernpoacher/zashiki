module.exports = {
  compact: true,
  comments: false,
  presets: [
    [
      '@babel/env', {
        targets: {
          node: 'current',
          browsers: [
            'last 2 versions'
          ]
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: [
    '@babel/proposal-export-default-from',
    '@babel/transform-runtime',
    [
      'module-resolver', {
        root: ['./src'],
        cwd: 'babelrc',
        alias: {
          zashiki: './src'
        }
      }
    ]
  ]
}
