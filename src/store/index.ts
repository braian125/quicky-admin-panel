import Vue from "vue";
import Vuex from "vuex";
import { IProductState } from './modules/product';

Vue.use(Vuex);

// eslint-disable-next-line
export interface IRootState {
  product: IProductState
}

export default new Vuex.Store<IRootState>({});
