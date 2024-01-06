import debug from 'debug'

import { expect } from 'chai'

import hasDefinition from '@modernpoacher/zashiki/common/definition/embark/has-definition'

describe('@modernpoacher/zashiki/common/definition/embark/has-definition', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`hasDefinition`', () => {
    it('is a function', () => {
      expect(hasDefinition)
        .to.be.a('function')
    })
  })
})
