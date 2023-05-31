import debug from 'debug'

import {
  resolve
} from 'path'

import Boom from '@hapi/boom'

import zashiki from '#config'

import {
  BAD_IMPLEMENTATION
} from '#common/exception'

const log = debug('zashiki/common/components/alpha/get-components')

log('`zashiki` is awake')

const {
  alpha: components
} = zashiki.get('zashiki:components')

const COMPONENTS = resolve(components)

export default async function getComponents ({ alpha } = {}) {
  log('getComponents')

  try {
    const {
      default: {
        [alpha]: ALPHA = {}
      }
    } = await import(COMPONENTS, { assert: { type: 'json' } })

    return ALPHA
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
