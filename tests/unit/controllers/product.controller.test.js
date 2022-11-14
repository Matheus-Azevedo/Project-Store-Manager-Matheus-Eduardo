// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const productService = require("../../../src/services/product.service");
const productController = require("../../../src/controllers/product.controller");

// Mocks
const { products, product } = require("../models/mocks/product.model.mock");

describe('Testes unitários do controller de produtos', () => {
  afterEach(sinon.restore);

  it('Deve retornar response 200 e todos os produtos', async () => {
    // Arrange
    sinon.stub(productService, 'getAllProducts').resolves({ type: null, message: products });
    const expected = products;
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // Act
    await productController.getAllProducts(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(200);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 200 e um produto pelo id', async () => {
    // Arrange
    sinon.stub(productService, 'getProductById').resolves({ type: null, message: product });
    const id = 1;
    const expected = product;
    const req = { params: { id } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    // Act
    await productController.getProductById(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(200);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 404 e uma mensagem de produto não encontrado', async () => {
    // Arrange
    const id = 5;
    const expected = { message: 'Product not found' };
    const req = { params: { id } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "getProductById")
      .resolves({ type: "PRODUCT_NOT_FOUND", message: "Product not found" });
    // Act
    await productController.getProductById(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(404);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 404 e uma mensagem de produto não encontrado quando a busca por todos os produtos falha', async () => {
    // Arrange
    const expected = { message: 'Product not found' };
    const req = {};
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, 'getAllProducts')
      .resolves({ type: "PRODUCT_NOT_FOUND", message: "Product not found" });
    // Act
    await productController.getAllProducts(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(404);
    expect(res.json).to.be.calledWith(expected);
  });
});
