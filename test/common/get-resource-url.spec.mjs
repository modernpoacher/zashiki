import {
  expect
} from 'chai'

import getResourceUrl from '#zashiki/common/get-resource-url'

describe('#zashiki/common/get-resource-url', () => {
  describe('`getResourceUrl`', () => {
    it('is a function', () => {
      expect(getResourceUrl)
        .to.be.a('function')
    })
  })
})
