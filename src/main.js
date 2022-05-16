import { createApp } from "vue";
import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(mdiVue, {
    icons: mdijs,
  })
  .mount("#app");
