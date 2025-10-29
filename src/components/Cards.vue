<script setup>
  defineProps({
    icon: String,
    title: String,
    description: String
  })
</script>

<template>
  <div
    class="bg-gradient-to-br from-[#161E2C] to-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-6 flex flex-col gap-3 items-center text-center shadow-lg hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl"
  >
    <i :class="icon" class="text-yellow-400 text-4xl drop-shadow-md"></i>
    <h1 class="text-xl font-extrabold text-zinc-100">{{ title }}</h1>
    <p class="text-lg font-[450] text-zinc-300">{{ description }}</p>
  </div>
</template>