<template>
  <div class="bg-[#161E2C]">
    <section
      ref="heroSection"
      id="hero"
      class="relative flex flex-col items-center justify-center text-center min-h-[100vh] pb-20 lg:pb-0 overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-center bg-cover bg-no-repeat grayscale brightness-[0.4] scale-105 transition-transform duration-500 ease-out"
        :style="{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.3}px)`,
          clipPath: 'ellipse(120% 90% at 50% 0%)'
        }"
      ></div>

      <div class="relative z-10 px-4 sm:px-6 max-w-3xl mx-auto mb-10 mt-20">
        <h1
          class="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 relative inline-block bg-gradient-to-r from-[#FACB15] to-[#CB8B04] bg-clip-text text-transparent"
        >
          QUEM SOMOS
        </h1>
        <p class="text-zinc-200 text-base sm:text-lg md:text-xl leading-relaxed">
          A MD Terceirização LTDA é especialista em terceirização de serviços, com excelência em soluções para infraestrutura empresarial.
        </p>
      </div>

      <div
        class="relative z-10 flex flex-col lg:flex-row justify-center gap-6 max-w-7xl mx-auto px-4 sm:px-6 mb-8"
      >
        <div
          v-for="(item, i) in mvv"
          :key="i"
          class="bg-gradient-to-br from-[#161E2C]/80 to-white/10 backdrop-blur-md border border-yellow-500/40 rounded-xl shadow-lg text-center transition-transform hover:-translate-y-2 w-full lg:w-1/3 max-w-md p-6"
        >
          <i :class="['text-yellow-500 text-4xl mb-3', item.icon]"></i>
          <h3 class="font-bold text-gray-200 mb-2 text-xl">
            {{ item.title }}
          </h3>
          <p class="text-gray-400 text-sm leading-relaxed">
            {{ item.text }}
          </p>
        </div>
      </div>

      <div
        class="absolute bottom-[-1px] left-0 w-full h-20 bg-[#161E2C]"
        style="clip-path: ellipse(120% 100% at 50% 100%);"
      ></div>
    </section>

    <section class="bg-[#161E2C] text-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 mb-4 text-center"
        >
          Nossa História de Sucesso
        </h2>
        <p class="text-zinc-300 text-center max-w-2xl mx-auto mb-16 text-sm sm:text-base">
          Somos uma empresa líder em terceirização de serviços corporativos, com
          anos de experiência no mercado. Nossa missão é fornecer soluções
          completas e personalizadas que atendam às necessidades específicas de
          cada cliente.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          <div
            v-for="(card, i) in cards"
            :key="i"
            class="bg-gradient-to-br from-[#161E2C] to-white/10 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-6 text-center hover:-translate-y-2 transition-transform shadow-lg hover:bg-white/5 hover:border-yellow-400/50 hover:shadow-2xl"
          >
            <i :class="['text-yellow-400 text-3xl mb-3', card.icon]"></i>
            <h3 class="font-bold mb-2 text-zinc-100">{{ card.title }}</h3>
            <p class="text-zinc-300 text-sm">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-[#161E2C] h-2"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import heroImage from '../assets/images/aboutpage.jpeg'

const scrollY = ref(0)
const handleScroll = () => (scrollY.value = window.scrollY)

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const cards = [
  {
    icon: 'fa-solid fa-medal',
    title: 'Qualidade Certificada',
    text: 'Processos rigorosos e equipe altamente qualificada.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Equipe Especializada',
    text: 'Profissionais treinados e comprometidos com a excelência.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Foco em Resultados',
    text: 'Soluções personalizadas para cada cliente.'
  }
]

const mvv = [
  {
    icon: 'fa-solid fa-flag',
    title: 'Missão',
    text: 'Fornecer soluções de terceirização com excelência, otimizando os processos dos nossos clientes com inovação e confiabilidade.'
  },
  {
    icon: 'fa-solid fa-eye',
    title: 'Visão',
    text: 'Ser a empresa líder e referência em qualidade e satisfação do cliente no setor de serviços corporativos em todo o país.'
  },
  {
    icon: 'fa-solid fa-gem',
    title: 'Valores',
    text: 'Compromisso, Ética, Qualidade, Inovação e Respeito às Pessoas. Pilares que guiam todas as nossas ações.'
  }
]

</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}

/* Fundo global de segurança */
body {
  background-color: #161E2C;
}
</style>