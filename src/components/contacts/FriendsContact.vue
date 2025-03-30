<template>
  <ul>
    <li>{{ friendName }} {{ isFavorite ? "(Favorite)" : "" }} 
      <button class="delete" @click="deleteContact">X</button></li>
    <li>
      <button @click="toggleShowDetails()">
        {{ showDetails ? "Hide" : "View Details" }}
      </button>
      <button @click="toggleFavorite">
        {{ getFavBtnText }}
      </button>
    </li>
    <li v-if="showDetails">
      <ul>
        <li>{{ phoneNumber }}</li>
        <li>{{ emailAddress }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FriendsContact",
  props: {
    id: {
      type: String,
      required: true,
    },
    friendName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      requred: true,
    },
    emailAddress: {
      type: String,
      requred: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  emits:['click-is-favorite','delete-contact'],
  methods: {
    toggleShowDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit("click-is-favorite", this.id);
    },
    deleteContact(){
      this.$emit('delete-contact', this.id)
      console.log(this.id)
    }
  },
  computed: {
    getFavBtnText() {
      return this.isFavorite ? "Unfavorite" : "Favorite";
    },
  },
};
</script>
