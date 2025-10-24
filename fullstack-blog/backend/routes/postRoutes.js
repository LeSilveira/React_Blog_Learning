const express = require('express');
const router = express.Router();

const {allPosts, post} = require('../controllers/postController');

router.get('/', allPosts);
router.get(`/:id`, post);

module.exports = router;