import productList from "./productList.json"
import ProductService from "./../services/product-service"

/**
 * get all products handler
 *
 * @param  {object} event
 * @param  {object} context
 * @typedef {object} response
 * @property {object} headers
 * @property {number} statusCode
 * @property {object} body
 * @returns {response}
 */
export function getAllProducts (event, context) {
  const productService = new ProductService(productList)

  const response = {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(productService.getProducts())
  }

  return response
}
