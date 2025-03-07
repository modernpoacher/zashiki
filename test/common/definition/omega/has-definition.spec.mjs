import {
  expect
} from 'chai'

import hasDefinition from '#zashiki/common/definition/omega/has-definition'

describe('#zashiki/common/definition/omega/has-definition', () => {
  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
