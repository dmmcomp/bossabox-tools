const mongoose = require('mongoose');
const {Tool} = require('../model/Tool')


module.exports = {
    async show(req, res) {

        const { tag } = req.query;
        const query = (typeof tag !== 'undefined' ? { tags: tag } : null);
        const tools = await Tool.find(query);
        return res.json(tools);
    },
    async create(req, res) {
        const tool = await Tool.create(req.body);
        res.status(201);
        res.json(tool);
        return res;
    },

    async remove(req, res) {
        await Tool.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
    }
}