<template>
  <v-container class="text-details text">
    <v-row>
      <v-col cols="4">
        <h1>> Chat.</h1>
        <v-expand-transition>
          <div
            v-if="isHovering"
            class="d-flex transition-fast-in-fast-out bg-orange-darken-2 v-card--reveal text-h2"
            style="height: 100%;"
          >
            Lorem ipsum
          </div>
        </v-expand-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>

<style>
.row {
  overflow-y: scroll;
}

.row::-webkit-scrollbar {
  width: 0;
}
</style>

