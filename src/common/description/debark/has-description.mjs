import debug from 'debug'

import getDescription from './get-description.mjs'

const log = debug('zashiki:common:description:debark:has-description')

log('`hasDescription` is awake')

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
