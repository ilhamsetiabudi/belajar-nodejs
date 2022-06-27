const queries = require('../../../helpers/databases/mongodb/db');

const insertOne = async (document) => {
    const recordset = await queries.insertOne(document, 'user');
    return recordset;
}

module.exports = {
    insertOne,
}