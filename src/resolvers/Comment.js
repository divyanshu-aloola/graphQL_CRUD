let Comment = {
  author(parent, args, { db }, info) {
    return db.DUMMY_DATA_USERS.find((user) => user.id === parent.author);
  },
  post(parent, args, { db }, info) {
    return db.DUMMY_DATA_POSTS.find((post) => post.id === parent.post);
  },
};

export { Comment as default };
