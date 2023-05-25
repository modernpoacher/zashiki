import debug from 'debug'

import {
  resolve
} from 'path'

import Boom from '@hapi/boom'

import zashiki from '#config'

import {
  DEBARK_STAGE
} from '@modernpoacher/zashiki-transport/config'

import {
  BAD_IMPLEMENTATION
} from '#common/exception'

const log = debug('zashiki/common/components/debark/get-components')

log('`zashiki` is awake')

const {
  debark: components
} = zashiki.get('zashiki:components')

export default async function getComponents (params = {}) {
  log('getComponents')

  try {
    const {
      [DEBARK_STAGE]: DEBARK = {}
    } = await import(resolve(components))

    return DEBARK
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
