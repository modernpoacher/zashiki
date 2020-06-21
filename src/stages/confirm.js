import debug from 'debug'

import {
  CONFIRM_RESOURCE
} from '@modernpoacher/zashiki-transport/lib/config'

import {
  fetch,
  store
} from '@modernpoacher/zashiki-transport/lib/confirm'

import {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import jid from 'zashiki/common/pre/jid'
import rid from 'zashiki/common/pre/rid'
import {
  handleException
} from 'zashiki/common/exception'

const log = debug('zashiki:stages:confirm')

log('`confirm` is awake')

export * from '@modernpoacher/zashiki-transport/lib/confirm'

export {
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { jid, rid } }) {
  try {
    log({ jid, rid })

    await change({ jid, rid, resource: CONFIRM_RESOURCE })

    return fetch({ jid, rid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { jid, rid, response } }) {
  try {
    log({ jid, rid })

    await change({ jid, rid, resource: CONFIRM_RESOURCE })

    await store({ jid, rid, response })
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
