import {
  expect
} from 'chai'

import {
  getDescription,
  hasDescription
} from '#zashiki/common/description/alpha'

describe('#zashiki/common/description/alpha', () => {
  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })

  describe('`hasDescription`', () => {
    it('is a function', () => {
      expect(hasDescription)
        .to.be.a('function')
    })
  })
})
