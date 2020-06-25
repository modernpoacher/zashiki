import debug from 'debug'

import { expect } from 'chai'

import getDescription from 'zashiki/common/description/alpha/get-description'

describe('zashiki/common/description/alpha/get-description', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`getDescription`', () => {
    it('is a function', () => {
      expect(getDescription)
        .to.be.a('function')
    })
  })
})
