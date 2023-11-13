<template>
  <v-container class="fade-in">
    <v-row class="center">
      <v-col cols="12" md="6">
        <div class="header-column">
          <h1 class="headline">Contact Us</h1>
          <v-form>
            <v-text-field v-model="name" label="Your Name"></v-text-field>
            <v-text-field v-model="email" label="Your Email"></v-text-field>
            <v-textarea v-model="message" label="Your Message"></v-textarea>
            <v-btn @click="sendEmail" variant="outlined" rounded="xl" size="large" style="margin-top: 20px; font-weight: 300">
              <p style="margin-right: 0.5rem">SEND EMAIL</p>
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </v-form>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="@/assets/contact_image.svg"
          alt="Contact Image"
          class="responsive-image"
        />
      </v-col>

      <!-- Other content, if any -->

    </v-row>
  </v-container>
</template>

<script setup>
let name = '';
let email = '';
let message = '';

const sendEmail = () => {
  window.open(`mailto:saxoncallum@gmail.com?subject=Contact from ${name}&body=${message}`);
};
</script>

<style>
.center {
  justify-content: center !important;
  align-items: center;
}
.responsive-image {
  pointer-events: none;
  height: auto;
}

.header-column {
  padding-right: 2rem;
}

.headline {
  font-size: 1.2rem !important;
  padding-bottom: 2rem;
}
</style>
