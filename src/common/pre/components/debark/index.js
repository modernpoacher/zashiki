import getComponents from 'zashiki/common/components/debark/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ pre: { jid } }) {
    return getComponents({ jid })
  }
}
