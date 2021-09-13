export const CREATE_POST = "CREATE_POST";

export const createPostAction = (postData) => ({
  type: CREATE_POST,
  payload: postData,
});
