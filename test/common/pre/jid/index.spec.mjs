import debug from 'debug'

import { expect } from 'chai'

import zid from '@modernpoacher/zashiki/common/pre/zid'

describe('@modernpoacher/zashiki/common/pre/zid', () => {
  before(() => {
    const {
      env: {
        DEBUG
      }
    } = process

    if (DEBUG) debug.enable(DEBUG)
  })

  describe('`zid`', () => {
    it('is an object', () => {
      expect(zid)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(zid)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(zid)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'zid\'', () => {
        expect(zid.assign)
          .to.equal('zid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(zid.method)
          .to.be.a('function')
      })
    })
  })
})
