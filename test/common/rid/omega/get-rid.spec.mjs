import debug from 'debug'

import { expect } from 'chai'

import getRID from '@modernpoacher/zashiki/common/rid/omega/get-rid'

describe('@modernpoacher/zashiki/common/rid/omega/get-rid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`getRID`', () => {
    it('is a function', () => {
      expect(getRID)
        .to.be.a('function')
    })
  })
})
