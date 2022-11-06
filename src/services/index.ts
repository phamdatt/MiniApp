import { request } from "./request";

export const getPost = () => {
  return request({ path:'new-products',method:'GET' });
};

export const getBannersAPI = () => {
  return request({ path: '/banners',method:'GET' });
};