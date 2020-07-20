import getDescription from 'zashiki/common/description/debark/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ pre: { zid } }) {
    return getDescription({ zid })
  }
}
