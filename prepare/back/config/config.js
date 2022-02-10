const dotenv = require("dotenv");

dotenv.config();

module.export = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "jayMarket",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "",
    "database": "null",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "",
    "database": "null",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}