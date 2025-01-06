import debug from 'debug'

import {
  expect
} from 'chai'

import validate, {
  hasDefinition,
  pattern,
  alpha
} from '@modernpoacher/zashiki/common/validate/params/alpha'

describe('@modernpoacher/zashiki/common/validate/params/alpha', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`validate`', () => {
    it('is an object', () => {
      expect(validate)
        .to.be.an('object')
    })
  })

  xdescribe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })

  describe('`pattern`', () => {
    it('is a regular expression', () => {
      expect(pattern)
        .to.be.a('regexp')
    })
  })

  describe('`alpha`', () => {
    it('is an object', () => {
      expect(alpha)
        .to.be.an('object')
    })
  })
})
