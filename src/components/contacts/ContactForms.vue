<template>
  <section>
    <form @submit.prevent="submitFormData">
      <div>
        <label>Name</label>
        <input type="text" v-model="newFriendName"/>
      </div>

      <div>
        <label>Phone Number</label>
        <input type="tel" v-model="newPhoneNumber" />
      </div>

      <div>
        <label>Email Address</label>
        <input type="email" v-model="newEmailAddress"/>
      </div>

      <div>
        <button>Add</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "ContactForms",
  emits: ['add-contact'],
  data() {
    return {
      newFriendName: '',
      newPhoneNumber: '',
      newEmailAddress: ''
    };
  },
  methods: {
    submitFormData() {
      console.log(this.newFriendName);
      // Emit the 'add-contact' event with the form data
      this.$emit('add-contact', 
        this.newFriendName,
        this.newPhoneNumber,
        this.newEmailAddress
      );

      // Reset the form after submission
      this.newFriendName = '';
      this.newPhoneNumber = '';
      this.newEmailAddress = '';
    }
  }
};
</script>
