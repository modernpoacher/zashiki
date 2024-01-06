import debug from 'debug'

import { expect } from 'chai'

import hasRID from '@modernpoacher/zashiki/common/rid/omega/has-rid'

describe('@modernpoacher/zashiki/common/rid/omega/has-rid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`hasRID`', () => {
    it('is a function', () => {
      expect(hasRID)
        .to.be.a('function')
    })
  })
})
