<template>
  <main
    class="flex items-center justify-center text-justify align-middle h-dvh"
  >
    <p>
      Your IP is:
      {{ ip }}
    </p>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  htmlAttrs: {
    lang: "es",
    class: "dark:bg-#141414 dark:text-white",
  },
});
const { data: ip } = await useFetch("/api/info");
</script>

<style>
:root {
  font-family: InterVariable, sans-serif;
  font-feature-settings: "liga" 1, "calt" 1, "tnum" 1;
}
@font-face {
  font-family: "interVariable";
  src: url("/InterVariable.woff2") format("woff2");
}
@font-face {
  font-family: "interVariableItalic";
  src: url("/InterVariable-Italic.woff2") format("woff2");
}
</style>
