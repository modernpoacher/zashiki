import {
  expect
} from 'chai'

import {
  getComponents,
  hasComponents
} from '#zashiki/common/components/debark'

describe('#zashiki/common/components/debark', () => {
  describe('`getComponents`', () => {
    it('is a function', () => {
      expect(getComponents)
        .to.be.a('function')
    })
  })

  describe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
