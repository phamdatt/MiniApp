import { request } from "./request";
import { productMockApi } from "../mock/productMockApi";

export const getPost = () => {
  return request({ path:'new-products',method:'GET',requestParams:productMockApi });
};