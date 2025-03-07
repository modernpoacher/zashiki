import {
  expect
} from 'chai'

import hasRID from '#zashiki/common/rid/omega/has-rid'

describe('#zashiki/common/rid/omega/has-rid', () => {
  describe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
