import {
  expect
} from 'chai'

import hasComponents from '#zashiki/common/components/embark/has-components'

describe('#zashiki/common/components/embark/has-components', () => {
  describe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
