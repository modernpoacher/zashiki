import debug from 'debug'

import Boom from '@hapi/boom'

import {
  getEmbarkFromCache
} from '@modernpoacher/zashiki-transport/lib/caches/index.js'

import {
  BAD_DATA
} from '#common/exception'

const log = debug('zashiki:common:definition:embark:get-definition')

log('`getDefinition` is awake')

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
