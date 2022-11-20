// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const productService = require("../../../src/services/product.service");
const productController = require("../../../src/controllers/product.controller");

// Mocks
const { products, product, newProduct } = require("../models/mocks/product.model.mock");

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

  it('Deve retonar response 201 e o produto criado', async () => {
    // Arrange
    const expected = newProduct;
    const req = { body: newProduct };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'createProduct').resolves({ type: null, message: newProduct });
    // Act
    await productController.createProduct(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(201);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 422 e uma mensagem de produto inválido', async () => {
    // Arrange
    const expected = { message: 'Invalid product name' };
    const req = { body: {} };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productService, "createProduct")
      .resolves({ type: "INVALID_VALUE", message: "Invalid product name" });
    // Act
    await productController.createProduct(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(422);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 200 e o produto atualizado', async () => {
    // Arrange
    const id = 1;
    const expected = product;
    const req = { params: { id }, body: product.name };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'updateProduct').resolves({ type: null, message: product });
    // Act
    await productController.updateProduct(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(200);
    expect(res.json).to.be.calledWith(expected);
  });

  it('Deve retornar response 204 e e não retornar nenhuma resposta', async () => {
    // Arrange
    const id = 1;
    const req = { params: { id } };
    const res = {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productService, 'deleteProduct').resolves({ type: null, message: null });
    // Act
    await productController.deleteProduct(req, res);
    // Assert
    expect(res.status).to.be.calledOnceWith(204);
    expect(res.json).to.be.calledWith();
  });
});
