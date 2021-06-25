const express = require('express')
const router = express.Router()

const { addBlog, getBlog } = require('../controllers/blog')

router.post('/addBlog', addBlog); // Add Blog POST Route //
router.get('/getBlog', getBlog); // Get Blog GET Route //

module.exports = router;