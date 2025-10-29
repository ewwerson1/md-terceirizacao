<template>
  <section class="bg-[#161E2C] text-white py-24">
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">Faça Parte da Nossa Equipe</h2>
      <p class="text-zinc-300 max-w-2xl mx-auto mb-12">
        Buscamos talentos apaixonados por excelência para construir o futuro conosco.
      </p>

      <!-- Cards de benefícios -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="bg-gradient-to-br from-[#161E2C] to-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-6 flex flex-col gap-3 items-center text-center shadow-lg hover:bg-white/15 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-2xl"
        >
          <i :class="['text-yellow-400 text-4xl drop-shadow-md', card.icon]"></i>
          <h3 class="text-xl font-extrabold text-zinc-100">{{ card.title }}</h3>
          <p class="text-lg font-[450] text-zinc-300">{{ card.description }}</p>
        </div>
      </div>
    </div>

    <!-- Formulário -->
    <div class="px-6 max-w-6xl mx-auto mt-20">
      <div class="w-full mx-auto border border-yellow-500/40 rounded-2xl p-8 shadow-lg bg-[#1B2533]/50 backdrop-blur-sm">
        <h3 class="text-xl font-bold mb-6 text-center text-yellow-400">Deixe seu Currículo Conosco</h3>
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-semibold mb-1 text-zinc-200">Nome Completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              class="bg-[#1B2533] w-full px-4 py-3 border border-zinc-600 rounded-lg outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1 text-zinc-200">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              class="bg-[#1B2533] w-full px-4 py-3 border border-zinc-600 rounded-lg outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1 text-zinc-200">Telefone</label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              class="bg-[#1B2533] w-full px-4 py-3 border border-zinc-600 rounded-lg outline-none focus:border-yellow-400 transition-colors"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold mb-1 text-zinc-200">Currículo (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              class="w-full px-4 py-3 border border-zinc-600 rounded-lg bg-[#1B2533] outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-500 file:text-zinc-900 hover:file:bg-yellow-400 transition-colors"
            />
          </div>
          <button
            type="submit"
            class="w-full py-3 bg-yellow-500 hover:bg-yellow-600 font-bold rounded-3xl text-zinc-900 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Enviar Currículo
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css'

const cards = [
  {
    title: 'Oportunidades de Crescimento',
    icon: 'fa-solid fa-briefcase',
    description: 'Plano de carreira estruturado'
  },
  {
    title: 'Ambiente Acolhedor',
    icon: 'fa-solid fa-heart',
    description: 'Cultura de respeito e colaboração'
  },
  {
    title: 'Desenvolvimento Contínuo',
    icon: 'fa-solid fa-rocket',
    description: 'Treinamentos e capacitações'
  }
]
</script>
