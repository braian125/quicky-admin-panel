<template>
  <div class="app_login p-5">
    <div class="col-sm-6 col-xs-12 col-xl-4">
      <div class="container login-box p-4 h-100" v-bind:class="{'saving': loading}">
        <img class="loading" v-if="loading" src="./../assets/images/loader.gif" alt />
        <form id="login-form" @submit.prevent="login" class="text-left">
          <div class="text-center mt-5 mb-2">
            <img src="./../assets/images/gosoft.png" alt width="150px" />
          </div>
          <div class="form-group mt-5">
            <label for="usuario">Usuario</label>
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="usuario"
              aria-describedby="emailHelp"
              placeholder="Usuario ó Email"
            />
            <!--small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small-->
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="password"
              placeholder="Contraseña"
            />
          </div>
          <button type="submit" class="btn btn-light btn-block" :disabled="loading">Iniciar</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getModule } from "vuex-module-decorators";
import Http from "./../store/modules/http";

@Component({})
export default class Login extends Vue {
  private username = "bvanegas@futbolpro.co";
  private password = "password";

  get loading(): boolean {
    return this.$store.state.Http.loading;
  }

  login(): void {
    if (this.username != "" && this.password != "") {
      const http = getModule(Http, this.$store);
      http
        .save({
          endpoint: "api/v1/login",
          params: { email: this.username, password: this.password }
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.$message({
        message: "Usuario y/o password no pueden ser vacios",
        type: "warning"
      });
    }
  }
}
</script>
<style lang="scss">
.app_login {
  color: white;
  min-height: 100vh;
  display: block;
  position: relative;
  background-image: url("./../assets/images/OE9UX40.jpg");
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;

  > div {
    height: 85vh;
  }

  > .row {
    padding-left: 0px !important;
    padding-right: 0px !important;

    .col {
      padding-left: 0px;
      padding-right: 0px;
    }
  }

  .login-box {
    background-color: #075e54;
    border-radius: 9px;
  }
}
</style>
