const connection = require('./connection');

const findAll = async (parameter, collection) => {
    const db = await connection.getDb();
    const recordset = await db.collection(collection).find(parameter).toArray();
    if (recordset.length < 1) return { err: true, data: recordset}
    return { err: null, data: recordset}
};

const findOne = async (parameter, collection) => {
    const db = await connection.getDb();
    const recordset = await db.collection(collection).findOne(parameter);
    if (!recordset) return { err: true, data: recordset}
    return { err: null, data: recordset}
};

const insertOne = async (document, collection) => {
    const db = await connection.getDb();
    const recordset = await db.collection(collection).insertOne(document);
    if (!recordset.acknowledged) return { err: true, data: null}
    return { err: null, data: document}
};

module.exports = {
    findAll,
    findOne,
    insertOne
}
