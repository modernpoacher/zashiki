import debug from '#zashiki/config/debug'

import getDefinition from './get-definition.mjs'

const log = debug('zashiki/common/definition/alpha/has-definition')

log('`zashiki` is awake')

export default async function hasDefinition (params) {
  log('hasDefinition')

  try {
    return !!(
      await getDefinition(params)
    )
  } catch ({ code }) {
    if (code) log(code, params)
    else log(params)

    return false
  }
}
