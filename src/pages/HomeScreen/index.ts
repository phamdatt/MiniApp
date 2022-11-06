import { getPost } from "../../services/index";

Page({
  data: {
    isLoading: true,
    productList:[]
  },
    // @ts-ignore ==> test ts ignore flag
  async loadData(){
    this.setData({
      isLoading: true,
    });
    try {
      const [
        productList
      ] = await Promise.all([
       getPost()
      ]);

      this.setData({
         // @ts-ignore ==> test ts ignore flag
        productList,
        isLoading: false,
      });
    } catch {
      this.setData({
        isLoading: false,
      });
    }
  },
  // Life cycle
  async onReady() {
      // @ts-ignore ==> test ts ignore flag
    this.loadData();
  }
});