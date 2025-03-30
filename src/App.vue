<template>
  <section>
    <header><h1>Friends Contact</h1></header>
    <ContactForms @add-contact="addContact"></ContactForms>
    <FriendsContact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :friend-name="friend.friendName"
      :phone-number="friend.phoneNumber"
      :email-address="friend.emailAddress"
      :is-favorite="friend.isFavorite"
      @click-is-favorite="(id) => toggleFavoriteState(id)"
      @delete-contact="(id)=>deleteContact(id)"
    ></FriendsContact>
  </section>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      friends: [],
    };
  },
  methods: {
    toggleFavoriteState(friendId) {
      const friend = this.friends.find((f) => f.id === friendId);
      if (friend) {
        friend.isFavorite = !friend.isFavorite;
      }
    },
    addContact(name,phoneNumber, emailAddress){
      const newFriendList ={
        id: new Date().toISOString(),
        friendName:name,
        phoneNumber:phoneNumber,
        emailAddress:emailAddress,
        isFavorite:false
      }
     this.friends.push(newFriendList)
    },
    deleteContact(friendId){
      console.log('fid'+ friendId)
this.friends=this.friends.filter(friend=>friend.id!==friendId)
    },
  },
};
</script>
