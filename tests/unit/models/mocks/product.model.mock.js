const products = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const product = {
    id: 1,
    name: "Martelo de Thor",
};

const newProduct = {
  id: 4,
  name: "Capa de invisibilidade",
};

const productUpdated  = {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0
}

module.exports = {
  products,
  product,
  newProduct,
  productUpdated,
};
