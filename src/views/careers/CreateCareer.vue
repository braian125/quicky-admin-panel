<template>
  <div class="container">
    <h2>New Career</h2>
    <form @submit.prevent="handleCreateCareer">
      <div class="form-group text-left">
        <label for="name">Name</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.name, 'is-valid': errors.name === false}"
          id="name"
          v-model="career.name"
          @blur="checkField($event)"
          aria-describedby="nameHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.name, 'd-none': !errors.name}"
        >Please provide a valid name.</div>
      </div>
      <div class="form-group text-left">
        <label for="name">Description</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.description, 'is-valid': errors.description === false}"
          id="description"
          v-model="career.description"
          @blur="checkField($event)"
          aria-describedby="descriptionHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.description, 'd-none': !errors.description}"
        >Please provide a valid description.</div>
      </div>
      <div class="form-group text-left">
        <label for="name">Icon</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.icon, 'is-valid': errors.icon === false}"
          id="icon"
          v-model="career.icon"
          @blur="checkField($event)"
          aria-describedby="iconHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.icon, 'd-none': !errors.icon}"
        >Please provide a valid icon.</div>
      </div>
      <div class="form-group text-left">
        <label for="status">Status</label>
        <el-switch v-model="career.status" class="ml-2" />
      </div>
      <el-button native-type="submit" type="primary">{{ career.id?'Update':'Save' }}</el-button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { CareerModule } from "./../../store/modules/career";
import {
  createCareer,
  updateCareer,
  getCareers,
  getCareer
} from "./../../api/careers";
import { ICareer } from "./../../types/career";

@Component({})
export default class CreateCareer extends Vue {
  private errors = <any>{};

  private career = <ICareer>{};

  get careers(): [] {
    return this.$store.state.Careers || [];
  }

  private checkField(e: any) {
    if (e.target.value == "") {
      Vue.set(this.errors, e.target.id, true);
    } else {
      Vue.set(this.errors, e.target.id, false);
    }
  }

  private async handleCreateCareer() {
    if (
      this.career.name != "" &&
      this.career.description != "" &&
      this.career.icon != ""
    ) {
      if (this.career.id) {
        const { data } = await updateCareer(this.career.id, this.career);
      } else {
        const { data } = await createCareer(this.career);
      }
      this.career = <ICareer>{};
      this.errors = <any>{};
      this.$message({
        message: "Career save.",
        type: "success"
      });
    } else {
      this.$message.error("Please fill all fields");
    }
  }

  private async fetchCareer(id: string) {
    try {
      const { data } = await getCareer(id, {
        /* Your params here */
      });
      this.career = data;
    } catch (err) {
      console.error(err);
    }
  }

  mounted() {
    if (this.$route.params.id) {
      //this.career = this.careers.find(c => c.id == this.$route.params.id);
      this.fetchCareer(this.$route.params.id);
    } else {
      this.career = <ICareer>{};
    }
  }
}
</script>
