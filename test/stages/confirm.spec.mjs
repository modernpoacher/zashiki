import debug from 'debug'

import {
  expect
} from 'chai'

import {
  get,
  post,
  pre,
  state
} from '@modernpoacher/zashiki/stages/confirm'

describe('@modernpoacher/zashiki/stages/confirm', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  xdescribe('`get`', () => {
    it('is a function', () => {
      expect(get)
        .to.be.a('function')
    })
  })

  xdescribe('`post`', () => {
    it('is a function', () => {
      expect(post)
        .to.be.a('function')
    })
  })

  describe('`pre`', () => {
    it('is an array', () => {
      expect(pre)
        .to.be.an('array')
    })
  })

  describe('`state`', () => {
    it('is an object', () => {
      expect(state)
        .to.be.an('object')
    })
  })
})
