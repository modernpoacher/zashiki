import debug from 'debug'

import Boom from '@hapi/boom'

import {
  Signals
} from 'shinkansen-signals'

import {
  Rails
} from 'shinkansen-rails'

import {
  NOT_FOUND
} from './exception.mjs'

const log = debug('zashiki/common/get-resource-url')

log('`zashiki` is awake')

export default function getResourceUrl (resource = {}) {
  log('getResourceUrl')

  if (Rails.go(resource, Signals.OMEGA_PATTERN)) {
    return Rails.to(resource, Signals.OMEGA_PATTERN)
  } else {
    if (Rails.go(resource, Signals.DEBARK_PATTERN)) {
      return Rails.to(resource, Signals.DEBARK_PATTERN)
    } else {
      if (Rails.go(resource, Signals.CONFIRM_PATTERN)) {
        return Rails.to(resource, Signals.CONFIRM_PATTERN)
      } else {
        if (Rails.go(resource, Signals.EMBARK_PATTERN)) {
          return Rails.to(resource, Signals.EMBARK_PATTERN)
        } else {
          if (Rails.go(resource, Signals.ALPHA_PATTERN)) {
            return Rails.to(resource, Signals.ALPHA_PATTERN)
          }
        }
      }
    }
  }

  throw Boom.notFound(NOT_FOUND)
}
