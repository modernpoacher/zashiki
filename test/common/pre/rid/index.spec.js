import debug from 'debug'

import { expect } from 'chai'

import rid from 'zashiki/common/pre/rid'

describe('zashiki/common/pre/rid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`rid`', () => {
    it('is an object', () => {
      expect(rid)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(rid)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(rid)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'rid\'', () => {
        expect(rid.assign)
          .to.equal('rid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(rid.method)
          .to.be.a('function')
      })
    })
  })
})
