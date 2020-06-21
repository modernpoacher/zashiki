import getDefinition from 'zashiki/common/definition/embark/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ pre: { jid } }) {
    return getDefinition({ jid })
  }
}
