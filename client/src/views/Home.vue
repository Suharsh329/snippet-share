<template>
  <div class="relative overflow-hidden mb-8 justify-center content">
    <div v-if="loading"></div>
    <div v-else>
      <div v-for="snippet in snippets" :key="snippet.sid">
        <GSnippet :title="snippet.title" :code="snippet.code" :language="snippet.language" :likes="snippet.likes" :tags="snippet.tags" :username="snippet.username" :pic="snippet.profile_pic" :sid="snippet.sid" />
      </div>
      <div class="flex justify-center">
        <button
          class="bg-transparent hover:bg-indigo-900 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-indigo-900 hover:border-transparent rounded"
          @click="login"
        >View More</button>
      </div>
    </div>
  </div>
</template>

<script>
import GSnippet from "../components/GSnippet";
import axios from "axios";
export default {
  name: "home",
  components: {
    GSnippet
  },
  data() {
    return {
      snippets: [],
      loading: false
    };
  },
  methods: {
    login: function() {
      console.log("hey");
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/snippets")
      .then(response => {
        console.log(response.data);
        this.snippets = response.data;
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => this.loading = false);
  }
};
</script>
<style scoped>
.content {
  min-height: 90vh;
}
</style>

