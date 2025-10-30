<template>
  <main>
    <footer class="bg-zinc-900 border-t border-yellow-500/40 text-zinc-300 py-12">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <div class="flex flex-col">
          <img src="../assets/icons/logo.png" alt="Logo da empresa" class="w-24 mb-3">
          <p class="text-xs text-zinc-400 mb-4">
            Especialista em serviços corporativos desde 2022.
          </p>
          <p class="text-sm">
            Disponibilizamos mão de obra especializada e eficiente para parcerias que agregam valor aos nossos clientes.
          </p>
          
          <h3 class="text-yellow-400 font-semibold mt-6 mb-3">Redes Sociais</h3>
          <div class="flex gap-3 text-white">
            <a href="#" class="bg-yellow-400/20 p-2 rounded-full hover:bg-yellow-400/40 transition-colors duration-200">
              <i class="fab fa-facebook-f text-yellow-400"></i>
            </a>
            <a href="#" class="bg-yellow-400/20 p-2 rounded-full hover:bg-yellow-400/40 transition-colors duration-200">
              <i class="fab fa-instagram text-yellow-400"></i>
            </a>
            <a href="https://wa.me/5581987488446" class="bg-yellow-400/20 p-2 rounded-full hover:bg-yellow-400/40 transition-colors duration-200">
              <i class="fab fa-whatsapp text-yellow-400"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-yellow-400 font-extrabold text-lg mb-4">Links Rápidos</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="hover:text-yellow-400 transition">Início</router-link>
            </li>
            <li>
              <router-link to="/sobre" class="hover:text-yellow-400 transition">Quem Somos</router-link>
            </li>
            <li>
              <router-link to="/servicos" class="hover:text-yellow-400 transition">Serviços</router-link>
            </li>
            <li>
              <router-link to="/contato" class="hover:text-yellow-400 transition">Contatos</router-link>
            </li>
             <li>
              <router-link to="/trabalhe-conosco" class="hover:text-yellow-400 transition">Trabalhe Conosco</router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-yellow-400 font-extrabold text-lg mb-4">Nossos Serviços</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Limpeza e conservação</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Copeiragem</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Secretariado</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Recepção</a>
            </li>
             <li>
              <a href="#" class="hover:text-yellow-400 transition">Telefonista</a>
            </li>
             <li>
              <a href="#" class="hover:text-yellow-400 transition">Controle de Portaria</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Jardinagem</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Motoristas</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Apoio Administrativo</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Serviços Gerais</a>
            </li>
            <li>
              <a href="#" class="hover:text-yellow-400 transition">Ascensorista</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-yellow-400 font-extrabold text-lg mb-4">Contatos</h3>
          <ul class="space-y-2 text-sm">
            <li class="flex items-center gap-2">
              <i class="fas fa-phone-alt text-yellow-400"></i>
              (81) 98748-8446 
            </li>
            
            <li class="flex items-center gap-2">
              <i class="fas fa-envelope text-yellow-400"></i>
              comercial.mdterceirizacao@gmail.com
            </li>
            <li class="flex items-start gap-2">
              <i class="fas fa-map-marker-alt text-yellow-400 mt-1"></i>
              Rua Maria José Cordeiro, 216. CEP 54280-770 Dois Carneiros Jaboatão dos Guararapes
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-yellow-400/20 mt-10 pt-6">
        <p class="text-center text-zinc-500 text-xs">
          © 2025 MD Terceirização LTDA — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </main>
</template>