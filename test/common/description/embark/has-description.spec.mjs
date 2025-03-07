import {
  expect
} from 'chai'

import hasDescription from '#zashiki/common/description/embark/has-description'

describe('#zashiki/common/description/embark/has-description', () => {
  describe('`hasDescription`', () => {
    it('is a function', () => {
      expect(hasDescription)
        .to.be.a('function')
    })
  })
})
