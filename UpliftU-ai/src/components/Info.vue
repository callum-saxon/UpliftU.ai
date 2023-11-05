<template>
  <v-container class="text-details">
    <v-row>
      <v-col cols="12" md="6">
        <div class="header-column">
          <h1>Info.</h1>
          <br>
          <h2>Many people are building Jarvis like applications, each trying to make the world and their work more efficient, but we for one don't want to live in a world where ai is focused so much on making you so efficient, and yet it doesn't understand how you feel or what motivates you. This is what we're focused on with UpliftU.ai</h2>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="header-column">
        </div>
      </v-col>
      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
        <div class="card">
          <div class="card-details">
            <p class="text-body">{{ card.details }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cards = [
  { details: 'UpliftU.ai provides personalized mental health support, understanding your emotions and motivations to create a holistic well-being experience.' },
  { details: 'Discover a compassionate AI companion with UpliftU.ai, tailored to enhance your mental wellness journey and foster a deeper connection with yourself.' },
  { details: 'Experience breakthroughs in mental health care with UpliftU.ai, a revolutionary AI that not only optimizes efficiency but also empathetically engages with your feelings and aspirations.' },
];
</script>

<style>
.header-column {
  padding-right: 2rem;
}

.header-column h1 {
  font-size: 2em;
}

.header-column h2 {
  font-size: 1.5em;
  color: #555;
}
.text-details .row {
  overflow-y: scroll;
}

.text-details .row::-webkit-scrollbar {
  width: 0;
}

.card {
  width: 100%;
  height: 50vh;
  border-radius: 20px;
  padding: 1.8rem;
  border: 2px solid #c3c6ce;
  transition: 0.5s ease-out;
  overflow: visible;
  margin-top: 2rem;
}

.card-details {
  color: black;
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.text-body {
  color: rgb(134, 134, 134);
  font-size: 1.5em;
}

.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

.card:hover {
  border-color: #008bf8;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover .card-button {
  transform: translate(-50%, 50%);
  opacity: 1;
}
</style>
