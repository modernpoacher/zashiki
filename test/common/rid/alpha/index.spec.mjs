import {
  expect
} from 'chai'

import {
  getRID,
  hasRID
} from '#zashiki/common/rid/alpha'

describe('#zashiki/common/rid/alpha', () => {
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
