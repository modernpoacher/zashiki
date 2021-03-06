import debug from 'debug'

import { expect } from 'chai'

import hasComponents from 'zashiki/common/components/debark/has-components'

describe('zashiki/common/components/debark/has-components', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
