function productPresenter (product) {
  if (!product) return null
  // make sanitizing here

  return { ...product }
}

module.exports = productPresenter
