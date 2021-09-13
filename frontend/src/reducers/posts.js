import { CREATE_POST } from "./actions";

const reducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case CREATE_POST:
      console.log("create post reducer called", action.payload);
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default reducer;
