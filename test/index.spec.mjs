import {
  expect
} from 'chai'

import {
  initialise
} from '#zashiki'

describe('#zashiki', () => {
  describe('`initialise`', () => {
    it('is a function', () => {
      expect(initialise)
        .to.be.a('function')
    })
  })
})
