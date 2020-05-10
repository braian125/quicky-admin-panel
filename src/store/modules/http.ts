import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import axios from "axios";
const http = axios.create({
  baseURL: process.env.VUE_APP_API,
});

interface Payload {
  endpoint: string;
  params?: object;
}

@Module({ namespaced: true, name: "Http" })
class Http extends VuexModule {
  private loading = false;

  get getLoading(): boolean {
    return this.loading;
  }

  @Mutation
  setLoading(payload: boolean) {
    this.loading = payload;
  }

  @Action({ rawError: true })
  fetch(payload: Payload) {
    this.context.commit("setLoading", true);
    return new Promise((res, rej) => {
      http
        .get(payload.endpoint, payload.params ? { params: payload.params } : {})
        .then((response) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        })
        .then(() => {
          this.context.commit("setLoading", false);
        });
    });
  }

  @Action
  save(payload: Payload) {
    this.context.commit("setLoading", true);
    return new Promise((res, rej) => {
      http
        .post(payload.endpoint, payload.params ? payload.params : {})
        .then((response) => {
          res(response.data);
        })
        .catch((error) => {
          rej(error);
        })
        .then(() => {
          this.context.commit("setLoading", false);
        });
    });
  }
}

export default Http;
