<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const router = useRouter()

// Detecta scroll para mudar o fundo do header
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Abre/fecha o menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// ✅ Fecha o menu e faz navegação suave sem reload
const handleNavClick = (event, path) => {
  event.preventDefault()

  if (isMenuOpen.value) {
    toggleMenu() // fecha o menu se estiver aberto
  }

  // Usa Vue Router para navegar sem reload
  router.push(path)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[ 
      'fixed top-0 z-50 p-2 w-full transition-all duration-300', 
      isScrolled ? 'bg-[#161E2C] shadow-lg' : 'bg-transparent' 
    ]"
  >
    <div class="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Logo -->
      <div class="logo z-50">
        <img src="../assets/icons/logo.png" alt="Logo" class="w-20" />
      </div>

      <!-- Botão Mobile -->
      <button 
        @click="toggleMenu" 
        class="md:hidden text-white focus:outline-none z-[60]"
      >
        <svg v-if="isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- ✅ Menu Desktop -->
      <nav class="hidden md:block">
        <ul class="flex gap-6 font-medium text-white transition-colors duration-300">
          <li><a href="/" @click="(e) => handleNavClick(e, '/')" class="hover:text-yellow-400">Início</a></li>
          <li><a href="/sobre" @click="(e) => handleNavClick(e, '/sobre')" class="hover:text-yellow-400">Quem Somos</a></li>
          <li><a href="/servicos" @click="(e) => handleNavClick(e, '/servicos')" class="hover:text-yellow-400">Serviços</a></li>
          <li><a href="/contato" @click="(e) => handleNavClick(e, '/contato')" class="hover:text-yellow-400">Contato</a></li>
          <li><a href="/trabalhe-conosco" @click="(e) => handleNavClick(e, '/trabalhe-conosco')" class="hover:text-yellow-400">Trabalhe Conosco</a></li>
        </ul>
      </nav>
    </div>

    <!-- ✅ Menu Mobile -->
    <nav
      :class="[ 
        'fixed top-0 right-0 h-full w-80 bg-[#161E2C] md:hidden transition-transform duration-500 ease-in-out z-50', 
        isMenuOpen ? 'translate-x-0' : 'translate-x-full' 
      ]"
    >
      <div class="pt-20 px-6">
        <ul class="flex flex-col gap-6 text-xl text-white font-medium">
          <li><a href="/" @click="(e) => handleNavClick(e, '/')" class="hover:text-yellow-400 block py-2">Início</a></li>
          <li><a href="/sobre" @click="(e) => handleNavClick(e, '/sobre')" class="hover:text-yellow-400 block py-2">Quem Somos</a></li>
          <li><a href="/servicos" @click="(e) => handleNavClick(e, '/servicos')" class="hover:text-yellow-400 block py-2">Serviços</a></li>
          <li><a href="/contato" @click="(e) => handleNavClick(e, '/contato')" class="hover:text-yellow-400 block py-2">Contato</a></li>
          <li><a href="/trabalhe-conosco" @click="(e) => handleNavClick(e, '/trabalhe-conosco')" class="hover:text-yellow-400 block py-2">Trabalhe Conosco</a></li>
        </ul>
      </div>
    </nav>

    <!-- Overlay escurecido -->
    <div
      v-if="isMenuOpen"
      @click="toggleMenu"
      class="fixed inset-0 bg-black/50 md:hidden z-40 transition-opacity duration-300"
    ></div>
  </header>
</template>
