const Sequelize = require('sequelize');
const hashtag = require('./hashtag');
const image = require('./image');
const post = require('./post');
const user = require('./user');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Hashtag = hashtag;
db.Image = image;
db.Post = post;
db.User = user;

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// const Sequelize = require("sequelize");
// const env = process.env.NODE_ENV || "development";
// const config = require("../config/config")[env];
// const db = {};

// const sequelize = new Sequelize(config.database, config.username, config.password, config);

// db.Hashtag = require("./hashtag");
// db.Image = require("./image");
// db.Post = require("./post");
// db.User = require("./user");

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db); // 각 associate 해서 연결하여 sequelize에 모델들 등록 -> express에서 sequelize를 등록해준다
//   }
// })

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// module.exports = db;
