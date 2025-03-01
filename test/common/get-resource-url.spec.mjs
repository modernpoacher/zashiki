import {
  expect
} from 'chai'

import getResourceUrl from '@modernpoacher/zashiki/common/get-resource-url'

describe('@modernpoacher/zashiki/common/get-resource-url', () => {
  describe('`getResourceUrl`', () => {
    it('is a function', () => {
      expect(getResourceUrl)
        .to.be.a('function')
    })
  })
})
