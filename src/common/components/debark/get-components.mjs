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

const COMPONENTS = resolve(components)

export default async function getComponents ({ debark = DEBARK_STAGE } = {}) {
  log('getComponents')

  try {
    const {
      default: {
        [debark]: DEBARK = {}
      }
    } = await import(COMPONENTS, { assert: { type: 'json' } })

    return DEBARK
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
