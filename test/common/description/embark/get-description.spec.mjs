import {
  expect
} from 'chai'

import getDescription from '#zashiki/common/description/embark/get-description'

describe('#zashiki/common/description/embark/get-description', () => {
  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })
})
