import debug from 'debug'

import {
  resolve
} from 'path'

import Boom from '@hapi/boom'

import zashiki from 'zashiki/config'

import {
  BAD_IMPLEMENTATION
} from 'zashiki/common/exception'

const log = debug('zashiki:common:components:omega:get-components')

log('`getComponents` is awake')

const {
  omega: components
} = zashiki.get('zashiki:components')

export default async function getComponents ({ alpha, omega } = {}) {
  log('getComponents')

  try {
    const {
      [alpha]: {
        [omega]: OMEGA = {}
      } = {}
    } = await import(resolve(components))

    return OMEGA
  } catch (e) {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
