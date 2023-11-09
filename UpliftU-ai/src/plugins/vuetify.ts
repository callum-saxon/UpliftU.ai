/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createApp } from "vue";
import { createVuetify, ThemeDefinition } from "vuetify";
import moment from "moment";

const isDaytime = () => {
  const now = moment();
  const sunrise = moment().set({ hour: 6, minute: 0, second: 0 });
  const sunset = moment().set({ hour: 18, minute: 0, second: 0 });

  return now.isBetween(sunrise, sunset);
};

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: "#121212",
    primary: "#BB86FC",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#CF6679",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

export default createVuetify({
  theme: {
    defaultTheme: isDaytime() ? "myCustomLightTheme" : "myCustomDarkTheme",
    themes: {
      myCustomLightTheme,
      myCustomDarkTheme,
    },
  },
});
