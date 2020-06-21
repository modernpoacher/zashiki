import debug from 'debug'

import {
  fetch,
  store,
  change
} from '@modernpoacher/zashiki-transport/lib/stages'

import {
  handleException
} from 'zashiki/common/exception'

import jid from 'zashiki/common/pre/jid'
import rid from 'zashiki/common/pre/rid'

const log = debug('zashiki:stages')

log('`stages` is awake')

export * from '@modernpoacher/zashiki-transport/lib/stages'

export async function get ({ pre: { jid }, params: resource = {} }) {
  try {
    log({ jid, resource })

    await change({ jid, resource })

    return fetch({ jid, resource })
  } catch (e) {
    handleException(e)
  }
}

export async function post ({ pre: { jid, response }, params: resource = {} }) {
  try {
    log({ jid, resource })

    await change({ jid, resource })

    return store({ jid, resource, response })
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

export alpha from './alpha'
export omega from './omega'
export embark from './embark'
export debark from './debark'
export confirm from './confirm'
