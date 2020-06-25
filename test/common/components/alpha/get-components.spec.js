import debug from 'debug'

import { expect } from 'chai'

import getComponents from 'zashiki/common/components/alpha/get-components'

describe('zashiki/common/components/alpha/get-components', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getComponents`', () => {
    it('is a function', () => {
      expect(getComponents)
        .to.be.a('function')
    })
  })
})
