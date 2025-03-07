import {
  expect
} from 'chai'

import getDescription from '#zashiki/common/description/alpha/get-description'

describe('#zashiki/common/description/alpha/get-description', () => {
  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })
})
