const bcrypt = require("bcrypt");

const hashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

module.exports = hashedPassword;
