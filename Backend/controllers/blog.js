const Blog = require('../models/blog')

// Add Blog //
exports.addBlog = (req, res) => {
    const blog = new Blog({
        title: req.body.blogTitle,
        author: req.body.blogAuthor,
        content: req.body.blogContent
    })
    blog.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Couldn't save the blog!"
            })
        }
        res.json({data});
    });
};

// Get Blog //
exports.getBlog = (req, res) => {
    Blog.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "No Blogs Found!"
            })
        }
        res.json(data)
    });
};