import Vue from "vue";
import Vuex from "vuex";
import { ICareerState } from "./modules/career";

Vue.use(Vuex);

// eslint-disable-next-line
export interface IRootState {
  career: ICareerState;
}

export default new Vuex.Store<IRootState>({});
