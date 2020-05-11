<template>
  <div class="container">
    <el-table :data="careers" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column prop="icon" label="Icon"></el-table-column>
      <el-table-column prop="active" label="Status"></el-table-column>
      <el-table-column label="Actions">
        <template slot-scope="scope">
          <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Action } from "vuex-class";
import { CareerModule } from "./../../store/modules/career";

@Component({})
export default class Careers extends Vue {
  get careers(): [] {
    return this.$store.state.career.careers;
  }

  private async handleEdit(id: number, row: any) {
    this.$router.push({ name: "edit-career", params: { id: row.id } });
  }

  mounted() {
    CareerModule.GetCareers();
  }
}
</script>

<style lang="scss">
.el-icon-edit {
  font-size: 18px;
  cursor: pointer;
}
</style>
