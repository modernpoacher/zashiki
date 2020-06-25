import debug from 'debug'

import { expect } from 'chai'

import hasDefinition from 'zashiki/common/definition/embark/has-definition'

describe('zashiki/common/definition/embark/has-definition', () => {
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
