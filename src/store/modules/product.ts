import {
    VuexModule,
    Module,
    Mutation,
    Action,
    getModule,
  } from "vuex-module-decorators";
  import { getProducts } from "./../../api/products";
  import store from "@/store";

// eslint-disable-next-line
export interface IProductState {
  title: string;
  description: string;
  price: number;
  published: boolean;
}

@Module({ namespaced: true, dynamic: true, store, name: "product" })
class Product extends VuexModule implements IProductState {
  public title = "";
  public description = "";
  public price = 0;
  public published = false;

  public products = [];

  get getProducts() {
    return this.products;
  }

  @Mutation
  private SET_PRODUCTS(products: []) {
    this.products = products;
  }

  @Action
  public async GetProducts() {
    const { data } = await getProducts({
      /* Your params here */
    });

    this.SET_PRODUCTS(data);
  }
}

export const ProductModule = getModule(Product);