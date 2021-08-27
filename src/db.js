let DUMMY_COMMENTS = [
  {
    id: "c1",
    text: "Comment number 1",
    author: "1",
    post: "abc123",
  },
  {
    id: "c2",
    text: "Comment number 2",
    author: "1",
    post: "abc456",
  },
  {
    id: "c3",
    text: "Comment number 3",
    author: "3",
    post: "abc456",
  },
  {
    id: "c4",
    text: "Comment number 4",
    author: "1",
    post: "abc567",
  },
  {
    id: "c5",
    text: "Comment number 5",
    author: "1",
    post: "abc567",
  },
  {
    id: "c6",
    text: "Comment number 6",
    author: "2",
    post: "abc567",
  },
  {
    id: "c7",
    text: "Comment number 7",
    author: "3",
    post: "abc567",
  },
];
let DUMMY_DATA_USERS = [
  {
    id: "1",
    name: "Divyanshu Baranwal",
    age: 21,
    email: "divyanshu9210@gmail.com",
  },
  {
    id: "2",
    name: "Tushar",
    age: 21,
    email: "divyanshu9210@gmail.com",
  },
  {
    id: "3",
    name: "Jignesh",
    age: 21,
    email: "divyanshu9210@gmail.com",
  },
  {
    id: "4",
    name: "Nidhi Patel",
    age: 21,
    email: "nidhi123@gmail.com",
  },
];

let DUMMY_DATA_POSTS = [
  {
    id: "abc123",
    caption: "a",
    body: "A",
    published: true,
    author: "1",
  },
  {
    id: "abc456",
    caption: "z",
    body: "B",
    published: false,
    author: "2",
  },
  {
    id: "abc567",
    caption: "c",
    body: "C",
    published: false,
    author: "2",
  },
];
const db = {
  DUMMY_DATA_USERS,
  DUMMY_DATA_POSTS,
  DUMMY_COMMENTS,
};

export { db as default };
