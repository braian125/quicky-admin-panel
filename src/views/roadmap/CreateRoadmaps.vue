<template>
  <div class="container">
    <form @submit.prevent="handleCreateRoadmap">
      <div class="form-group text-left">
        <label for="name">Name</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.name, 'is-valid': errors.name === false}"
          id="name"
          v-model="roadmap.name"
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
          v-model="roadmap.description"
          @blur="checkField($event)"
          aria-describedby="descriptionHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.description, 'd-none': !errors.description}"
        >Please provide a valid description.</div>
      </div>
      <div class="form-group text-left">
        <label for="status">Status</label>
        <el-switch v-model="roadmap.status" class="ml-2" />
      </div>
      <el-button native-type="submit" type="primary">{{ roadmap.id?'Update':'Save' }}</el-button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

//import { roadmapModule } from "./../../store/modules/roadmap";
import { createRoadmap } from "./../../api/roadmaps";

@Component({})
export default class CreateRoadmap extends Vue {
  private errors = {};

  private roadmap = {};

  get roadmaps(): [] {
    return this.$store.state.roadmaps || [];
  }

  private checkField(e: any) {
    if (e.target.value == "") {
      Vue.set(this.errors, e.target.id, true);
    } else {
      Vue.set(this.errors, e.target.id, false);
    }
  }

  private async handleCreateRoadmap() {
    if (
      this.roadmap.name != "" &&
      this.roadmap.description != ""
    ) {
      if (this.roadmap.id) {
        //const { data } = await updateroadmap(this.roadmap.id, this.roadmap);
      } else {
        const { data } = await createRoadmap(this.roadmap);
        console.log(data);
      }
      this.roadmap = {};
      this.errors = {};
      this.$message({
        message: "roadmap save.",
        type: "success"
      });
    } else {
      this.$message.error("Please fill all fields");
    }
  }

  /*private async fetchroadmap(id: number) {
    try {
      const { data } = await getroadmap(id, {
         Your params here 
      });
      this.roadmap = data;
    } catch (err) {
      console.error(err);
    }
  }*/

  mounted() {
    if (this.$route.params.id) {
      //this.roadmap = this.roadmaps.find(c => c.id == this.$route.params.id);
      //this.fetchroadmap(this.$route.params.id);
    } else {
      this.roadmap = {};
    }
  }
}
</script>
