import {
  expect
} from 'chai'

import hasDefinition from '#zashiki/common/definition/alpha/has-definition'

describe('#zashiki/common/definition/alpha/has-definition', () => {
  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
