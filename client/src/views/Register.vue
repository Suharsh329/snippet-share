<template>
  <div class="relative overflow-hidden mb-8 justify-center content">
    <div class="w-full max-w-sm mr-auto ml-auto mt-20">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Full Name</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name"
            v-model="name"
            required
            autofocus
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            v-model="username"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            required
            v-model="email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Confirm Password</label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Confirm Password"
            required
            v-model="c_password"
          />
          <p class="text-red-500 text-xs italic">Passwords do not match!</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="register"
          >Sign Up</button>
          <router-link
            class="inline-block align-baseline font-bold text-sm text-indigo-900 hover:text-indigo-800"
            :to="{name: 'login'}"
          >Already have an account?</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      name: "",
      username: "",
      email: "",
      password: "",
      c_password: ""
    };
  },
  methods: {
    register: function() {
      if (this.password !== this.c_password) this.errors = [];
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 85vh;
}
</style>