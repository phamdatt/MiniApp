import { request } from "./request";

export const getPost = () => {
  return request({ path:'new-products',method:'GET' });
};