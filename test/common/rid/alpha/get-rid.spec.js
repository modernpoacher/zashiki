import debug from 'debug'

import { expect } from 'chai'

import getRID from 'zashiki/common/rid/alpha/get-rid'

describe('zashiki/common/rid/alpha/get-rid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getRID`', () => {
    it('is a function', () => {
      expect(getRID)
        .to.be.a('function')
    })
  })
})
