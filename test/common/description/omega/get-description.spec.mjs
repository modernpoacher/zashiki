import debug from 'debug'

import {
  expect
} from 'chai'

import getDescription from '@modernpoacher/zashiki/common/description/omega/get-description'

describe('@modernpoacher/zashiki/common/description/omega/get-description', () => {
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
