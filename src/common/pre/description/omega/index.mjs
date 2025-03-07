import getDescription from '#zashiki/common/description/omega/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ params }) {
    return getDescription(params)
  }
}
