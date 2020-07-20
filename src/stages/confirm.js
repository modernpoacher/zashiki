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

import zid from 'zashiki/common/pre/zid'
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

export async function get ({ pre: { zid, rid } }) {
  try {
    log({ zid, rid })

    await change({ zid, rid, resource: CONFIRM_RESOURCE })

    return fetch({ zid, rid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response } }) {
  try {
    log({ zid, rid })

    await change({ zid, rid, resource: CONFIRM_RESOURCE })

    await store({ zid, rid, response })
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
