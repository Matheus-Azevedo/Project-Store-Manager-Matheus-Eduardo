// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const salesModel = require("../../../src/models/sales.model");
const salesService = require("../../../src/services/sales.service");

// Mocks
const { salesRequestMock, salesResponseExpectedMock, allSalesMock } = require("../../unit/models/mocks/sales.model.mock");

describe("Testes unitários do serviço de vendas", function () {
  afterEach(sinon.restore);

  it('Deve retornar a venda criada com sucesso', async function () {
    // Arrange
    const itensSold = salesRequestMock;
    sinon.stub(salesModel, 'insertSales').resolves({ saleId: 1 });
    sinon.stub(salesModel, 'insertSalesProducts').resolves();
    // Act
    const result = await salesService.createSale(itensSold);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: salesResponseExpectedMock });
  });

  it('Deve retornar todas as vendas', async function () {
    // Arrange
    sinon.stub(salesModel, 'selectAllSales').resolves(allSalesMock);
    // Act
    const result = await salesService.getAllSales();
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: allSalesMock });
  });

  it('Deve retornar uma venda pelo id', async function () {
    // Arrange
    const saleId = 1;
    sinon.stub(salesModel, 'selectSaleById').resolves(allSalesMock);
    // Act
    const result = await salesService.getSaleById(saleId);
    // Assert
    expect(result).to.be.deep.equal({ type: null, message: allSalesMock });
  });

  it('Deve retornar uma mensagem de erro quando não encontrar uma venda pelo id', async function () {
    // Arrange
    const saleId = 999;
    const expected = { type: "SALE_NOT_FOUND", message: "Sale not found" };
    sinon.stub(salesModel, 'selectSaleById').resolves([]);
    // Act
    const result = await salesService.getSaleById(saleId);
    // Assert
    expect(result).to.be.deep.equal(expected);
  });
});


