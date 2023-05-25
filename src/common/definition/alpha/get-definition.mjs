import debug from 'debug'

import Boom from '@hapi/boom'

import {
  mapAlphaStage
} from '@modernpoacher/zashiki-transport/maps'

import {
  getAlphaFromCache
} from '@modernpoacher/zashiki-transport/caches'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki/common/definition/alpha/get-definition')

log('`zashiki` is awake')

export default async function getDefinition (params = {}) {
  log('getDefinition')

  try {
    const {
      AID: {
        definition = {}
      } = {}
    } = await getAlphaFromCache(await mapAlphaStage(params))

    return definition
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
