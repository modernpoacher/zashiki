import debug from 'debug'

import { expect } from 'chai'

import hasComponents from '@modernpoacher/zashiki/common/components/debark/has-components'

describe('@modernpoacher/zashiki/common/components/debark/has-components', () => {
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
