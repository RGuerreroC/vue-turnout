<template>
  <div class="container">
    <h1>Sign In</h1>
    <div class="form-inline row justify-content-center">
      <div class="form-group align-center">
        <input type="text" placeholder="e-Mail" class="form-control" v-model="email">
        <input type="password" placeholder="Password" class="form-control" v-model="password">
        <button class="btn btn-outline-primary mt-2" @click="signIn">Sign In</button>
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
