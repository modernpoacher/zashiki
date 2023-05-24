import debug from 'debug'

import {
  resolve
} from 'path'

import Boom from '@hapi/boom'

import zashiki from '#config'

import {
  BAD_IMPLEMENTATION
} from '#common/exception'

const log = debug('zashiki:common:components:alpha:get-components')

log('`getComponents` is awake')

const {
  alpha: components
} = zashiki.get('zashiki:components')

export default async function getComponents ({ alpha } = {}) {
  log('getComponents')

  try {
    const {
      [alpha]: ALPHA = {}
    } = await import(resolve(components))

    return ALPHA
  } catch (e) {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
