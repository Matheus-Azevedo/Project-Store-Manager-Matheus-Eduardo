const nameCanNotBeEmpty = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  next();
};

const nameCanNotBeLessThanFivCharacters = (req, res, next) => {
  const { name } = req.body;
  const nameIsToShort = name.length < 5;
  if (nameIsToShort) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = {
  nameCanNotBeEmpty,
  nameCanNotBeLessThanFivCharacters,
};
