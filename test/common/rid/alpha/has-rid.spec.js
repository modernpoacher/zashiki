import debug from 'debug'

import { expect } from 'chai'

import hasRID from 'zashiki/common/rid/alpha/has-rid'

describe('zashiki/common/rid/alpha/has-rid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
