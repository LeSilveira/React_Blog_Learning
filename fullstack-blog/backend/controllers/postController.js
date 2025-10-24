const mockPosts = [
  { id: 1, title: 'My First Blog Post' },
  { id: 2, title: 'Learning React Router' },
  { id: 3, title: 'Building a Full-Stack App' },
];

const allPosts = (req, res) => {
    res.json(mockPosts);
}

const post = (req, res) => {
    const {id} = req.params;
    res.json(mockPosts.find((post) => post.id === Number(id)));
}

module.exports = {
    allPosts, post
};