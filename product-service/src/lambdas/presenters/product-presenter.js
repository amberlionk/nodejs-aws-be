function productPresenter (product) {
  if (!product) return undefined
  // make sanitizing here

  return { ...product }
}

module.exports = productPresenter
