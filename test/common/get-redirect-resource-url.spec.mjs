import {
  expect
} from 'chai'

import getRedirectResourceUrl from '@modernpoacher/zashiki/common/get-redirect-resource-url'

describe('@modernpoacher/zashiki/common/get-redirect-resource-url', () => {
  describe('`getRedirectResourceUrl`', () => {
    it('is a function', () => {
      expect(getRedirectResourceUrl)
        .to.be.a('function')
    })
  })
})
