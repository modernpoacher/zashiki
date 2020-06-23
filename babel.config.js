const debug = require('debug')

const log = debug('zashiki')

const {
  env: {
    DEBUG = 'zashiki',
    NODE_ENV = 'development'
  }
} = process

debug.enable(DEBUG)

const presets = [
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
]

const plugins = [
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

function using () {
  log({ NODE_ENV })

  return NODE_ENV === 'production'
}

module.exports = (api) => {
  if (api) api.cache.using(using)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
