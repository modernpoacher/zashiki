import getDescription from '#common/description/omega/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ params }) {
    return getDescription(params)
  }
}
