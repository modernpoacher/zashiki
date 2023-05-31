import debug from 'debug'

import {
  Rails
} from 'shinkansen-rails'

import {
  EMBARK_RESOURCE
} from '@modernpoacher/zashiki-transport/config'

import {
  fetch,
  embark,
  store
} from '@modernpoacher/zashiki-transport/embark'

import {
  change
} from '@modernpoacher/zashiki-transport/stages'

import zid from '#common/pre/zid'
import rid from '#common/pre/rid'
import {
  handleException
} from '#common/exception'

import getRedirectResourceUrl from '#common/get-redirect-resource-url'

const log = debug('zashiki/stages/embark')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/embark'

export {
  change
} from '@modernpoacher/zashiki-transport/stages'

export async function get ({ pre: { zid } }) {
  /**
   *  log({ zid })
   */

  try {
    await change({ zid, resource: EMBARK_RESOURCE })

    return fetch({ zid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response = {} } }) {
  /**
   *  log({ zid, rid })
   */

  try {
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
