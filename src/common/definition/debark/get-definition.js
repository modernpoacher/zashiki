import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getDebarkFromCache
} from '@modernpoacher/zashiki-transport/lib/caches'

import {
  BAD_DATA
} from 'zashiki/common/exception'

const log = debug('zashiki:common:definition:debark:get-definition')

log('`getDefinition` is awake')

export default async function getDefinition (params = {}) {
  log('getDefinition')

  try {
    const {
      debark: {
        definition = {}
      } = {}
    } = await getDebarkFromCache(params)

    return definition
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
