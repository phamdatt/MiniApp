import { ENNABLE_MOCK_API } from "../config/index";

export interface PropsRequestInterface {
  path:string;
  method:'GET'|'POST';
  requestParams?:any;
}
const BASE_URL = 'https://raw.githubusercontent.com/tikivn/miniapp-getting-started/main/shop/src/services/mock/'
export const request = async ({
  path,
  method = 'GET',
  requestParams
}:PropsRequestInterface) => {
  if(!ENNABLE_MOCK_API) {
    return new Promise((resolve) =>{
      setTimeout(() =>{
        resolve(requestParams)
      },2000)
    })
  }else{
    return new Promise((resolve, reject) => {
      my.request({
        url: `${BASE_URL}/${path}.json`,
        headers: {
          'Content-Type': 'application/json',
        },
        method,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
};