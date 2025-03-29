<template>
  <section>
    <header><h1>Friends Contact</h1></header>
    <ContactForms></ContactForms>
    <FriendsContact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :friend-name="friend.friendName"
      :phone-number="friend.phoneNumber"
      :email-address="friend.emailAddress"
      :is-favorite="friend.isFavorite"
      @click-is-favorite="(id) => toggleFavoriteState(id)"
    ></FriendsContact>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      friends: [
        {
          id: "f1",
          friendName: "John Doe",
          phoneNumber: "+1234567890",
          emailAddress: "john.doe@example.com",
          isFavorite: true,
        },
        {
          id: "f2",
          friendName: "Jane Smith",
          phoneNumber: "+1987654321",
          emailAddress: "jane.smith@example.com",
          isFavorite: false,
        },
        {
          id: "f3",
          friendName: "Michael Brown",
          phoneNumber: "+1122334455",
          emailAddress: "michael.brown@example.com",
          isFavorite: true,
        },
        {
          id: "f4",
          friendName: "Emily Johnson",
          phoneNumber: "+1567890123",
          emailAddress: "emily.johnson@example.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteState(friendId) {
      const friend = this.friends.find((f) => f.id === friendId);
      if (friend) {
        friend.isFavorite = !friend.isFavorite;
      }
    },
  },
};
</script>
