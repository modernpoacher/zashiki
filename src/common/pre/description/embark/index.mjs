import getDescription from '#zashiki/common/description/embark/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ pre: { zid } }) {
    return getDescription({ zid })
  }
}
