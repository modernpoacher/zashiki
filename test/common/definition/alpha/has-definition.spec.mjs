import {
  expect
} from 'chai'

import hasDefinition from '@modernpoacher/zashiki/common/definition/alpha/has-definition'

describe('@modernpoacher/zashiki/common/definition/alpha/has-definition', () => {
  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
