const mongoose = require('mongoose')

const ToolSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [String]
});

const Tool = mongoose.model('Tool', ToolSchema);
module.exports = {
    Tool
}