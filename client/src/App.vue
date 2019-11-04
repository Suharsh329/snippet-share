<template>
  <div id="app">
    <nav class="flex items-center justify-between flex-wrap bg-indigo-900 p-4">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <!-- <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>-->
        <router-link :to="{ name: 'home'}">
          <span class="font-semibold text-xl tracking-tight">snippet-share</span>
        </router-link>
      </div>
      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-white border-white"
          @click="toggleMenu"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        v-if="!user"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
        :class="{ hidden: isHidden }"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <button class="bg-transparent text-white py-2 px-4" @click="login">Sign In</button>
          </li>
          <li class="mr-3">
            <button
              class="bg-transparent hover:bg-white text-white font-semibold hover:text-indigo-900 py-2 px-4 border border-white hover:border-transparent rounded"
              @click="register"
            >Sign Up</button>
          </li>
        </ul>
      </div>
      <div
        v-else
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto lg:block pt-6 lg:pt-0"
        :class="{ hidden: isHidden }"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <button
              class="bg-transparent hover:bg-white text-white font-semibold hover:text-indigo-900 py-2 px-4 border border-white hover:border-transparent rounded"
            >Create</button>
          </li>
          <li class="mr-3">
            <button class="bg-transparent text-white py-2 px-4">Account</button>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
    <footer
      class="w-full text-center border-t border-grey p-4 pin-b"
    >&copy;snippet-share All rights reserved.</footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: false,
      isHidden: true
    };
  },
  methods: {
    toggleMenu: function() {
      this.isHidden = !this.isHidden;
    },
    login: function() {
      this.$router.push("login");
    },
    register: function() {
      this.$router.push("register");
    }
  }
};
</script>

