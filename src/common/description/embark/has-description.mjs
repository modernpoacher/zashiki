import debug from '#zashiki/config/debug'

import getDescription from './get-description.mjs'

const log = debug('zashiki/common/description/embark/has-description')

log('`zashiki` is awake')

export default async function hasDescription (params) {
  log('hasDescription')

  try {
    return !!(
      await getDescription(params)
    )
  } catch ({ code }) {
    if (code) log(code, params)
    else log(params)

    return false
  }
}
