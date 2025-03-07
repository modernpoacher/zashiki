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

const log = debug('zashiki/common/definition/omega/get-definition')

log('`zashiki` is awake')

export default async function getDefinition (params = {}) {
  log('getDefinition')

  try {
    const {
      OID: {
        definition = {}
      } = {}
    } = await getOmegaFromCache(await mapAlphaOmegaStage(params))

    return definition
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
