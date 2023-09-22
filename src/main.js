import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './Components/UI/BaseCard.vue'
import BaseBtn from './Components/UI/BaseBtn.vue'
import BaseDialog from './Components/UI/BaseDialog.vue'
const app = createApp(App);
app.component('base-card' , BaseCard);
app.component('base-btn' , BaseBtn);
app.component('base-dialog' , BaseDialog);

app.mount('#app');