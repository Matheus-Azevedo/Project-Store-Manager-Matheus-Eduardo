// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const productModel = require("../../../src/models/product.model");
const productService = require("../../../src/services/product.service");

// Mocks
const { products, product } = require("../models/mocks/product.model.mock");

describe('Testes unitários do serviço de produtos', function () {
  afterEach(sinon.restore);

  it('Deve retornar todos os produtos', async function () {
    // Arrange
    const expected = products;
    sinon.stub(productModel, 'selectAll').resolves(expected);
    // Act
    const result = await productService.getAllProducts();
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: expected });
  });

  it('Deve retornar um produto pelo id', async function () {
    // Arrange
    const id = 1;
    const expected = product;
    sinon.stub(productModel, 'selectById').resolves(expected);
    // Act
    const result = await productService.getProductById(id);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: expected });
  });

  it('Deve retornar um erro ao tentar retornar um produto com id inexistente', async function () {
    // Arrange
    const id = 999;
    const expected = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
    sinon.stub(productModel, 'selectById').resolves(null);
    // Act
    const result = await productService.getProductById(id);
    // Assert
    expect(result).to.be.deep.equal(expected);
  });

  it('Deve retornar um produto criado', async function () {
    // Arrange
    const name = 'Teste';
    const expected = product;
    sinon.stub(productModel, 'insert').resolves(expected);
    // Act
    const result = await productService.createProduct(name);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: expected });
  });

  it('Deve retornar um produto atualizado', async function () {
    // Arrange
    const id = 1;
    const name = 'Teste';
    const expected = product;
    sinon.stub(productModel, 'update').resolves(expected);
    // Act
    const result = await productService.updateProduct(id, name);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: expected });
  });

  it('Deve deletar um produto', async function () {
    // Arrange
    const id = 1;
    sinon.stub(productModel, 'remove').resolves();
    // Act
    const result = await productService.deleteProduct(id);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: 'Product deleted' });
  });

  it('Deve retornar um erro ao tentar deletar um produto com id inexistente', async function () {
    // Arrange
    const id = 999;
    const expected = { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
    sinon.stub(productModel, 'remove').resolves(null);
    // Act
    const result = await productService.deleteProduct(id);
    // Assert
    expect(result).to.be.deep.equal(expected);
  });
});
