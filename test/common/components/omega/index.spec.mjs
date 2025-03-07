import {
  expect
} from 'chai'

import {
  getComponents,
  hasComponents
} from '#zashiki/common/components/omega'

describe('#zashiki/common/components/omega', () => {
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
