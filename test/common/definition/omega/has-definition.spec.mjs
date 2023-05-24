import debug from 'debug'

import { expect } from 'chai'

import hasDefinition from '@modernpoacher/zashiki/common/definition/omega/has-definition'

describe('@modernpoacher/zashiki/common/definition/omega/has-definition', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
