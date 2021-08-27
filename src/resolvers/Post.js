let Post = {
  author(parent, args, { db }, info) {
    return db.DUMMY_DATA_USERS.find((user) => user.id === parent.author);
  },
  post_comments(parent, args, { db }, info) {
    return db.DUMMY_COMMENTS.filter((comment) => comment.post === parent.id);
  },
};

export { Post as default };
