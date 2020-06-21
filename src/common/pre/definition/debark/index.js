import getDefinition from 'zashiki/common/definition/debark/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ pre: { jid } }) {
    return getDefinition({ jid })
  }
}
