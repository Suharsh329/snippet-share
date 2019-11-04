<template>
  <div class="relative overflow-hidden mb-8">
    <div class="bg-white rounded-t-lg overflow-hidden border-gray-400 p-4 p-10 flex justify-center">
      <div class="max-w-lg rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="mb-4">
            <span class="font-semibold text-xl text-gray-900 mb-2">{{ title }}</span>
            <span class="float-right text-gray-500">
              <i class="cursor-default" data-feather="heart"></i>
            </span>
            <span class="float-right text-gray-500">{{ likes }} &nbsp;</span>
          </div>
          <div class="text-left">
            <pre v-highlight class="min-w-lg rounded bg-gray-900">
              <span
  class="text-yellow-100 float-right cursor-pointer button mr-2"
  @click="copy(sid, $event)"
>
                {{ value }}
              </span>
              <code class="min-w-full max-w-lg py-0" :class="language" :id="sid">
                {{ newCode }}
              </code>
            </pre>
          </div>
        </div>
        <div class="px-6 py-4">
          <span
            v-for="tag in tags"
            :key="tag.id"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2"
          >{{ tag }}</span>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-500 mr-2"
          >{{ language }}</span>
          <span class="float-right pb-3">
            <img
              :src="`https://api.adorable.io/avatars/${pic}@adorable.png`"
              alt="Profile Picture"
              class="h-10 w-10 rounded-full"
            />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
export default {
  name: "GSnippet",
  props: {
    title: String,
    likes: String,
    language: String,
    code: String,
    tags: Array,
    pic: String,
    username: String,
    sid: Number
  },
  data() {
    return {
      value: "Copy"
    };
  },
  computed: {
    newCode: function() {
      return this.code.replace(/\\n/g, "\n");
    }
  },
  methods: {
    copy: function(containerId, e) {
      const selection = window.getSelection();
      const range = document.createRange();
      const code = document.getElementById(containerId);
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      try {
        document.execCommand("copy");
        selection.removeAllRanges();
        e.target.innerText = "Copied!";
        setTimeout(() => {
          e.target.innerText = this.value;
        }, 1200);
      } catch (e) {
        this.$refs.toast.showToast("Could not copy. Press Ctrl-C or Cmd-C");
      }
    }
  },
  mounted() {
    feather.replace();
  }
};
</script>
<style scoped>
code {
  overflow-x: auto;
}
</style>

