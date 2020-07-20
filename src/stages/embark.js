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

import zid from 'zashiki/common/pre/zid'
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

export async function get ({ pre: { zid } }) {
  try {
    log({ zid })

    await change({ zid, resource: EMBARK_RESOURCE })

    return fetch({ zid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response = {} } }) {
  try {
    log({ zid, rid })

    await change({ zid, rid, resource: EMBARK_RESOURCE })

    const { response: { collection } } = await store({ zid, rid, response })

    const route = await embark({ zid, rid, response: { embark: Rails.rail(collection) } })

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
