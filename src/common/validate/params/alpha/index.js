import Boom from '@hapi/boom'
import Joi from '@hapi/joi'

import {
  NOT_FOUND
} from 'zashiki/common/exception'

import hasAlpha from 'zashiki/common/definition/alpha/has-definition'

export const pattern = /^[a-zA-Z0-9-]+$/
export const alpha = Joi.string().pattern(pattern).required()

async function hasDefinition (params) {
  if (await hasAlpha(params)) return params

  throw Boom.notFound(NOT_FOUND)
}

export default (
  Joi
    .object({ alpha })
    .external(hasDefinition)
)
