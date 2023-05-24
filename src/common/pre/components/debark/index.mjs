import getComponents from '#common/components/debark/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ pre: { zid } }) {
    return getComponents({ zid })
  }
}
