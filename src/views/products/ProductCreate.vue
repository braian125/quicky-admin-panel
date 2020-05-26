<template>
  <div class="container">
    <h2>New Product</h2>
    <form @submit.prevent="handleCreateProduct">
      <div class="form-group text-left">
        <label for="name">Name</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.title, 'is-valid': errors.title === false}"
          id="title"
          v-model="product.title"
          @blur="checkField($event)"
          aria-describedby="nameHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.title, 'd-none': !errors.title}"
        >Please provide a valid name.</div>
      </div>
      <div class="form-group text-left">
        <label for="name">Description</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.description, 'is-valid': errors.description === false}"
          id="description"
          v-model="product.description"
          @blur="checkField($event)"
          aria-describedby="descriptionHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.description, 'd-none': !errors.description}"
        >Please provide a valid description.</div>
      </div>
      <div class="form-group text-left">
        <label for="name">Price</label>
        <input
          type="text"
          v-bind:class="{'form-control': true, 'is-invalid' : errors.price, 'is-valid': errors.price === false}"
          id="price"
          v-model.number="product.price"
          @blur="checkField($event)"
          aria-describedby="priceHelp"
        />
        <div
          v-bind:class="{'invalid-feedback': errors.price, 'd-none': !errors.price}"
        >Please provide a valid price.</div>
      </div>
      <div class="form-group text-left">
        <label for="status">Status</label>
        <el-switch v-model="product.published" class="ml-2" />
      </div>
      <el-button native-type="submit" type="primary">{{ product.id?'Update':'Save' }}</el-button>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

import { ProductModule } from "./../../store/modules/product";
import {
  createProduct,
  updateProduct,
  getProducts,
  getProduct
} from "./../../api/products";
import { IProduct } from "./../../types/product";

@Component({})
export default class CreateProduct extends Vue {
  private errors = <any>{};
  private product = <IProduct>{};

  private checkField(e: any) {
    if (e.target.value == "") {
      Vue.set(this.errors, e.target.id, true);
    } else {
      Vue.set(this.errors, e.target.id, false);
    }
  }

  private async handleCreateProduct() {
    if (
      this.product.title != "" &&
      this.product.description != "" &&
      this.product.price != 0
    ) {
      if (this.product.id) {
        const { data } = await updateProduct(this.product.id, this.product);
      } else {
        const { data } = await createProduct(this.product);
      }
      this.product = <IProduct>{};
      this.errors = <any>{};
      this.$message({
        message: "Product save.",
        type: "success"
      });
    } else {
      this.$message.error("Please fill all fields");
    }
  }

  private async fetchProduct(id: string) {
    try {
      const { data } = await getProduct(id, {
        /* Your params here */
      });
      this.product = data;
    } catch (err) {
      console.error(err);
    }
  }

  mounted() {
    if (this.$route.params.id) {
      //this.career = this.careers.find(c => c.id == this.$route.params.id);
      this.fetchProduct(this.$route.params.id);
    } else {
      this.product = <IProduct>{};
    }
  }
}
</script>
