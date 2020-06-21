import debug from 'debug'

import Boom from '@hapi/boom'

import {
  mapAlphaOmega
} from '@modernpoacher/zashiki-transport/lib/maps'

import {
  getOmegaFromCache
} from '@modernpoacher/zashiki-transport/lib/caches'

import {
  BAD_DATA
} from 'zashiki/common/exception'

const log = debug('zashiki:common:description:omega:get-description')

log('`getDescription` is awake')

export default async function getDescription (params = {}) {
  log('getDescription')

  try {
    const {
      OID: {
        description = {}
      } = {}
    } = await getOmegaFromCache(await mapAlphaOmega(params))

    return description
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
