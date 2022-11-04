
/// <reference lib="dom" /> 
// => fix missing setTimeout

import clone  from 'lodash-es/clone'

interface HomeData {
  value: string;
}
interface HomeDataCustomMethods {
  parseDataToString(data: HomeData): string;
} 
Page<HomeData, HomeDataCustomMethods>({
  data: { value: "Phạm Tiến Đạt" },
  // @ts-ignore ==> test ts ignore flag
  onLoad(query = {}) {
   
    setTimeout(() => {
      this.setData(clone({ value: "React Native" }));
    }, 1000);
  },
  parseDataToString(data:Object) {
    return JSON.stringify(data, null, 2);
  },
});
 
 