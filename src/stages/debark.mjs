import debug from 'debug'

import {
  DEBARK_RESOURCE
} from '@modernpoacher/zashiki-transport/config'

import {
  fetch,
  debark,
  store
} from '@modernpoacher/zashiki-transport/debark'

import {
  change
} from '@modernpoacher/zashiki-transport/stages'

import zid from '#common/pre/zid'
import rid from '#common/pre/rid'
import {
  handleException
} from '#common/exception'

import getRedirectResourceUrl from '#common/get-redirect-resource-url'

const log = debug('zashiki/stages/debark')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/debark'

export {
  change
} from '@modernpoacher/zashiki-transport/stages'

export async function get ({ pre: { zid, rid } }) {
  try {
    log({ zid, rid })

    await change({ zid, rid, resource: DEBARK_RESOURCE })

    return fetch({ zid, rid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response = {} } }) {
  try {
    log({ zid, rid })

    await change({ zid, rid, resource: DEBARK_RESOURCE })

    await store({ zid, rid, response })
    const route = await debark({ zid, rid, response })

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
