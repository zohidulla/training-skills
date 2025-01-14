const { productModel } = require("../models");

class ProductRepo {
  constructor(model) {
    this.model = model;
  }

  async getById(productId) {
    return this.model.findById(productId);
  }
}

module.exports = new ProductRepo(productModel);
