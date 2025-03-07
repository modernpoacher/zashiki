import {
  expect
} from 'chai'

import hasRID from '#zashiki/common/rid/alpha/has-rid'

describe('#zashiki/common/rid/alpha/has-rid', () => {
  describe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
