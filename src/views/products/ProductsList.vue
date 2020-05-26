<template>
  <div class="container">
    <el-table :data="products" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="title" label="Name" width="180"></el-table-column>
      <el-table-column prop="description" label="Description"></el-table-column>
      <el-table-column prop="price" label="Price"></el-table-column>
      <el-table-column prop="published" label="Status"></el-table-column>
      <el-table-column label="Actions">
        <template slot-scope="scope">
          <i class="el-icon-edit" @click="handleEdit(scope.$index, scope.row)"></i>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ProductModule } from "./../../store/modules/product";
import { defineComponent, ref, computed } from "@vue/composition-api"

@Component({})
export default class Products extends Vue {

  // need annotation due to `this` in return type
  get products(): [] {
    return this.$store.state.product.products;
  }

  mounted() {
    ProductModule.GetProducts();
  }
}
</script>