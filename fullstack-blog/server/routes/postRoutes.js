const express = require("express");
const router = express.Router();

const { allPosts, post, createPost } = require("../controllers/postController");

router.get('/', allPosts);
router.get(`/:id`, post);
router.post('/', createPost);

module.exports = router;
