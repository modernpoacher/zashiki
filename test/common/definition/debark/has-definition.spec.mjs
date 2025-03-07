import {
  expect
} from 'chai'

import hasDefinition from '#zashiki/common/definition/debark/has-definition'

describe('#zashiki/common/definition/debark/has-definition', () => {
  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
