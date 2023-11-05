<template>
  <v-container class="gpt-container">
    <v-container class="chat-container">
      <v-row class="chat-messages">
        <!-- User messages -->
        <v-col v-for="(message, index) in userMessages" :key="index" class="user-message">
          {{ message }}
        </v-col>

        <!-- ChatGPT messages -->
        <v-col v-for="(message, index) in chatGptMessages" :key="index" class="chatgpt-message">
          {{ message }}
        </v-col>
      </v-row>

      <v-row class="input-row">
        <v-col>
          <v-text-field v-model="currentMessage" label="Need any help? Send a message!" variant="outlined"></v-text-field>
        </v-col>
        <v-col>
          <v-btn @click="sendMessage">Send</v-btn>
          <v-btn @click="startVoiceInput">Voice Input</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const userMessages = ref([]);
const chatGptMessages = ref([]);
const currentMessage = ref('');

const sendMessage = async () => {
  if (currentMessage.value) {
    userMessages.value.push(currentMessage.value);
    
    // Call the backend API to get the response
    const systemBehaviour = "Your desired system behavior here";
    const response = await axios.post('/api/get_response', {
      prompt: currentMessage.value,
      systemBehaviour: systemBehaviour,
    });

    chatGptMessages.value.push(response.data);

    currentMessage.value = '';
  }
};

const startVoiceInput = () => {
  console.log('Voice input started');
};
</script>

<style scoped>
.gpt-container {
  height: 100%;
}

.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.user-message {
  align-self: flex-end;
  background-color: #e2f0cb;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
}

.chatgpt-message {
  align-self: flex-start;
  background-color: #d9d9d9;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
}

.input-row {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.v-text-field {
  width: 100%;
}

.v-btn {
  width: 100px;
}
</style>