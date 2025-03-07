import {
  expect
} from 'chai'

import getDefinition from '#zashiki/common/definition/debark/get-definition'

describe('#zashiki/common/definition/debark/get-definition', () => {
  describe('`getDefinition`', () => {
    it('is a function', () => {
      expect(getDefinition)
        .to.be.a('function')
    })
  })
})
