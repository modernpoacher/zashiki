import getDescription from '#common/description/debark/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ pre: { zid } }) {
    return getDescription({ zid })
  }
}
