import { GraphQLServer } from "graphql-yoga";

import db from "./db";
import Query from "./resolvers/Query";
import User from "./resolvers/User";
import Post from "./resolvers/Post";
import Mutation from "./resolvers/Mutation";
import Comment from "./resolvers/Comment";

// Resolvers
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    User,
    Post,
    Comment,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log("Server has been started on PORT 4000");
});
