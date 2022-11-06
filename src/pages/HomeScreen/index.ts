import { getPost,getBannersAPI } from "../../services/index";

Page({
  data: {
    isLoading: true,
    productList:[],
    banners: [],
  },
    // @ts-ignore ==> test ts ignore flag
  async loadData(){
    this.setData({
      isLoading: true,
    });
    try {
      const [
        productList,
        banners
      ] = await Promise.all([
       getPost(),
       getBannersAPI()
      ]);

      this.setData({
         // @ts-ignore ==> test ts ignore flag
        productList,
         // @ts-ignore ==> test ts ignore flag
        banners,
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