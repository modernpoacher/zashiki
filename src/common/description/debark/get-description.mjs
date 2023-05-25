import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getDebarkFromCache
} from '@modernpoacher/zashiki-transport/caches'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki/common/description/debark/get-description')

log('`zashiki` is awake')

export default async function getDescription (params = {}) {
  log('getDescription')

  try {
    const {
      debark: {
        description = {}
      } = {}
    } = await getDebarkFromCache(params)

    return description
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
