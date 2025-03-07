import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getEmbarkFromCache
} from '@modernpoacher/zashiki-transport/caches'

import {
  BAD_DATA
} from '#zashiki/common/exception'

const log = debug('zashiki/common/definition/embark/get-definition')

log('`zashiki` is awake')

export default async function getDefinition (params = {}) {
  log('getDefinition')

  try {
    const {
      embark: {
        definition = {}
      } = {}
    } = await getEmbarkFromCache(params)

    return definition
  } catch (e) {
    throw Boom.badData(BAD_DATA)
  }
}
