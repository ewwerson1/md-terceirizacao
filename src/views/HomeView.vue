<template>
  <main class="text-zinc-800">
    <section
      class="relative bg-cover bg-center min-h-[100vh] sm:min-h-[80vh] flex items-center justify-center"
      :style="{ backgroundImage: `url(${bgImage})` }"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-black/100 to-black/50"></div>
      <div class="relative z-10 text-center text-white px-4 sm:px-8 md:px-12">
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          Excelência em <br>
          <span
            class="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-[#FACB15] to-[#CB8B04] bg-clip-text text-transparent"
          >
            serviços Corporativos
          </span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200 leading-relaxed"
        >
          Com a MD Terceirização LTDA cuidando das rotinas da sua empresa, você ganha tempo e tranquilidade para focar no que realmente importa: o crescimento do seu negócio.
          Descubra soluções inteligentes para uma gestão mais moderna e eficiente.
        </p>
        <a
          href="#about"
          class="bg-[#EAB308] text-base sm:text-lg font-bold hover:bg-yellow-600 transition-all px-10 sm:px-16 md:px-20 py-3 sm:py-4 rounded-3xl text-zinc-900"
        >
          Saiba mais
        </a>
      </div>
    </section>

    <section class="bg-[#1F2937] py-12 ">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-800 mb-12">
          <span class="bg-gradient-to-r from-[#FACB15] to-[#CB8B04] bg-clip-text text-transparent">
            Empresas que Confiam em Nós
          </span>
        </h2>

        <div class="hidden md:flex justify-center items-center gap-12">
          <div
            v-for="(partner, index) in partners"
            :key="index"
            class="w-64 flex items-center justify-center rounded-xl hover:scale-[105%] ease-in-out hover:duration-300 transition-all p-4"
          >
            <img
              :src="partner.logo"
              :alt="partner.name"
              class="max-w-full max-h-full object-contain filter hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>

        <div class="md:hidden overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(partner, index) in partners"
              :key="index"
              class="flex-shrink-0 w-full flex justify-center items-center px-4"
            >
              <div class="w-64 flex items-center justify-center rounded-xl p-4">
                <img
                  :src="partner.logo"
                  :alt="partner.name"
                  class="max-w-full max-h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center gap-2 mt-6">
            <div
              v-for="(_, index) in partners"
              :key="index"
              :class="[ 'w-2 h-2 rounded-full transition-all',
                currentIndex === index ? 'bg-[#EAB308] w-6' : 'bg-gray-300'
              ]"
            ></div>
          </div>
        </div>

        <p class="text-center text-sm text-gray-400 mt-8">
          Compromisso com a <strong>excelência</strong> e a <strong>confiança</strong> dos nossos clientes.
        </p>
      </div>
    </section>

    <section id="about" class="bg-[#161E2C] text-white py-16 sm:py-20">
      <div class="flex justify-center">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block bg-gradient-to-r from-[#FACB15] to-[#CB8B04] bg-clip-text text-transparent"
        >
          Quem somos
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-6 w-24 sm:w-28 h-1 bg-yellow-500"
          ></span>
        </h2>
      </div>

      <div
        class="max-w-7xl mt-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 px-6 items-center"
      >
        <img
          src="../assets/images/equipe.jpeg"
          alt="Equipe MD Serviços"
          class="rounded-2xl shadow-xl w-full max-h-[400px] object-cover"
        />
        <div class="text-base sm:text-lg leading-relaxed">
          <p class="mb-5 text-gray-300">
            Somos uma empresa líder em terceirização de serviços corporativos, com anos de experiência no mercado.
            Nossa missão é fornecer soluções completas e personalizadas que atendam às necessidades específicas de cada cliente.
          </p>
          <p class="mb-5 text-gray-300">
            Com uma equipe altamente qualificada e processos certificados, garantimos excelência em cada serviço prestado.
            Nosso compromisso é com a qualidade, eficiência e satisfação total dos nossos clientes.
          </p>
          <a
            href="#services"
            class="bg-[#EAB308] hover:bg-yellow-600 transition-all px-6 sm:px-8 py-3 text-sm sm:text-base text-zinc-900 rounded-3xl font-bold"
          >
            Conheça nossos serviços
          </a>
        </div>
      </div>

      <div class="mx-auto max-w-7xl px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card
          v-for="(card, i) in benefitCards"
          :key="i"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          class="p-6 sm:p-8"
        />
      </div>
    </section>

    <section id="services" class="bg-gradient-to-b from-[#161E2C] to-[#1A222F] pb-16 sm:py-20">
      <div class="text-center">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block bg-gradient-to-r from-[#FACB15] to-[#CB8B04] bg-clip-text text-transparent"
        >
          Nossos Serviços
          <span
            class="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-6 w-24 sm:w-28 h-1 bg-yellow-500"
          ></span>
        </h2>
      </div>

      <div
        class="mx-auto max-w-7xl px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <Card
          v-for="(card, i) in serviceCards"
          :key="i"
          :icon="card.icon"
          :title="card.title"
          :description="card.description"
          class="p-6"
        />
      </div>
      
      <div class="text-center mt-12 px-6">
        <router-link
          to="/servicos"
          class="inline-block bg-[#EAB308] text-zinc-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all text-base sm:text-lg"
        >
          Ver Todos os Detalhes dos Serviços
        </router-link>
      </div>
    </section>

    <section class="bg-[#1F2937] text-white py-20 text-center">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-xl sm:text-4xl md:text-5xl font-bold mb-6 text-zinc-100">
          Pronto para Elevar o Nível da sua Empresa?
        </h2>
        <p class="text-gray-300 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          Descubra como nossas soluções de terceirização podem otimizar seus processos e reduzir custos.
          Vamos conversar!
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <router-link
            to="/contato"
            class="bg-[#EAB308] text-zinc-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-all"
          >
            Solicite um Orçamento
          </router-link>
          <a
            href="tel:+5581987488446"
            class="border-2 border-[#EAB308] text-[#EAB308] font-bold py-3 px-8 rounded-full hover:bg-[#EAB308] hover:text-zinc-900 transition-all flex items-center justify-center gap-2"
          >
            Ligue Agora
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bgImage from '../assets/images/bg.jpeg'
import Card from '../components/Cards.vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

// ✅ Importações das logos corrigidas:
import paraskateLogo from '../assets/images/paraskate.png'
import recifeVoleiLogo from '../assets/images/recife-volei.png'
import cbgLogo from '../assets/images/cbg.png'

const benefitCards = [
  {
    title: 'Qualidade Qualificada',
    icon: 'fa-regular fa-circle-check',
    description: 'Processos rigorosos e equipe altamente qualificada'
  },
  {
    title: 'Equipe Especializada',
    icon: 'fa-solid fa-user-group',
    description: 'Profissionais treinados e comprometidos'
  },
  {
    title: 'Foco em Resultados',
    icon: 'fa-solid fa-bullseye',
    description: 'Soluções personalizadas para cada cliente'
  }
]

const serviceCards = [
  { title: 'Limpeza e Conservação', icon: 'fa-solid fa-broom', description: 'Serviços completos de limpeza e manutenção predial' },
  { title: 'Copeiragem', icon: 'fa-solid fa-mug-saucer', description: 'Atendimento profissional em copa e cozinha' },
  { title: 'Secretariado', icon: 'fa-regular fa-file-lines', description: 'Suporte administrativo e organizacional' },
  { title: 'Recepção', icon: 'fa-regular fa-handshake', description: 'Atendimento cordial e profissional' },
  { title: 'Telefonista', icon: 'fa-solid fa-phone', description: 'Gestão eficiente de chamadas telefônicas' },
  { title: 'Controle de Portaria', icon: 'fa-solid fa-shield-halved', description: 'Segurança e controle de acesso' },
  { title: 'Jardinagem', icon: 'fa-solid fa-leaf', description: 'Manutenção de áreas verdes e paisagismo' },
  { title: 'Motoristas', icon: 'fa-solid fa-car', description: 'Transporte profissional e seguro' },
  { title: 'Apoio Administrativo', icon: 'fa-regular fa-clipboard', description: 'Suporte em processos administrativos' },
  { title: 'Serviços Gerais', icon: 'fa-solid fa-toolbox', description: 'Manutenção e serviços diversos' },
  { title: 'Ascensorista', icon: 'fa-solid fa-elevator', description: 'Operação profissional de elevadores' }
]

// ✅ Corrigido para usar os imports
const partners = [
  { name: 'Paraskate Tour', logo: paraskateLogo },
  { name: 'Recife Vôlei', logo: recifeVoleiLogo },
  { name: 'Confederação Brasileira de Ginástica', logo: cbgLogo }
]

// ✅ Carrossel (agora funciona em qualquer tamanho de tela)
const currentIndex = ref(0)
let interval = null

const startAutoplay = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % partners.length
  }, 3000)
}

const stopAutoplay = () => {
  if (interval) clearInterval(interval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}
</style>
