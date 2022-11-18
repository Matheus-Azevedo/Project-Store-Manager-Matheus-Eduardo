// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const connection = require("../../../src/models/db/connection");
const salesModel = require("../../../src/models/sales.model");

// Mocks
const { saleMock } = require("./mocks/sales.model.mock");

describe("Testes unitários do model de vendas", function () {

  it('Deve criar uma nova venda na tabela sales', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    // Act
    const result = await salesModel.insertSales();
    // Assert
    expect(result).to.be.deep.equal({ saleId: 1 });
  });
});
