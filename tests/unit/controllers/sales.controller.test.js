// Requires modules
const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const { expect } = require("chai");

chai.use(sinonChai);

const salesController = require("../../../src/controllers/sales.controller");
const salesService = require("../../../src/services/sales.service");
const { salesRequestMock } = require("../models/mocks/sales.model.mock");

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
});
