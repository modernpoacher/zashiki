import debug from 'debug'

import { expect } from 'chai'

import jid from 'zashiki/common/pre/jid'

describe('zashiki/common/pre/jid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`jid`', () => {
    it('is an object', () => {
      expect(jid)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(jid)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(jid)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'jid\'', () => {
        expect(jid.assign)
          .to.equal('jid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(jid.method)
          .to.be.a('function')
      })
    })
  })
})
