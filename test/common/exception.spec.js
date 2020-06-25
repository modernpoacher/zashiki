import debug from 'debug'

import { expect } from 'chai'

import exception, {
  NOT_FOUND,
  BAD_DATA,
  BAD_IMPLEMENTATION,
  handleException
} from 'zashiki/common/exception'

describe('zashiki/common/exception', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`exception`', () => {
    it('is a function', () => {
      expect(exception)
        .to.be.a('function')
    })
  })

  describe('`NOT_FOUND`', () => {
    it('is a string', () => {
      expect(NOT_FOUND)
        .to.be.a('string')
    })
  })

  describe('`BAD_DATA`', () => {
    it('is a string', () => {
      expect(BAD_DATA)
        .to.be.a('string')
    })
  })

  describe('`BAD_IMPLEMENTATION`', () => {
    it('is a string', () => {
      expect(BAD_IMPLEMENTATION)
        .to.be.a('string')
    })
  })

  describe('`handleException`', () => {
    it('is a function', () => {
      expect(handleException)
        .to.be.a('function')
    })
  })
})
