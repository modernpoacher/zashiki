import {
  expect
} from 'chai'

import getDescription from '@modernpoacher/zashiki/common/description/alpha/get-description'

describe('@modernpoacher/zashiki/common/description/alpha/get-description', () => {
  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })
})
