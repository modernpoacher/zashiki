import debug from 'debug'

import getComponents from './get-components.mjs'

const log = debug('zashiki:common:components:omega:has-components')

log('`hasComponents` is awake')

export default async function hasComponents (params) {
  log('hasComponents')

  try {
    return !!(
      await getComponents(params)
    )
  } catch ({ code }) {
    if (code) log(code, params)
    else log(params)

    return false
  }
}
