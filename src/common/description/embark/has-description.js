import debug from 'debug'

import getDescription from './get-description'

const log = debug('zashiki:common:description:embark:has-description')

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
