import getDescription from '#zashiki/common/description/alpha/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ params }) {
    return getDescription(params)
  }
}
