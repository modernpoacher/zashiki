import debug from 'debug'

import {
  fetch,
  store,
  query,
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import zid from 'zashiki/common/pre/zid'
import rid from 'zashiki/common/pre/rid'
import {
  handleException
} from 'zashiki/common/exception'

import getRedirectResourceUrl from 'zashiki/common/get-redirect-resource-url'

import params from 'zashiki/common/validate/params/omega'

const log = debug('zashiki:stages:omega')

log('`omega` is awake')

export * from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { zid, rid }, params: resource = {} }) {
  try {
    log({ zid, rid, resource })

    await change({ zid, rid, resource })

    return fetch({ zid, rid, resource })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response = {} }, params: resource = {} }) {
  try {
    log({ zid, rid, resource })

    await change({ zid, rid, resource })

    await store({ zid, rid, response, resource })
    const route = await query({ zid, rid })

    return getRedirectResourceUrl(route)
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

export const validate = {
  params,
  failAction: 'error'
}
