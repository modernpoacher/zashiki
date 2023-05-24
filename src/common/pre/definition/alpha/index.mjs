import getDefinition from '#common/definition/alpha/get-definition'

/*
 *  `Promise`
 */
export default {
  assign: 'definition',
  method ({ params }) {
    return getDefinition(params)
  }
}
