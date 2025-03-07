import debug from 'debug'

import {
  resolve
} from 'node:path'

/*
import {
  readFile
} from 'node:fs/promises' */

import Boom from '@hapi/boom'

import zashiki from '#zashiki/config'

import {
  BAD_IMPLEMENTATION
} from '#zashiki/common/exception'

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
      default: {
        [alpha]: {
          [omega]: OMEGA = {}
        } = {}
      } = {}
    } = await import(COMPONENTS, { with: { type: 'json' } })

    /*
    const {
      [alpha]: {
        [omega]: OMEGA = {}
      } = {}
    } = JSON.parse(await readFile(COMPONENTS, 'utf8')) */

    return OMEGA
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
