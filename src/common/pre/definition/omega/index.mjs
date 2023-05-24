import getDefinition from '#common/definition/omega/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ params }) {
    return getDefinition(params)
  }
}
