import {
  expect
} from 'chai'

import getRID from '#zashiki/common/rid/omega/get-rid'

describe('#zashiki/common/rid/omega/get-rid', () => {
  describe('`getRID`', () => {
    it('is a function', () => {
      expect(getRID)
        .to.be.a('function')
    })
  })
})
