import {
  expect
} from 'chai'

import getRID from '@modernpoacher/zashiki/common/rid/alpha/get-rid'

describe('@modernpoacher/zashiki/common/rid/alpha/get-rid', () => {
  describe('`getRID`', () => {
    it('is a function', () => {
      expect(getRID)
        .to.be.a('function')
    })
  })
})
