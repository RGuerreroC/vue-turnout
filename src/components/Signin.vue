<template>
  <div class="container">
    <h1>Sign In</h1>
    <div class="form-inline row col-md-12 justify-content-center">
      <div class="form-group col-md-10 align-center">
        <input type="text" placeholder="e-Mail" class="form-control col-md-8" v-model="email">
        <input type="password" placeholder="Password" class="form-control" v-model="password">
        <button class="btn btn-outline-primary mt-2" @click="signIn">Sign In</button>
      </div>
      <div class="form-group col-md-10">
        <router-link to="/signup">Not a user? Sign up</router-link>
      </div>
      <br>
      <p>{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
