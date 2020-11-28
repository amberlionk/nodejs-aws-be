import productList from "./productList.json"

export const getAllProducts = async (event) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    statusCode: 200,
    body: JSON.stringify(productList)
  }
}
