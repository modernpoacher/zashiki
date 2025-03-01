import {
  expect
} from 'chai'

import omega from '@modernpoacher/zashiki/common/pre/response/omega'

describe('@modernpoacher/zashiki/common/pre/response/omega', () => {
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
      it('is the string \'response\'', () => {
        expect(omega.assign)
          .to.equal('response')
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
