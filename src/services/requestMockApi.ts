interface PropsRequestMockApiInterface {
  time:number;
  data:any
}

export const requestMockApi = (props:PropsRequestMockApiInterface) =>{
  const {time,data} = props;

  return new Promise((resolve) =>{
    // @ts-ignore
    setTimeout(() =>{
      resolve(data);
    },time);
  })
}
