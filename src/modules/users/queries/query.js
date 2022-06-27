const queries = require('../../../helpers/databases/mongodb/db');

const findALlUser = async (parameter) => {
    const recordset = await queries.findAll(parameter, 'user');
    return recordset;
}

const findOneUser = async (parameter) => {
    const recordset = await queries.findOne(parameter, 'user');
    return recordset;
}

module.exports = {
    findALlUser,
    findOneUser
}