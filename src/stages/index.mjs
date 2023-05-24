import debug from 'debug'

import {
  fetch,
  store,
  change
} from '@modernpoacher/zashiki-transport/lib/stages/index.js'

import {
  handleException
} from '#common/exception'

import zid from '#common/pre/zid'
import rid from '#common/pre/rid'

const log = debug('zashiki/stages')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/lib/stages/index.js'

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

export { default as alpha } from './alpha.mjs'
export { default as omega } from './omega.mjs'
export { default as embark } from './embark.mjs'
export { default as debark } from './debark.mjs'
export { default as confirm } from './confirm.mjs'
