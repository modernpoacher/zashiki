import {
  expect
} from 'chai'

import hasDescription from '@modernpoacher/zashiki/common/description/embark/has-description'

describe('@modernpoacher/zashiki/common/description/embark/has-description', () => {
  describe('`hasDescription`', () => {
    it('is a function', () => {
      expect(hasDescription)
        .to.be.a('function')
    })
  })
})
