// Requires modules
const chai = require("chai");
const sinon = require('sinon');
const sinonChai = require("sinon-chai");
const { expect } = require('chai');

chai.use(sinonChai);

const connection = require('../../../src/models/db/connection');
const productModel = require('../../../src/models/product.model');

// Mocks
const { products, product, newProduct } = require('./mocks/product.model.mock');

describe('Testes unitários do model de produtos', function () {
  afterEach(sinon.restore);

  it('Deve retornar todos os produtos', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves(products);
    // Act
    const result = await productModel.selectAll();
    // Assert
    expect(result).to.be.deep.equal(products[0]);
  });

  it('Deve retornar um produto', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([[product]]);
    // Act
    const result = await productModel.selectById(1);
    // Assert
    expect(result).to.be.deep.equal(product);
  });

  it('Deve inserir um produto', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
    // Act
    const result = await productModel.insert(newProduct.name);
    // Assert
    expect(result).to.be.deep.equal(newProduct);
  });

  it('Deve atualizar um produto', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves();
    // Act
    const result = await productModel.update(1, newProduct.name);
    // Assert
    expect(result).to.be.deep.equal(newProduct);
  });
});
