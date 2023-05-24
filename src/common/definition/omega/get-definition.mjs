import debug from 'debug'

import Boom from '@hapi/boom'

import {
  mapAlphaOmega
} from '@modernpoacher/zashiki-transport/lib/maps/index.js'

import {
  getOmegaFromCache
} from '@modernpoacher/zashiki-transport/lib/caches/index.js'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki/common/definition/omega/get-definition')

log('`zashiki` is awake')

export default async function getDefinition (params = {}) {
  log('getDefinition')

  try {
    const {
      OID: {
        definition = {}
      } = {}
    } = await getOmegaFromCache(await mapAlphaOmega(params))

    return definition
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
