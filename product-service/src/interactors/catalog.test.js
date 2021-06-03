const { Catalog } = require("./catalog")

describe("Catalog", () => {
  it("should be class instance Catalog", () => {
    expect(Catalog.name).toBe("Catalog")
    expect(new Catalog()).toBeInstanceOf(Catalog)
  })
})
