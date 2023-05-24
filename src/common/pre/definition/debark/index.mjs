import getDefinition from '#common/definition/debark/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ pre: { zid } }) {
    return getDefinition({ zid })
  }
}
