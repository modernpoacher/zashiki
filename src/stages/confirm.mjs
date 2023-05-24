import debug from 'debug'

import {
  CONFIRM_RESOURCE
} from '@modernpoacher/zashiki-transport/lib/config/index.js'

import {
  fetch,
  store
} from '@modernpoacher/zashiki-transport/lib/confirm/index.js'

import {
  change
} from '@modernpoacher/zashiki-transport/lib/stages/index.js'

import zid from '#common/pre/zid'
import rid from '#common/pre/rid'
import {
  handleException
} from '#common/exception'

const log = debug('zashiki:stages:confirm')

log('`confirm` is awake')

export * from '@modernpoacher/zashiki-transport/lib/confirm.js'

export {
  change
} from '@modernpoacher/zashiki-transport/lib/stages/index.js'

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
