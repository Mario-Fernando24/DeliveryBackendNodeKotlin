const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) =>{}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

//valores que me permite conectarme a la base de dato
const databaseConfig = {
    'host': '127.0.0.1',
    'port': '5432',
    'database': 'delivery_db',
    'user': 'postgres',
    'password': '1234567'
};

const db = pgp(databaseConfig);

//para utilizar esta variable en varias partes de la app
module.exports = db;