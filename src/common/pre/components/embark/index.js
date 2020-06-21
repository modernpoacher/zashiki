import getComponents from 'zashiki/common/components/embark/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ pre: { jid } }) {
    return getComponents({ jid })
  }
}
