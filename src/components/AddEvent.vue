<template>
  <div>
    <h4>
      Add event
      <input type="checkbox" v-model="showForm">
    </h4>
    <div class="form row col-md-10 offset-md-1" v-if="showForm">
      <div class="form-group col-md-4 offset-md-4">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="form-control" v-model="event.title">
      </div>
      <div class="form-group col-md-4 offset-md-4">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          class="form-control"
          v-model="event.description"
        >
      </div>
      <div class="form-group col-md-4 offset-md-4">
        <label for="date">Date</label>
        <input type="date" name="date" id="date" class="form-control" v-model="event.date">
      </div>
      <div class="form-group col-md-4 offset-md-4">
        <label for="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          class="form-control"
          v-model="event.location"
        >
      </div>
      <div class="col-md-4 offset-md-4">
        <button class="btn btn-sm btn-outline-primary btn-block" @click="addEvent">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { eventsRef } from "../firebaseApp";

export default {
  data() {
    return {
      event: {
        title: "",
        description: "",
        date: "",
        location: "",
        email: ""
      },
      showForm: false
    };
  },

  methods: {
    addEvent() {
      this.event.email = this.$store.state.user.email;
      eventsRef.push(this.event);
    }
  }
};
</script>
