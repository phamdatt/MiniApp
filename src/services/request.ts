
export interface PropsRequestInterface {
  path:string;
  method:'GET'|'POST';
  data?:any;
}

//base url api
const BASE_URL = 'https://raw.githubusercontent.com/tikivn/miniapp-getting-started/main/shop/src/services/mock/';

// function request call api
export const request = async (props:PropsRequestInterface) => {
  const {path,method,data} =props;
  return new Promise((resolve, reject) => {
    my.request({
      url: `${BASE_URL}/${path}.json`,
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      data,
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};