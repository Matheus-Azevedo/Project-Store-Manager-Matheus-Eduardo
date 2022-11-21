// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const salesController = require("../../../src/controllers/sales.controller");
const salesService = require("../../../src/services/sales.service");
const { salesRequestMock, allSalesMock } = require("../models/mocks/sales.model.mock");

describe('Testes unitários do cotroller de sales', () => {
  afterEach(sinon.restore);

  it('Deve retornar status 201 e a venda criada', async function () {
    // Arrange
    const itensSold = salesRequestMock;
    const expected = {
      id: 1,
      itemsSold: salesRequestMock,
    };
    const req = { body: itensSold };
    const res = {};
    const status = sinon.stub().returns(res);
    const json = sinon.stub().returns(res);
    res.status = status;
    res.json = json;
    sinon.stub(salesService, 'createSale').resolves({ type: null, message: expected });
    // Act
    await salesController.createSale(req, res);
    // Assert
    expect(status).to.have.been.calledWith(201);
    expect(json).to.have.been.calledWith(expected);
  });

  it('Deve retornar status 200 e todas as vendas', async function () {
    // Arrange
    const expected = allSalesMock;
    const res = {};
    const status = sinon.stub().returns(res);
    const json = sinon.stub().returns(res);
    res.status = status;
    res.json = json;
    sinon.stub(salesService, 'getAllSales').resolves({ type: null, message: expected });
    // Act
    await salesController.getAllSales({}, res);
    // Assert
    expect(status).to.have.been.calledWith(200);
    expect(json).to.have.been.calledWith(expected);
  });

  it('Deve retornar status 200 e a venda com o id informado', async function () {
    // Arrange
    const expected = allSalesMock[0];
    const res = {};
    const status = sinon.stub().returns(res);
    const json = sinon.stub().returns(res);
    res.status = status;
    res.json = json;
    sinon.stub(salesService, 'getSaleById').resolves({ type: null, message: expected });
    // Act
    await salesController.getSaleById({ params: { id: 1 } }, res);
    // Assert
    expect(status).to.have.been.calledWith(200);
    expect(json).to.have.been.calledWith(expected);
  });

  it('Deve retornar status 404 e a mensagem "Sale not found" quando a venda não for encontrada', async function () {
    // Arrange
    const idNotFound = 999;
    const expected = 'Sale not found';
    const res = {};
    const status = sinon.stub().returns(res);
    const json = sinon.stub().returns(res);
    res.status = status;
    res.json = json;
    sinon.stub(salesService, 'getSaleById').resolves({ type: 'SALE_NOT_FOUND', message: expected });
    // Act
    await salesController.getSaleById({ params: { id: idNotFound } }, res);
    // Assert
    expect(status).to.have.been.calledWith(404);
    expect(json).to.have.been.calledWith({ message: expected });
  });

  it('Deve retornar status 200 e a venda atualizada', async function () {
    // Arrange
    const itensSold = salesRequestMock;
    const expected = {
      id: 1,
      itemsSold: salesRequestMock,
    };
    const req = { body: itensSold, params: { id: 1 } };
    const res = {};
    const status = sinon.stub().returns(res);
    const json = sinon.stub().returns(res);
    res.status = status;
    res.json = json;
    sinon.stub(salesService, 'updateSaleById').resolves({ type: null, message: expected });
    // Act
    await salesController.updateSaleById(req, res);
    // Assert
    expect(status).to.have.been.calledWith(200);
    expect(json).to.have.been.calledWith(expected);
  });
});
