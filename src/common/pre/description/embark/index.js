import getDescription from 'zashiki/common/description/embark/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ pre: { jid } }) {
    return getDescription({ jid })
  }
}
