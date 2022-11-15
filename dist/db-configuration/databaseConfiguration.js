"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
// local
const pool = mysql.createPool({
    connectionLimit: 10,
    multipleStatements: true,
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'agarthulir'
});
// module.exports = pool;
exports.default = pool;
//# sourceMappingURL=databaseConfiguration.js.map