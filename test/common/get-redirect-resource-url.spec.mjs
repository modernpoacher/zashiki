import {
  expect
} from 'chai'

import getRedirectResourceUrl from '#zashiki/common/get-redirect-resource-url'

describe('#zashiki/common/get-redirect-resource-url', () => {
  describe('`getRedirectResourceUrl`', () => {
    it('is a function', () => {
      expect(getRedirectResourceUrl)
        .to.be.a('function')
    })
  })
})
