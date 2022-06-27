const queriesUser = require('./query');
const { messages } = require('../../../helpers/utils/response/response');
const { ObjectId } = require('mongodb');

const getAllUser = async (req, res) => {
    const findALlUser = await queriesUser.findALlUser({});
    if (findALlUser.err) return res.status(404).json(messages(404, findALlUser.data, 'Data Not Found'));
    return res.status(200).json(messages(200, findALlUser.data, 'Success Get All User'));
};

const getOneUser = async (req, res) => {
    const findOneUser = await queriesUser.findOneUser({_id: ObjectId(req.params.id)});
    if (findOneUser.err) return res.status(404).json(messages(404, findOneUser.data, 'Data Not Found'));
    return res.status(200).json(messages(200, findOneUser.data, 'Success Get One User'));
};
module.exports = {
    getAllUser,
    getOneUser
}