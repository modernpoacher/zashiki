import getComponents from '#common/components/embark/get-components'

/*
 *  `Promise`
 */
export default {
  assign: 'components',
  method ({ pre: { zid } }) {
    return getComponents({ zid })
  }
}
