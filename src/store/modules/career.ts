import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";
import { getCareers } from "./../../api/careers";
import store from "@/store";

// eslint-disable-next-line
export interface ICareerState {
  name: string;
  description: string;
  icon: string;
  active: boolean;
  //roadmaps: string[]
}

@Module({ namespaced: true, dynamic: true, store, name: "career" })
class Career extends VuexModule implements ICareerState {
  public name = "";
  public description = "";
  public icon = "";
  public active = false;

  public careers = [];

  get getCareers() {
    return this.careers;
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }

  @Mutation
  private SET_DESCRIPTION(description: string) {
    this.description = description;
  }

  @Mutation
  private SET_ICON(icon: string) {
    this.icon = icon;
  }

  @Mutation
  private SET_ACTIVE(active: boolean) {
    this.active = active;
  }

  @Mutation
  private SET_CAREERS(careers: []) {
    this.careers = careers;
  }

  @Action
  public async GetCareers() {
    const { data } = await getCareers({
      /* Your params here */
    });

    this.SET_CAREERS(data.result);
  }
}

export const CareerModule = getModule(Career);
