import {
  expect
} from 'chai'

import getDefinition from '#zashiki/common/definition/omega/get-definition'

describe('#zashiki/common/definition/omega/get-definition', () => {
  describe('`getDefinition`', () => {
    it('is a function', () => {
      expect(getDefinition)
        .to.be.a('function')
    })
  })
})
