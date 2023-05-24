import debug from 'debug'

import getDefinition from './get-definition.mjs'

const log = debug('zashiki:common:definition:debark:has-definition')

log('`hasDefinition` is awake')

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