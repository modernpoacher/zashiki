import getDescription from '#common/description/embark/get-description'

/*
 *  `Promise`
 */
export default {
  assign: 'description',
  method ({ pre: { zid } }) {
    return getDescription({ zid })
  }
}
