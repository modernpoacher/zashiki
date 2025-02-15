import debug from 'debug'

import {
  expect
} from 'chai'

import alpha from '@modernpoacher/zashiki/common/pre/rid/alpha'

describe('@modernpoacher/zashiki/common/pre/rid/alpha', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`alpha`', () => {
    it('is an object', () => {
      expect(alpha)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(alpha)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(alpha)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'rid\'', () => {
        expect(alpha.assign)
          .to.equal('rid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(alpha.method)
          .to.be.a('function')
      })
    })
  })
})
