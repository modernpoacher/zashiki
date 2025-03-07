import {
  expect
} from 'chai'

import hasComponents from '#zashiki/common/components/omega/has-components'

describe('#zashiki/common/components/omega/has-components', () => {
  describe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
