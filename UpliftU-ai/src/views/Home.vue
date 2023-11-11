<template>
  <v-container fluid>
    <v-row>
      <v-navigation-drawer app class="nav">
        <v-list class="sidebar-list">
          <v-list-item
            variant="plain"
            rounded="xl"
            :ripple="false"
            v-for="(item, index) in menuItems"
            :key="index"
            @click="changeTab(item.value)"
            :class="{
              active: isActive(item.value),
              hovered: item.value === hoveredItem,
            }"
            @mouseover="hoveredItem = item.value"
            @mouseleave="hoveredItem = null"
          >
            <v-list-item-content>
              <v-list-item-title :style="{ color: getItemColor(item.value) }">{{
                item.text
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-col class="page">
        <v-window v-model="tab">
          <v-window-item value="info" class="info">
            <Info />
          </v-window-item>

          <v-window-item value="chat" class="chat">
            <Chat />
          </v-window-item>

          <v-window-item value="my-uplift" class="my-uplift">
            <MyUplift />
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Info from "@/components/Info.vue";
import Chat from "@/components/Chat.vue";
import MyUplift from "@/components/My-Uplift.vue";

export default {
  data: () => ({
    tab: "info",
    hoveredItem: null as string | null,
    menuItems: [
      { text: "My Uplift", value: "my-uplift" },
      { text: "Info", value: "info" },
      { text: "Chat", value: "chat" },
      { text: "Contact us", value: "contact-us" },
    ],
  }),
  methods: {
    changeTab(value: string) {
      this.tab = value;
    },
    isActive(itemValue: string) {
      return itemValue === this.tab;
    },
    getItemColor(itemValue: string) {
      if (this.isActive(itemValue) || this.hoveredItem === itemValue) {
        return "#7064fc";
      } else {
        return "grey";
      }
    },
  },
  components: {
    Info,
    Chat,
    MyUplift,
  },
};
</script>

<style scoped>
.nav {
  background: transparent !important;
  border-right: none;
  width: 275px !important;
}

.page {
  width: 100%;
  box-shadow: none;
}

.info,
.dashboard, 
.chat {
  overflow-y: scroll;
  box-shadow: none !important;
  top: 0;
}

.my-uplift::-webkit-scrollbar,
.info::-webkit-scrollbar,
.chat::-webkit-scrollbar {
  width: 0 !important;
}

.sidebar-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.sidebar-list .v-list-item.active .v-list-item-title {
  font-weight: 600;
}

.sidebar-list .v-list-item.hovered .v-list-item.active .v-list-item-title {
  font-weight: 600;
}
</style>
