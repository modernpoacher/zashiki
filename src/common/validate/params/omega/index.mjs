import debug from 'debug'

import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import {
  NOT_FOUND
} from '#common/exception'

import hasAlpha from '#common/definition/alpha/has-definition'
import hasOmega from '#common/definition/omega/has-definition'

const log = debug('zashiki:common:validate:params:omega')

log('`omega` is awake')

export const pattern = /^[a-zA-Z0-9-]+$/
export const alpha = Joi.string().pattern(pattern).required()
export const omega = Joi.string().pattern(pattern).required()

export async function hasDefinition (params) {
  log('hasDefinition')

  if (
    await hasAlpha(params) &&
    await hasOmega(params)) {
    return params
  }

  throw Boom.notFound(NOT_FOUND)
}

export default (
  Joi
    .object({ alpha, omega })
    .external(hasDefinition)
)
