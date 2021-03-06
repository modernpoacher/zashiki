import debug from 'debug'

import { expect } from 'chai'

import getDefinition from 'zashiki/common/definition/omega/get-definition'

describe('zashiki/common/definition/omega/get-definition', () => {
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
