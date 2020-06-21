import debug from 'debug'

import {
  fetch,
  store,
  query,
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import jid from 'zashiki/common/pre/jid'
import rid from 'zashiki/common/pre/rid'
import {
  handleException
} from 'zashiki/common/exception'

import getRedirectResourceUrl from 'zashiki/common/get-redirect-resource-url'

import params from 'zashiki/common/validate/params/omega'

const log = debug('zashiki:stages:omega')

log('`omega` is awake')

export * from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { jid, rid }, params: resource = {} }) {
  try {
    log({ jid, rid, resource })

    await change({ jid, rid, resource })

    return fetch({ jid, rid, resource })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { jid, rid, response = {} }, params: resource = {} }) {
  try {
    log({ jid, rid, resource })

    await change({ jid, rid, resource })

    await store({ jid, rid, response, resource })
    const route = await query({ jid, rid })

    return getRedirectResourceUrl(route)
  } catch (e) {
    handleException(e)
  }
}

export const pre = [
  jid,
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
