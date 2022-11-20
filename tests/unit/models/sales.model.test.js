// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const connection = require("../../../src/models/db/connection");
const salesModel = require("../../../src/models/sales.model");

// Mocks
const { saleMock, allSalesMock, saleByIdOneMock } = require("./mocks/sales.model.mock");

describe("Testes unitários do model de vendas", function () {
  afterEach(sinon.restore);

  it('Deve criar uma nova venda na tabela sales', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    // Act
    const result = await salesModel.insertSales();
    // Assert
    expect(result).to.be.deep.equal({ saleId: 1 });
  });

  it('Deve selecionar todas as vendas', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves(allSalesMock);
    // Act
    const result = await salesModel.selectAllSales();
    // Assert
    expect(result).to.be.deep.equal(allSalesMock[0]);
  });

  it('Deve selecionar uma venda pelo id', async function () {
    //arrange
    sinon.stub(connection, 'execute').resolves(saleByIdOneMock);
    // Act
    const result = await salesModel.selectSaleById(1);
    // Assert
    expect(result).to.be.deep.equal(saleByIdOneMock[0]);
  });
});
