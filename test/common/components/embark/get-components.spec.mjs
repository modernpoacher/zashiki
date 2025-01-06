import debug from 'debug'

import {
  expect
} from 'chai'

import getComponents from '@modernpoacher/zashiki/common/components/embark/get-components'

describe('@modernpoacher/zashiki/common/components/embark/get-components', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`getComponents`', () => {
    it('is a function', () => {
      expect(getComponents)
        .to.be.a('function')
    })
  })
})
