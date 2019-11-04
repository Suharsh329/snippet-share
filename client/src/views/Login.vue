<template>
  <div class="relative overflow-hidden mb-8 justify-center content mt-auto mb-auto">
    <div class="w-full max-w-xs mr-auto ml-auto mt-20">
      <hr />
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p v-if="error" class="text-red-500 text-center text-sm mb-2">Incorrect email or password!</p>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500' : error }"
            type="email"
            placeholder="Email"
            v-model="email"
            required
            autofocus
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            :class="{ 'border-red-500' : error }"
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>
        <div class="mb-6">
          <div class="md:w-1/3"></div>
          <label class="block text-gray-600 font-bold">
            <input class="mr-2" type="checkbox" v-model="checked" />
            <span class="text-sm">Remember Me</span>
          </label>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            @click="login"
          >Sign In</button>
          <a
            class="inline-block align-baseline font-bold text-sm text-indigo-900 hover:text-indigo-800"
            href="#"
          >Forgot Password?</a>
        </div>
        <div class="mb-4 mt-4">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-600 font-bold">
            <router-link :to="{ name: 'register' }">
              <span class="text-sm">Don't have an account?</span>
            </router-link>
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      email: "",
      password: "",
      checked: false
    };
  },
  methods: {
    login: function() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
.content {
  min-height: 85vh;
}
</style>