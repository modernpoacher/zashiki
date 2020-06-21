import getDefinition from 'zashiki/common/definition/omega/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ params }) {
    return getDefinition(params)
  }
}
