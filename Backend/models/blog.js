const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema ({
    title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100
    },
    author: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    content: {
        type: String,
        required: true,
        maxlength: 1000
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);