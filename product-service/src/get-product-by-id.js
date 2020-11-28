import productList from "./productList.json"

export const getProductById = async (event) => {
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
