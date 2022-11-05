import { request } from "./request";
import { productMockApi } from "../mock/productMockApi";
import { ENNABLE_MOCK_API } from "../config/index";
import { requestMockApi } from "./requestMockApi";

export const getPost = () => {
  if(!ENNABLE_MOCK_API){
    return requestMockApi({
      time:2000,
      data:productMockApi
    });
  }else{
    return request({ path:'new-products',method:'GET' });
  }
};