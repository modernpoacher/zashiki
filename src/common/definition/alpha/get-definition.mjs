import debug from 'debug'

import Boom from '@hapi/boom'

import {
  mapAlphaStage
} from '@modernpoacher/zashiki-transport/lib/maps/index.js'

import {
  getAlphaFromCache
} from '@modernpoacher/zashiki-transport/lib/caches/index.js'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki:common:definition:alpha:get-definition')

log('`getDefinition` is awake')

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