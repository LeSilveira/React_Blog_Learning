const db = require("../db/db");

const allPosts = async (req, res) => {
  try {
    const posts = await db("posts").select("*");

    if (!posts) {
      res
        .status(404)
        .json({ message: "Not a single post in the database was found" });
    } else {
      res.json(posts);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error while fetching all the posts",
        error: error.message,
      });
  }
};

const post = async (req, res) => {
  const { id } = req.params;
  try {
    const foundPost = await db("posts").where({ id: id }).first();

    if (!foundPost) {
      res
        .status(404)
        .json({
          message: `Can't seem to find the post with id: ${id} in the database, r u sure it's the right id?`,
          error: error.message,
        });
    } else {
      res.json(foundPost);
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: `Error while fetching data for the post with id: ${id}`,
        error: error.message,
      });
  }
};

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const [newId] = await db("posts").insert({ title, content });
    const newPost = await db("posts").where({ id: newId }).first();

    res.status(201).json(newPost);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error while creating a new post",
        error: error.message,
      });
  }
};

module.exports = {
  allPosts,
  post,
  createPost,
};
