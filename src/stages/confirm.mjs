import debug from '#zashiki/config/debug'

import {
  CONFIRM_RESOURCE
} from '@modernpoacher/zashiki-transport/config'

import {
  fetch,
  store
} from '@modernpoacher/zashiki-transport/confirm'

import {
  change
} from '@modernpoacher/zashiki-transport/stages'

import zid from '#zashiki/common/pre/zid'
import rid from '#zashiki/common/pre/rid'
import {
  handleException
} from '#zashiki/common/exception'

const log = debug('zashiki/stages/confirm')

log('`zashiki` is awake')

export * from '@modernpoacher/zashiki-transport/confirm'

export {
  change
} from '@modernpoacher/zashiki-transport/stages'

export async function get ({ pre: { zid, rid } }) {
  /**
   *  log({ zid, rid })
   */

  try {
    await change({ zid, rid, resource: CONFIRM_RESOURCE })

    return await fetch({ zid, rid })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { zid, rid, response } }) {
  /**
   *  log({ zid, rid })
   */

  try {
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
