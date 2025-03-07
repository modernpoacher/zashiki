import {
  expect
} from 'chai'

import {
  getDefinition,
  hasDefinition
} from '#zashiki/common/definition/alpha'

describe('#zashiki/common/definition/alpha', () => {
  describe('`getDefinition`', () => {
    it('is a function', () => {
      expect(getDefinition)
        .to.be.a('function')
    })
  })

  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
