import getDefinition from '#zashiki/common/definition/debark/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ pre: { zid } }) {
    return getDefinition({ zid })
  }
}
