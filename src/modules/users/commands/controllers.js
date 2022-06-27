const commandUser = require('./command');
const { messages } = require('../../../helpers/utils/response/response');

const insertOne = async (req, res) => {
    const insert = await commandUser.insertOne(req.body);
    if (insert.err) return res.status(404).json(messages(404, insert.data, 'Failed Insert Data'));
    return res.status(200).json(messages(200, insert.data, 'Success Insert One User'));
};
module.exports = {
    insertOne,
}