<template>
  <v-app-bar class="background" flat>
    <v-app-bar-title class="background">
      <v-img class="logo" :width="150" cover src="@/assets/logo.png"></v-img>
    </v-app-bar-title>

    <v-row style="flex-grow: 1" justify="end" v-if="isInbetween && !isMobile">
      <v-col cols="auto">
        <v-row v-if="showMenu">
          <v-btn class="nav" variant="plain">info</v-btn>
          <v-btn class="nav" variant="plain">dashboard</v-btn>
          <v-btn class="nav" variant="plain">chat</v-btn>
        </v-row>
        <v-btn variant="outlined" rounded="xl" @click="toggleMenu">
          <v-icon v-if="!showMenu">mdi-menu</v-icon>
          <v-icon v-else>mdi-close</v-icon>
          menu
        </v-btn>
      </v-col>
    </v-row>

    <v-btn icon size="small" variant="plain">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
  <div v-if="isMobile">
    <v-bottom-navigation
      :elevation="0"
      mode="shift"
      grow
      rounded="xl"
      style="background-color: #7164fce4; height: 8%"
      v-if="showBottomNav || isMobile"
    >
      <v-btn rounded="lg" value="info">
        <v-icon>mdi-information</v-icon>
        <span>Info</span>
      </v-btn>

      <v-btn rounded="lg" value="my-uplift">
        <v-icon>mdi-view-dashboard</v-icon>
        <span>My Uplift</span>
      </v-btn>

      <v-btn rounded="lg" value="chat">
        <v-icon>mdi-chat</v-icon>
        <span>Chat</span>
      </v-btn>

      <v-btn rounded="lg" value="contact-us">
        <v-icon>mdi-phone</v-icon>
        <span>Contact Us</span>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const showMenu = ref(false);
const showBottomNav = ref(false);
const isMobile = ref(window.innerWidth <= 600);
const isInbetween = ref(window.innerWidth <= 1280);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

const handleResize = () => {
  isMobile.value = window.innerWidth <= 600;
  isInbetween.value = window.innerWidth <= 1280;
};
</script>

<style>
.background {
  background-color: transparent !important;
  box-shadow: none;
  height: 55px;
}

.logo {
  pointer-events: none;
  margin-left: 2%;
}

.v-btn:hover {
  background-color: #7164fc52;
  border-color: #7064fc;
  transition: 0.5s ease;
}

.fade-in {
  animation: fadeIn 1.5s ease-out;
  opacity: 0;
  animation-fill-mode: forwards; /* Maintain the final state of the animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Start 20px below its normal position */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* End at its normal position */
  }
}
</style>
