<template>
  <v-app-bar class="background" flat>
    <v-app-bar-title>
      <v-img
  :width="225"
  cover
  src="@/assets/logo.png"
></v-img>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
  //
</script>

<style>
  .background {
    background: transparent !important;
    box-shadow: none !important;
    height: 60px;
  }
</style>