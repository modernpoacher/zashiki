import debug from 'debug'

import {
  DEBARK_RESOURCE
} from '@modernpoacher/zashiki-transport/lib/config'

import {
  fetch,
  debark,
  store
} from '@modernpoacher/zashiki-transport/lib/debark'

import {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import jid from 'zashiki/common/pre/jid'
import rid from 'zashiki/common/pre/rid'
import {
  handleException
} from 'zashiki/common/exception'

import getRedirectResourceUrl from 'zashiki/common/get-redirect-resource-url'

const log = debug('zashiki:stages:debark')

log('`debark` is awake')

export * from '@modernpoacher/zashiki-transport/lib/debark'

export {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { jid, rid } }) {
  try {
    log({ jid, rid })

    await change({ jid, rid, resource: DEBARK_RESOURCE })

    return fetch({ jid, rid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { jid, rid, response = {} } }) {
  try {
    log({ jid, rid })

    await change({ jid, rid, resource: DEBARK_RESOURCE })

    await store({ jid, rid, response })
    const route = await debark({ jid, rid, response })

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
