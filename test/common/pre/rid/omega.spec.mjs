import {
  expect
} from 'chai'

import omega from '#zashiki/common/pre/rid/omega'

describe('#zashiki/common/pre/rid/omega', () => {
  describe('`omega`', () => {
    it('is an object', () => {
      expect(omega)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(omega)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(omega)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'rid\'', () => {
        expect(omega.assign)
          .to.equal('rid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(omega.method)
          .to.be.a('function')
      })
    })
  })
})
