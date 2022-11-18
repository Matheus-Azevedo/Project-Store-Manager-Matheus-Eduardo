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

module.exports = {
  salesRequestMock,
  salesResponseExpectedMock,
  saleMock,
};
