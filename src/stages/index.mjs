import debug from 'debug'

import {
  fetch,
  store,
  change
} from '@modernpoacher/zashiki-transport/stages'

import {
  handleException
} from '#common/exception'

import zid from '#common/pre/zid'
import rid from '#common/pre/rid'

const log = debug('zashiki/stages')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/stages'

export async function get ({ pre: { zid }, params: resource = {} }) {
  /**
   *  log({ zid, resource })
   */

  try {
    await change({ zid, resource })

    return fetch({ zid, resource })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, response }, params: resource = {} }) {
  /**
   *  log({ zid, resource })
   */

  try {
    await change({ zid, resource })

    return store({ zid, resource, response })
  } catch (e) {
    handleException(e)
  }
}

export const pre = [
  zid,
  rid
]

export const state = {
  parse: true,
  failAction: 'error'
}

export * as alpha from './alpha.mjs'
export * as omega from './omega.mjs'
export * as embark from './embark.mjs'
export * as debark from './debark.mjs'
export * as confirm from './confirm.mjs'
