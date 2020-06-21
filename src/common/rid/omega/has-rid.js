import debug from 'debug'

import getRID from './get-rid'

const log = debug('zashiki:common:rid:omega:has-rid')

log('`hasRID` is awake')

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
