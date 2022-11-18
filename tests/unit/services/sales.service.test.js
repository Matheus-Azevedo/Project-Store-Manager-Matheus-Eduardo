// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const salesModel = require("../../../src/models/sales.model");
const salesService = require("../../../src/services/sales.service");

// Mocks
const { salesRequestMock, salesResponseExpectedMock } = require("../../unit/models/mocks/sales.model.mock");

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
});


