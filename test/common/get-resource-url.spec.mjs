import debug from 'debug'

import { expect } from 'chai'

import getResourceUrl from '@modernpoacher/zashiki/common/get-resource-url'

describe('@modernpoacher/zashiki/common/get-resource-url', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getResourceUrl`', () => {
    it('is a function', () => {
      expect(getResourceUrl)
        .to.be.a('function')
    })
  })
})
