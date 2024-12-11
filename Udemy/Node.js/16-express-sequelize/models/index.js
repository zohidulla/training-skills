const Sequelize = require("sequelize");

const sequelize = new Sequelize("diarybook", "postgres", "1234567", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

const db = {};

db.sequelize = Sequelize;
db.sequelize = sequelize;

db.diary = require("./diary.model")(sequelize, Sequelize);
db.comment = require("./comment.model")(sequelize, Sequelize);

db.diary.hasMany(db.comment, {
  as: "comment",
  onDelete: "CASCADE",
  constraints: true,
});
db.comment.belongsTo(db.diary, {
  foreignKey: "diaryId",
  as: "diary",
});

module.exports = db;
