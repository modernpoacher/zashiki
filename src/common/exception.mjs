import debug from '#zashiki/config/debug'

import Boom from '@hapi/boom'

import {
  Signals
} from 'shinkansen-signals'

const log = debug('zashiki/common/exception')

log('`zashiki` is awake')

export const NOT_FOUND = 'https://tools.ietf.org/html/rfc7231#section-6.5.4'
export const BAD_DATA = 'https://tools.ietf.org/html/rfc7231#section-6.5.1'
export const BAD_IMPLEMENTATION = 'https://tools.ietf.org/html/rfc7231#section-6.5.1'

export function transformException ({
  code = 500,
  name = 'Internal Server Error',
  message
} = {}) {
  return {
    code,
    name,
    ...(message ? { message } : {})
  }
}

export function handleException ({
  code,
  message = 'No error message defined'
} = {}) {
  if (code) log(code, message)
  else log(message)

  if (code === 404) throw Boom.notFound(NOT_FOUND)
  throw Boom.badImplementation(BAD_IMPLEMENTATION)
}

export default function exception (error) {
  log('exception')

  return {
    status: Signals.FAILURE,
    exception: transformException(error)
  }
}
