import {
  expect
} from 'chai'

import remove from '@modernpoacher/zashiki/common/pre/rid/remove'

describe('@modernpoacher/zashiki/common/pre/rid/remove', () => {
  describe('`remove`', () => {
    it('is an object', () => {
      expect(remove)
        .to.be.an('object')
    })

    it('has the key `assign`', () => {
      expect(remove)
        .to.have.property('assign')
    })

    it('has the key `method`', () => {
      expect(remove)
        .to.have.property('method')
    })

    describe('`assign`', () => {
      it('is the string \'rid\'', () => {
        expect(remove.assign)
          .to.equal('rid')
      })
    })

    describe('`method`', () => {
      it('is a function', () => {
        expect(remove.method)
          .to.be.a('function')
      })
    })
  })
})
