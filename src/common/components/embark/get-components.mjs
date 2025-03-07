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
  EMBARK_STAGE
} from '@modernpoacher/zashiki-transport/config'

import {
  BAD_IMPLEMENTATION
} from '#zashiki/common/exception'

const log = debug('zashiki/common/components/embark/get-components')

log('`zashiki` is awake')

const {
  embark: components
} = zashiki.get('zashiki:components')

const COMPONENTS = resolve(components)

export default async function getComponents ({ embark = EMBARK_STAGE } = {}) {
  log('getComponents')

  try {
    const {
      default: {
        [embark]: EMBARK = {}
      } = {}
    } = await import(COMPONENTS, { with: { type: 'json' } })

    /*
    const {
      [embark]: EMBARK = {}
    } = JSON.parse(await readFile(COMPONENTS, 'utf8')) */

    return EMBARK
  } catch {
    throw Boom.badImplementation(BAD_IMPLEMENTATION)
  }
}
