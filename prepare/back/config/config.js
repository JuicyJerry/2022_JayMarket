const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  "development": {
    "username": "root",
    "password": "1qasw234~!",
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
