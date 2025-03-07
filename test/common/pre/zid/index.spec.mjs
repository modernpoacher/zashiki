import {
  expect
} from 'chai'

import zid from '#zashiki/common/pre/zid'

describe('#zashiki/common/pre/zid', () => {
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
