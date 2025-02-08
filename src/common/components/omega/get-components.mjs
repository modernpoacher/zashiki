import debug from 'debug'

import {
  resolve
} from 'node:path'

import {
  readFile
} from 'node:fs/promises'

import Boom from '@hapi/boom'

import zashiki from '#config'

import {
  BAD_IMPLEMENTATION
} from '#common/exception'

const log = debug('zashiki/common/components/omega/get-components')

log('`zashiki` is awake')

const {
  omega: components
} = zashiki.get('zashiki:components')

const COMPONENTS = resolve(components)

export default async function getComponents ({ alpha, omega } = {}) {
  log('getComponents')

  try {
    const {
      [alpha]: {
        [omega]: OMEGA = {}
      } = {}
    } = JSON.parse(await readFile(COMPONENTS, 'utf8'))

    /*
    const {
      default: {
        [alpha]: {
          [omega]: OMEGA = {}
        } = {}
      }
    } = await import(COMPONENTS, { assert: { type: 'json' } }) */

    return OMEGA
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
