<template>
  <div>
    <h1>Dashboard component</h1>
    <button class="btn btn-danger btn-sm" @click="signOut">Log Off</button>

    <hr>
    <AddEvent></AddEvent>
    <hr>

    <br>
    <div class="card-columns col-md-8">
      <EventItem
        v-for="(event_item, index) in this.$store.state.events"
        :event="event_item"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from "../firebaseApp";
import AddEvent from "./AddEvent.vue";
import EventItem from "./EventItem.vue";

export default {
  methods: {
    signOut() {
      this.$store.dispatch("signOut");
      firebaseApp.auth().signOut();
    }
  },

  components: {
    AddEvent,
    EventItem
  },

  mounted() {
    eventsRef.on("value", snap => {
      let events = [];

      snap.forEach(event => {
        events.push(event.val());
      });

      this.$store.dispatch("setEvents", events);
      console.log("events", events);
    });
  }
};
</script>
