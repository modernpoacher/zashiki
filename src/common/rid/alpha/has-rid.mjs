import debug from '#zashiki/config/debug'

import getRID from './get-rid.mjs'

const log = debug('zashiki/common/rid/alpha/has-rid')

log('`zashiki` is awake')

export default async function hasRID (params) {
  log('hasRID')

  try {
    return !!(
      await getRID(params)
    )
  } catch ({ code }) {
    if (code) log(code, params)
    else log(params)

    return false
  }
}
