import { createApp } from "vue";
import App from "./App.vue";
import setRem from "./utils/rem";

setRem(1920, 1920);

createApp(App).mount("#app");
