import {
  expect
} from 'chai'

import hasComponents from '#zashiki/common/components/alpha/has-components'

describe('#zashiki/common/components/alpha/has-components', () => {
  describe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
