import debug from 'debug'

import {
  Rails
} from 'shinkansen-rails'

import {
  EMBARK_RESOURCE
} from '@modernpoacher/zashiki-transport/lib/config'

import {
  fetch,
  embark,
  store
} from '@modernpoacher/zashiki-transport/lib/embark'

import {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import jid from 'zashiki/common/pre/jid'
import rid from 'zashiki/common/pre/rid'
import {
  handleException
} from 'zashiki/common/exception'

import getRedirectResourceUrl from 'zashiki/common/get-redirect-resource-url'

const log = debug('zashiki:stages:embark')

log('`embark` is awake')

export * from '@modernpoacher/zashiki-transport/lib/embark'

export {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { jid } }) {
  try {
    log({ jid })

    await change({ jid, resource: EMBARK_RESOURCE })

    return fetch({ jid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { jid, rid, response = {} } }) {
  try {
    log({ jid, rid })

    await change({ jid, rid, resource: EMBARK_RESOURCE })

    const { response: { collection } } = await store({ jid, rid, response })

    const route = await embark({ jid, rid, response: { embark: Rails.rail(collection) } })

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
