import debug from 'debug'

import { expect } from 'chai'

import hasDescription from '@modernpoacher/zashiki/common/description/alpha/has-description'

describe('@modernpoacher/zashiki/common/description/alpha/has-description', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`hasDescription`', () => {
    it('is a function', () => {
      expect(hasDescription)
        .to.be.a('function')
    })
  })
})
