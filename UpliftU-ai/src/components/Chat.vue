<template>
  <v-container class="gpt-container" v-scroll-to-bottom="scrollOptions">
    <template>
      <v-dialog max-width="400" persistent>
        <v-card>
          <v-card-title class="headline">API Not Connected</v-card-title>
          <v-card-text>
            This is a incomplete model. Please update the API key with a valid
            key to use the chat functionality.
          </v-card-text>
        </v-card>
      </v-dialog>
    </template>

    <v-row>
      <v-col class="input-row">
        <v-text-field
          v-model="currentMessage"
          label="Need any help? Send a message!"
          variant="outlined"
          append-icon="mdi-send"
          @click:append="sendMessage"
          @keyup.enter="sendMessage"
          ref="messageInput"
        ></v-text-field>
        <v-btn rounded="xl" @click="startVoiceInput">
          <v-icon>mdi-microphone</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

const startVoiceInput = () => {
  console.log("Voice input started");
};

const scrollOptions = ref({
  container: ".chat-container",
});

onMounted(() => {
  scrollOptions.value = { container: ".chat-container", duration: 0 };
});
</script>

<style scoped>
.gpt-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chat-container {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.chat-messages {
  display: flex;
  flex-direction: column;
}

.input-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  margin-top: 700px;
  bottom: 0;
}

.v-text-field {
  width: 70%;
}

.v-btn {
  background-color: #7164fc;
}
</style>
