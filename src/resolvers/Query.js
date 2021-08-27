let Query = {
  creator() {
    return {
      id: "abc123",
      name: "Divyanshu Baranwal",
      age: 21,
      email: "divyanshu9210@gmail.com",
    };
  },
  post() {
    return {
      id: "abc@123",
      caption: "Blog Post 1",
      body: "This is the very first blog post with graphQL.",
      published: false,
    };
  },
  users(parent, args, { db }, info) {
    if (!args.query) return db.DUMMY_DATA_USERS;
    return db.DUMMY_DATA_USERS.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) return db.DUMMY_DATA_POSTS;
    return db.DUMMY_DATA_POSTS.filter((post) => {
      return (
        post.caption.toLowerCase().includes(args.query.toLowerCase()) ||
        post.body.toLowerCase().includes(args.query.toLowerCase())
      );
    });
  },
  comments(parent, args, { db }, info) {
    return db.DUMMY_COMMENTS;
  },
  // //recieving an array from the client
  // add(parent, args, {db}, info) {
  //   if (args.numbers.length === 0) {
  //     return 0;
  //   }
  //   return args.numbers.reduce(
  //     (accumulator, currentValueAfterAccumulator) => {
  //       return accumulator + currentValueAfterAccumulator;
  //     }
  //   );
  // },
};

export { Query as default };
