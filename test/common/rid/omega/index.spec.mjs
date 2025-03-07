import {
  expect
} from 'chai'

import {
  getRID,
  hasRID
} from '#zashiki/common/rid/omega'

describe('#zashiki/common/rid/omega', () => {
  describe('`getRID`', () => {
    it('is a function', () => {
      expect(getRID)
        .to.be.a('function')
    })
  })

  describe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
