import {
  expect
} from 'chai'

import hasRID from '@modernpoacher/zashiki/common/rid/omega/has-rid'

describe('@modernpoacher/zashiki/common/rid/omega/has-rid', () => {
  describe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
