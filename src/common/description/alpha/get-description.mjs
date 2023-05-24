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

const log = debug('zashiki:common:description:alpha:get-description')

log('`getDescription` is awake')

export default async function getDescription (params = {}) {
  log('getDescription')

  try {
    const {
      AID: {
        description = {}
      } = {}
    } = await getAlphaFromCache(await mapAlphaStage(params))

    return description
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
