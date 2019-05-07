<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">{{ event.title }}</h4>
      <p class="card-text">{{ event.description }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Date: {{ event.date }}</li>
      <li class="list-group-item">Location: {{ event.location }}</li>
      <li class="list-group-item">Host: {{ event.email }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["event"]
};
</script>

