export const getPost =async() =>{
return new Promise ((resolve,reject) =>{
  my.request({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'GET',
    success: (response) => {
      resolve(response);
    },
    fail:(err) =>{
      reject(err);
    }
  });
})
}