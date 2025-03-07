import {
  expect
} from 'chai'

import getDescription from '#zashiki/common/description/omega/get-description'

describe('#zashiki/common/description/omega/get-description', () => {
  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })
})
