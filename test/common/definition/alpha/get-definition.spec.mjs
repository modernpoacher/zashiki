import debug from 'debug'

import { expect } from 'chai'

import getDefinition from '@modernpoacher/zashiki/common/definition/alpha/get-definition'

describe('@modernpoacher/zashiki/common/definition/alpha/get-definition', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getDefinition`', () => {
    it('is a function', () => {
      expect(getDefinition)
        .to.be.a('function')
    })
  })
})
