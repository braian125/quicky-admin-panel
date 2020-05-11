import Vue from "vue";
import Vuex from "vuex";
import { ICareerState } from "./modules/career";

Vue.use(Vuex);

export interface IRootState {
  career: ICareerState;
}

export default new Vuex.Store<IRootState>({});
