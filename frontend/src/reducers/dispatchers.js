import { createPostApi } from "./api";
import { createPostAction } from "./actions";

export const createPostDispatcher = (postData) => {
  return async (dispatch, getState) => {
    console.log("create post api", postData);
    try {
      // dispatch loading true
      const post = await createPostApi(postData);
      // dispatch loading false
      dispatch(createPostAction(post));
    } catch (e) {
      console.error("Error", e);
    }
  };
};
