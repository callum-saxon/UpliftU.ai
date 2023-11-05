<template>
  <v-container>
    <v-row>
      <v-navigation-drawer app style="background: transparent">
        <v-list>
          <v-list-item v-for="(item, index) in menuItems" :key="index" @click="changeTab(item.value)">
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-col>
        <v-card class="page">
          <v-card-text>
            <v-window v-model="tab">
              <v-window-item value="info" class="info">
                <Info/>
              </v-window-item>

              <v-window-item value="chat" class="chat">
                <Chat/>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Info from "@/components/Info.vue";
import Chat from "@/components/Chat.vue";

export default {
  data: () => ({
    tab: 'info',
    menuItems: [
      { text: 'Info', value: 'info' },
      { text: 'Chat', value: 'chat' },
    ],
  }),
  methods: {
    changeTab(value: string) {
      this.tab = value;
    },
  },
  components: {
    Info,
    Chat,
  },
}
</script>

<style scoped>
.page {
  background: transparent;
  height: 100%;
  box-shadow: none;
}


.info,
.chat {
  background: transparent;
  box-shadow: none !important;
  height: 80vh;
  margin-bottom: 50px;
}

.tabs-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}

.content-wrapper {
  display: flex;
  align-items: center;
  margin-top: 25px;
}

.contact-details {
  text-align: center;
  margin-top: 25px;
}

.social-icons {
  margin-left: 5px;
}

.about-me-content {
  text-align: center;
  font-size: 18px;
}

.larger-font {
  font-size: 20px !important;
  margin-left: 10px;
  color: transparent;
}

.about-me {
  margin-top: 20px;
}

.work-showcase {
  margin-top: 20px;
}

.work-images {
  display: flex;
  justify-content: center;
  align-items: center;
}

.work-images img {
  max-width: 100%;
  height: auto;
  margin: 0 10px;
}
</style>
