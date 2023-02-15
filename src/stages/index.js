import debug from 'debug'

import {
  fetch,
  store,
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import {
  handleException
} from 'zashiki/common/exception'

import zid from 'zashiki/common/pre/zid'
import rid from 'zashiki/common/pre/rid'

const log = debug('zashiki:stages')

log('`stages` is awake')

export * from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { zid }, params: resource = {} }) {
  try {
    log({ zid, resource })

    await change({ zid, resource })

    return fetch({ zid, resource })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, response }, params: resource = {} }) {
  try {
    log({ zid, resource })

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

export { default as alpha } from './alpha'
export { default as omega } from './omega'
export { default as embark } from './embark'
export { default as debark } from './debark'
export { default as confirm } from './confirm'
