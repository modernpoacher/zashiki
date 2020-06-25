import debug from 'debug'

import { expect } from 'chai'

import hasDescription from 'zashiki/common/description/embark/has-description'

describe('zashiki/common/description/embark/has-description', () => {
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
