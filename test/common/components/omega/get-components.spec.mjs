import {
  expect
} from 'chai'

import getComponents from '#zashiki/common/components/omega/get-components'

describe('#zashiki/common/components/omega/get-components', () => {
  describe('`getComponents`', () => {
    it('is a function', () => {
      expect(getComponents)
        .to.be.a('function')
    })
  })
})
