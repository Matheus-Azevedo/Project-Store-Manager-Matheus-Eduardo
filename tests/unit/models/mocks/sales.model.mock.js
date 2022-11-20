const salesRequestMock = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleMock = {
  productId: 1,
  quantity: 1,
};

const salesResponseExpectedMock = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 1,
    },
    {
      productId: 2,
      quantity: 5,
    },
  ],
};

const allSalesMock = [
  {
    saleId: 1,
    date: "2022-11-19T01:40:15.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: "2022-11-19T01:40:15.000Z",
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: "2022-11-19T01:40:15.000Z",
    productId: 3,
    quantity: 15,
  },
];

const saleByIdOneMock = [
  {
    date: "2022-11-19T01:40:15.000Z",
    productId: 1,
    quantity: 5,
  },
  {
    date: "2022-11-19T01:40:15.000Z",
    productId: 2,
    quantity: 10,
  },
];

module.exports = {
  allSalesMock,
  saleByIdOneMock,
  salesRequestMock,
  salesResponseExpectedMock,
  saleMock,
};
