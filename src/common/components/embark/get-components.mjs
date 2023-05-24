import debug from 'debug'

import {
  resolve
} from 'path'

import Boom from '@hapi/boom'

import zashiki from '#config'

import {
  EMBARK_STAGE
} from '@modernpoacher/zashiki-transport/lib/config/index.js'

import {
  BAD_IMPLEMENTATION
} from '#common/exception'

const log = debug('zashiki:common:components:embark:get-components')

log('`getComponents` is awake')

const {
  embark: components
} = zashiki.get('zashiki:components')

export default async function getComponents (params = {}) {
  log('getComponents')

  try {
    const {
      [EMBARK_STAGE]: EMBARK = {}
    } = await import(resolve(components))

    return EMBARK
  } catch (e) {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}