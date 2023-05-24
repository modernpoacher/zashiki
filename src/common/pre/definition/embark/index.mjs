import getDefinition from '#common/definition/embark/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ pre: { zid } }) {
    return getDefinition({ zid })
  }
}
