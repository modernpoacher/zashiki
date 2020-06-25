import debug from 'debug'

import { expect } from 'chai'

import getDescription from 'zashiki/common/description/debark/get-description'

describe('zashiki/common/description/debark/get-description', () => {
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
