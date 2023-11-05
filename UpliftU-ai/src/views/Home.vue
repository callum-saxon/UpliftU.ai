<template>
  <v-container>
    <v-row>
      <v-navigation-drawer app style="background: transparent">
        <v-list class="sidebar-list">
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
.v-row {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.page {
  background: transparent;
  height: 80vh;
  box-shadow: none;
  margin-bottom: 50px;
}

.info,
.chat {
  background: transparent;
  box-shadow: none !important;
  height: 100%;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
