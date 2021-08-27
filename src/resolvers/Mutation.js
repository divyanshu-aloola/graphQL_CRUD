import uuidv4 from "uuid/v4";

let Mutation = {
  createUser(parent, args, { db }, info) {
    const emailTaken = db.DUMMY_DATA_USERS.some(
      (user) => user.email === args.data.email
    );
    if (emailTaken) throw new Error("Email Already Exists!");
    const user = {
      id: uuidv4(),
      ...args.data,
    };
    db.DUMMY_DATA_USERS.push(user);
    return user;
  },
  updateUser(parent, args, { db }, info) {
    const { id, data } = args;
    const foundUser = db.DUMMY_DATA_USERS.find((user) => user.id === id);

    if (!foundUser) {
      throw new Error("User not found");
    }

    if (typeof data.name === "string") {
      foundUser.name = data.name;
    }
    if (typeof data.age !== "undefined") {
      foundUser.age = data.age;
    }
    if (typeof data.email === "string") {
      const emailTaken = db.DUMMY_DATA_USERS.some(
        (user) => user.email === data.email
      );
      if (emailTaken) {
        throw new Error("Email Taken");
      }
      foundUser.email = data.email;
    }
    return foundUser;
  },
  deleteUser(parent, args, { db }, info) {
    const { id } = args;
    let foundUser = db.DUMMY_DATA_USERS.find((user) => user.id === id);
    if (foundUser) {
      //If User is valid, deleting that user
      db.DUMMY_DATA_USERS = db.DUMMY_DATA_USERS.filter(
        (user) => user.id !== id
      );
      // Now delting posts associated with that user
      db.DUMMY_DATA_POSTS = db.DUMMY_DATA_POSTS.filter((postItem) => {
        // Iterating over posts, checking if a post is created by the user we need to delete
        const matchCondition = postItem.author === id;
        if (matchCondition) {
          // After getting a post with author which is no more available
          // First we will delete all comments associated with that post
          // delting all the comments made on that post by any user
          db.DUMMY_COMMENTS = db.DUMMY_COMMENTS.filter(
            (comment) => comment.post !== postItem.id
          );
        }

        return !matchCondition;
      });
      // Now delting comments associated with that user
      db.DUMMY_COMMENTS = db.DUMMY_COMMENTS.filter(
        (comment) => comment.author !== id
      );
      return foundUser;
    } else {
      throw new Error(`No user found for id: ${id}`);
    }
  },
  createPost(parent, args, { db }, info) {
    const { author } = args.data;

    const isAuthorValid = db.DUMMY_DATA_USERS.some(
      (user) => user.id === author
    );

    if (!isAuthorValid) throw new Error(`No author found for id: ${author}`);

    const newPost = {
      id: uuidv4(),
      ...args.data,
    };
    db.DUMMY_DATA_POSTS.push(newPost);
    return newPost;
  },
  deletePost(parent, args, { db }, info) {
    const { id } = args;
    let validPost = db.DUMMY_DATA_POSTS.find((post) => post.id === id);
    if (validPost) {
      db.DUMMY_DATA_POSTS = db.DUMMY_DATA_POSTS.filter(
        (post) => post.id !== id
      );
      db.DUMMY_COMMENTS = db.DUMMY_COMMENTS.filter(
        (comment) => comment.post !== id
      );

      // db.DUMMY_DATA_POSTS = db.DUMMY_DATA_POSTS.filter((post) => {
      //   let foundMatch = post.id === id;
      //   if (foundMatch) {
      //     //If a post for given post_id is found
      //     // Then deleting all comments associated with that post
      //     db.DUMMY_COMMENTS = db.DUMMY_COMMENTS.filter(
      //       (comment) => comment.post !== post.id
      //     );
      //   }
      //   return !foundMatch;
      // });
      return validPost;
    } else {
      throw new Error(`No post found with id: ${id}`);
    }
  },
  updatePost(parent, args, { db }, info) {
    const { id, data } = args;
    const foundPost = db.DUMMY_DATA_POSTS.find((post) => post.id === id);
    if (!foundPost) {
      throw new Error(`No Post found with id: ${id}`);
    }
    if (typeof data.caption !== "undefined") {
      foundPost.caption = data.caption;
    }
    if (typeof data.body !== "undefined") {
      foundPost.body = data.body;
    }
    if (typeof data.published !== "undefined") {
      foundPost.published = data.published;
    }

    return foundPost;
  },
  createComment(parent, args, { db }, info) {
    const { text, author, post } = args.data;
    const isAuthorValid = db.DUMMY_DATA_USERS.some(
      (user) => user.id === author
    );
    const isPostValid = db.DUMMY_DATA_POSTS.some(
      (p) => p.id === post && p.published
    );

    if (!isAuthorValid || !isPostValid)
      throw new Error(
        "Either post or author is wrong or the post is not published yet. Check Again."
      );

    const newComment = {
      id: uuidv4(),
      text,
      author,
      post,
    };
    db.DUMMY_COMMENTS.push(newComment);
    return newComment;
  },
  deleteComment(parent, args, { db }, info) {
    const { id } = args;
    const foundComment = db.DUMMY_COMMENTS.find((comment) => comment.id === id);
    if (foundComment) {
      db.DUMMY_COMMENTS = db.DUMMY_COMMENTS.filter(
        (comment) => comment.id !== id
      );
      return foundComment;
    } else {
      throw new Error(`No comment found with id: ${id}`);
    }
  },
  updateComment(parent, args, { db }, info) {
    const { id, data } = args;
    const foundComment = db.DUMMY_COMMENTS.find((comment) => comment.id === id);
    if (!foundComment) {
      throw new Error(`No comment found for id: ${id}`);
    }
    if (typeof data.text !== "undefined") {
      foundComment.text = data.text;
    }

    return foundComment;
  },
};

export { Mutation as default };
