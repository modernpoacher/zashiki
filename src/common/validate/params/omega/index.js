import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import {
  NOT_FOUND
} from 'zashiki/common/exception'

import hasAlpha from 'zashiki/common/definition/alpha/has-definition'
import hasOmega from 'zashiki/common/definition/omega/has-definition'

export const pattern = /^[a-zA-Z0-9-]+$/
export const alpha = Joi.string().pattern(pattern).required()
export const omega = Joi.string().pattern(pattern).required()

export async function hasDefintion (params) {
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
    .external(hasDefintion)
)
