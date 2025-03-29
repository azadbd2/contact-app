import { createApp } from 'vue'
import App from './App.vue'
import FriendsContact from "./components/contacts/FriendsContact.vue"
import ContactForms from "./components/contacts/ContactForms.vue"
import "@/assets/css/style.css"

createApp(App)
    .component('FriendsContact', FriendsContact)
    .component('ContactForms', ContactForms)
    .mount('#app')