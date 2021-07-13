const productList = require("./../drivers/productList.json")

/**
 * get all products handlers
 *
 * @param  {object} event
 * @param  {string} event.productId url path param
 * @param  {object} context
 * @typedef {object} Response
 * @property {object} headers
 * @property {number} statusCode
 * @property {object} body
 * @returns {Response}
 */
async function getProductById (event, context) {
  const { productId } = event

  productList.find(product => product.id === productId)

  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(productList[0])
  }
}

module.exports = { getProductById }
