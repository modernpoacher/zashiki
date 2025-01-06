import debug from 'debug'

import {
  expect
} from 'chai'

import hasComponents from '@modernpoacher/zashiki/common/components/omega/has-components'

describe('@modernpoacher/zashiki/common/components/omega/has-components', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`hasComponents`', () => {
    it('is a function', () => {
      expect(hasComponents)
        .to.be.a('function')
    })
  })
})
