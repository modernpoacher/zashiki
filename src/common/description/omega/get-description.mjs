import debug from 'debug'

import Boom from '@hapi/boom'

import {
  mapAlphaOmegaStage
} from '@modernpoacher/zashiki-transport/maps'

import {
  getOmegaFromCache
} from '@modernpoacher/zashiki-transport/caches'

import {
  BAD_DATA
} from '#zashiki/common/exception'

const log = debug('zashiki/common/description/omega/get-description')

log('`zashiki` is awake')

export default async function getDescription (params = {}) {
  log('getDescription')

  try {
    const {
      OID: {
        description = {}
      } = {}
    } = await getOmegaFromCache(await mapAlphaOmegaStage(params))

    return description
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
