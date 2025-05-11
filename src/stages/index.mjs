import debug from '#zashiki/config/debug'

import {
  fetch,
  store,
  change
} from '@modernpoacher/zashiki-transport/stages'

import {
  handleException
} from '#zashiki/common/exception'

import zid from '#zashiki/common/pre/zid'
import rid from '#zashiki/common/pre/rid'

const log = debug('zashiki/stages')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/stages'

export async function get ({ pre: { zid }, params: resource = {} }) {
  /**
   *  log({ zid, resource })
   */

  try {
    await change({ zid, resource })

    return await fetch({ zid, resource })
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

    return await store({ zid, resource, response })
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
