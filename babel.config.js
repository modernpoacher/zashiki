const debug = require('debug')

const log = debug('zashiki')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`zashiki` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

const presets = [
  [
    '@babel/env', {
      targets: {
        node: '12.19.0'
      },
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]

const plugins = [
  '@babel/transform-runtime',
  '@babel/proposal-export-default-from',
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

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    compact: true,
    comments: false,
    presets,
    plugins
  }
}
