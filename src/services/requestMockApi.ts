interface PropsRequestMockApiInterface {
  time:number;
  data:any
}

export const requestMockApi = (props:PropsRequestMockApiInterface):Promise<any> =>{
  const {time,data} = props;

  return new Promise((resolve) =>{
    setTimeout(() =>{
      resolve(data)
    },time);
  })
}