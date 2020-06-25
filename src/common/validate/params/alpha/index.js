import debug from 'debug'

import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import {
  NOT_FOUND
} from 'zashiki/common/exception'

import hasAlpha from 'zashiki/common/definition/alpha/has-definition'

const log = debug('zashiki:common:validate:params:alpha')

log('`alpha` is awake')

export const pattern = /^[a-zA-Z0-9-]+$/
export const alpha = Joi.string().pattern(pattern).required()

export async function hasDefinition (params) {
  log('hasDefinition')

  if (await hasAlpha(params)) return params

  throw Boom.notFound(NOT_FOUND)
}

export default (
  Joi
    .object({ alpha })
    .external(hasDefinition)
)
