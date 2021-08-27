let User = {
  user_posts(parent, args, { db }, info) {
    const dt = db.DUMMY_DATA_POSTS.filter((post) => {
      return post.author === parent.id;
    });
    return dt;
  },
  user_comments(parent, args, { db }, info) {
    return db.DUMMY_COMMENTS.filter((comment) => comment.author === parent.id);
  },
};

export { User as default };
