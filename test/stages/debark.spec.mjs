import {
  expect
} from 'chai'

import {
  get,
  post,
  pre,
  state
} from '#zashiki/stages/debark'

describe('#zashiki/stages/debark', () => {
  describe('`get`', () => {
    it('is a function', () => {
      expect(get)
        .to.be.a('function')
    })
  })

  describe('`post`', () => {
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
