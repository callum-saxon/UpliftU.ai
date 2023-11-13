<template>
  <v-container class="fade-in">
    <v-row>
      <v-col cols="12" md="7">
        <div class="header-column">
          <h1 class="greeting">Hey, Guest 👋</h1>
          <h2 class="subtitle-1">Let's help you stay on top of your health!</h2>
        </div>
      </v-col>
    </v-row>

    <br />
    <v-divider/>
    <br>

    <h2 class="login-message">Login for a quick checkup..</h2>
  </v-container>
</template>

<script setup>
 //
</script>

<style>
.header-column {
  padding-right: 2rem;
}

.greeting {
  font-size: 3rem !important;
  padding-bottom: 2rem;
}

.login-message {
  font-size: 1.5rem;
}

.wellness-guide {
  padding: 10px;
}

@media only screen and (max-width: 600px) {
  .greeting {
    font-size: 1.5rem;
  }

  .subtitle-1 {
    font-size: 1.2rem;
  }
}
</style>
