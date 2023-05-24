import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getEmbarkFromCache
} from '@modernpoacher/zashiki-transport/lib/caches/index.js'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki:common:description:embark:get-description')

log('`getDescription` is awake')

export default async function getDescription (params = {}) {
  log('getDescription')

  try {
    const {
      embark: {
        description = {}
      } = {}
    } = await getEmbarkFromCache(params)

    return description
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
