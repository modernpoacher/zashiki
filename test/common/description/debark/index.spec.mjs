import {
  expect
} from 'chai'

import {
  getDescription,
  hasDescription
} from '#zashiki/common/description/debark'

describe('#zashiki/common/description/debark', () => {
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
