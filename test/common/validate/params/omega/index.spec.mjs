import {
  expect
} from 'chai'

import validate, {
  hasDefinition,
  pattern,
  alpha,
  omega
} from '#zashiki/common/validate/params/omega'

describe('#zashiki/common/validate/params/omega', () => {
  describe('`validate`', () => {
    it('is an object', () => {
      expect(validate)
        .to.be.an('object')
    })
  })

  describe('`hasDefinition`', () => {
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

  describe('`omega`', () => {
    it('is an object', () => {
      expect(omega)
        .to.be.an('object')
    })
  })
})
