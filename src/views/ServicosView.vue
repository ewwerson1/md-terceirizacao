<template>
  <main class="bg-[#161E2C] text-white py-24">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-center text-yellow-400 text-4xl font-extrabold mb-16">
        Nossos Serviços
        <div class="w-16 h-[3px] bg-yellow-400 mx-auto mt-3 rounded"></div>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-28">
        <div
          v-for="(card, i) in serviceCards"
          :key="i"
          class="relative w-full h-[500px] perspective cursor-pointer"
          @click="toggleFlip(i)"
        >
          <div
            class="absolute inset-0 rounded-2xl overflow-hidden border border-yellow-500/40 backface-hidden transition-transform duration-500"
            :class="{ 'rotate-y-180': flippedCard === i }"
          >
            <img
              :src="card.image"
              :alt="card.title"
              class="absolute inset-0 w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-black/60 flex items-center justify-center text-center p-4 transition duration-300"
            >
              <h3 class="text-white font-extrabold text-2xl drop-shadow-lg">
                {{ card.title }}
              </h3>
            </div>
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-br from-[#161E2C] to-white/10 backdrop-blur-xl rounded-3xl border border-yellow-400/30 p-6 flex flex-col justify-between text-center backface-hidden rotate-y-180 transition-transform duration-500"
            :class="{ 'rotate-y-0': flippedCard === i, 'rotate-y-180': flippedCard !== i }"
          >
            <div class="my-auto">
              <h3 class="font-bold text-zinc-100 text-xl mb-4">
                {{ card.title }}
              </h3>
              <p class="text-gray-300 text-sm">
                {{ card.description }}
              </p>
            </div>

            <a
              :href="card.whatsappLink"
              target="_blank"
              class="bg-[#EAB308] hover:bg-yellow-600 text-zinc-900 font-bold py-2 px-4 rounded-full transition mt-6 inline-block"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>

      <h2 class="text-center text-yellow-400 text-4xl font-extrabold mb-16">
        Nosso Processo
        <div class="w-16 h-[3px] bg-yellow-400 mx-auto mt-3 rounded"></div>
      </h2>

      <div class="grid md:grid-cols-4 gap-8 mb-28">
        <div
          v-for="(card, i) in processCards"
          :key="i"
          class="bg-[#1f2b48] rounded-2xl p-6 border border-yellow-500/40 hover:-translate-y-2 transition-transform"
        >
          <h1 class="text-yellow-400 text-4xl font-bold opacity-40">{{ card.number }}</h1>
          <h3 class="font-bold mt-3 mb-2 text-yellow-400">{{ card.title }}</h3>
          <p class="text-zinc-400 text-sm">{{ card.text }}</p>
        </div>
      </div>

      <h2 class="text-center text-yellow-400 text-4xl font-extrabold mb-10">
        Perguntas Frequentes
        <div class="w-16 h-[3px] bg-yellow-400 mx-auto mt-3 rounded"></div>
      </h2>

      <div class="space-y-4 max-w-3xl mx-auto">
        <div
          v-for="(faq, i) in faqs"
          :key="i"
          class="border border-yellow-500/40 rounded-lg p-5 hover:bg-[#1f2b48]/60 transition"
        >
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-yellow-400 text-xl mt-1"></i>
            <div>
              <h3 class="font-bold text-yellow-400 text-lg mb-1">{{ faq.question }}</h3>
              <p class="text-zinc-300 text-sm">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

// Número de telefone para o WhatsApp (5581987488446)
const WHATSAPP_NUMBER = '5581987488446';
const BASE_WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=`;

// Função para gerar o link de WhatsApp codificado
const generateWhatsappLink = (title, message) => {
    const fullMessage = `Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20*${encodeURIComponent(title)}*.%20${encodeURIComponent(message)}`;
    return BASE_WHATSAPP_URL + fullMessage;
};

// Controle do flip
const flippedCard = ref(null)
const toggleFlip = (index) => {
  flippedCard.value = flippedCard.value === index ? null : index
}

// Cards com imagens diretas da web e links de WhatsApp gerados
const serviceCards = [
  {
    title: 'Limpeza e Conservação',
    image: 'https://confiareadministradora.com.br/wp-content/uploads/2024/07/istockphoto-1339598124-612x612-1.jpg',
    description: 'Oferecemos serviços completos de limpeza e manutenção predial, utilizando técnicas e produtos sustentáveis. Nosso foco é garantir um ambiente impecável e saudável para seus colaboradores e clientes, com máxima excelência e atenção aos detalhes.',
    whatsappLink: generateWhatsappLink('Limpeza e Conservação', 'Por favor, envie mais detalhes sobre os serviços de limpeza e manutenção predial.'),
  },
  {
    title: 'Copeiragem',
    image: 'https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-trabalhando-em-restaurante-de-luxo_23-2150598333.jpg',
    description: 'Garantimos atendimento profissional e discreto em copa e cozinha. Nossos copeiros são treinados para gerenciar serviços de café, eventos e reuniões com eficiência, organização e a máxima cordialidade, elevando a qualidade do seu ambiente corporativo.',
    whatsappLink: generateWhatsappLink('Copeiragem', 'Quero contratar atendimento profissional em copa e cozinha.'),
  },
  {
    title: 'Secretariado',
    image: 'https://static.vecteezy.com/ti/fotos-gratis/p2/33651215-retrato-do-uma-mulher-trabalhando-dentro-cliente-servico-as-uma-ligar-centro-branco-backgroud-generativo-ai-gratis-foto.jpg',
    description: 'Fornecemos suporte administrativo e organizacional personalizado de alta qualidade. Nossas secretárias cuidam da agenda, organização de documentos, comunicação interna e externa, permitindo que sua equipe se concentre no core business.',
    whatsappLink: generateWhatsappLink('Secretariado', 'Preciso de suporte administrativo e organizacional para minha empresa.'),
  },
  {
    title: 'Recepção',
    image: 'https://img.freepik.com/fotos-premium/foto-de-recepcionista-de-beleza-confiante-mostrando-os-precos-de-seus-servicos-a-uma-cliente-na-recepcao-do-hotel_519356-2451.jpg',
    description: 'Nossos profissionais de recepção são o cartão de visitas da sua empresa. Garantimos um acolhimento profissional, cordial e organizado, gerindo o fluxo de visitantes e transmitindo uma imagem de excelência e hospitalidade desde o primeiro contato.',
    whatsappLink: generateWhatsappLink('Recepção', 'Busco atendimento cordial e profissional para a minha recepção.'),
  },
  {
    title: 'Telefonista',
    image: 'https://media.istockphoto.com/id/1663411254/pt/v%C3%ADdeo/slow-motion-shot-of-customer-support-officer-smiling-and-consulting-client-at-work-desk-in.jpg?s=640x640&k=20&c=geHnsgQrJ_Za3pEhsQY8PqPOVwYJSYWfvw7I5FabNfo=',
    description: 'Oferecemos gestão eficiente de chamadas e comunicação corporativa, atuando como um filtro profissional para otimizar o tempo da sua equipe. Nossos telefonistas garantem que todas as comunicações sejam tratadas com clareza e rapidez.',
    whatsappLink: generateWhatsappLink('Telefonista', 'Quero uma gestão eficiente de chamadas telefônicas.'),
  },
  {
    title: 'Controle de Portaria',
    image: 'https://www.controlid.com.br/blog/wp-content/uploads/2024/01/Seguranc%CC%A7a_condominial_portaria_virtual.jpg',
    description: 'Proporcionamos monitoramento rigoroso e controle de acesso seguro para condomínios e empresas. Nossos porteiros são treinados para lidar com situações de segurança, garantindo a tranquilidade e o bem-estar de todos que circulam no local.',
    whatsappLink: generateWhatsappLink('Controle de Portaria', 'Preciso de segurança e controle de acesso para o meu local.'),
  },
  {
    title: 'Jardinagem',
    image: 'https://apoioecolimp.com/wp-content/uploads/2018/08/jardinagem.jpg',
    description: 'Cuidamos da manutenção e paisagismo de suas áreas verdes com equipes especializadas. Realizamos poda, irrigação e tratamentos necessários para que seus jardins permaneçam sempre exuberantes e com o máximo de cuidado e qualidade estética.',
    whatsappLink: generateWhatsappLink('Jardinagem', 'Busco serviços de manutenção de áreas verdes e paisagismo.'),
  },
  {
    title: 'Motoristas',
    image: 'https://img.freepik.com/fotos-premium/servico-de-motorista-de-negocios-para-clientes-vip_1421-2250.jpg',
    description: 'Serviço de transporte corporativo profissional e seguro, ideal para empresas e executivos. Nossos motoristas são pontuais, discretos e experientes, garantindo viagens confortáveis e seguras, focadas na sua produtividade.',
    whatsappLink: generateWhatsappLink('Motoristas', 'Quero contratar transporte profissional e seguro.'),
  },
  // Adicionei os serviços que faltavam na sua lista anterior:
  {
    title: 'Apoio Administrativo',
    image: 'https://img.freepik.com/fotos-gratis/retrato-de-um-jovem-executiva-sentando-escrivaninha-segurando-tablete-digital-em-dela-mao_23-2147943737.jpg', // Placeholder para imagem, ajuste se tiver uma
    description: 'Suporte em processos administrativos, gestão documental e organização de rotinas internas para maior eficiência.',
    whatsappLink: generateWhatsappLink('Apoio Administrativo', 'Preciso de suporte em processos administrativos.'),
  },
  {
    title: 'Serviços Gerais',
    image: 'https://www.maxtecservicos.com.br/imagens/categorias/auxiliar-servicos-gerais-03.webp', // Placeholder para imagem, ajuste se tiver uma
    description: 'Manutenção predial e serviços diversos essenciais para o funcionamento diário, garantindo a organização e a funcionalidade do espaço.',
    whatsappLink: generateWhatsappLink('Serviços Gerais', 'Preciso de serviços de manutenção e diversos.'),
  },
  {
    title: 'Ascensorista',
    image: 'https://img.freepik.com/fotos-gratis/entregador-com-pacote-no-elevador-close-up_23-2148890008.jpg', // Placeholder para imagem, ajuste se tiver uma
    description: 'Operação profissional de elevadores, garantindo a segurança e o conforto dos usuários e seguindo todas as normas de operação.',
    whatsappLink: generateWhatsappLink('Ascensorista', 'Preciso de um profissional para operação de elevadores.'),
  },
]

// Processo (Mantido como estava)
const processCards = [
  { number: '01', title: 'Consulta Inicial', text: 'Entendemos suas necessidades e objetivos.' },
  { number: '02', title: 'Plano Personalizado', text: 'Desenvolvemos uma estratégia sob medida para sua empresa.' },
  { number: '03', title: 'Implementação', text: 'Nossa equipe especializada entra em ação com eficiência.' },
  { number: '04', title: 'Acompanhamento', text: 'Monitoramos e ajustamos para garantir a máxima qualidade.' }
]

// FAQ (Mantido como estava)
const faqs = [
  {
    question: 'Como posso solicitar um orçamento?',
    answer: 'Você pode solicitar um orçamento através da nossa página de contato ou ligando para nós. Nossa equipe responderá rapidamente.'
  },
  {
    question: 'Os profissionais são treinados?',
    answer: 'Sim, todos os nossos profissionais passam por um rigoroso processo de seleção e treinamento contínuo para garantir a excelência dos serviços.'
  },
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer: 'Atualmente, nossa atuação está concentrada em Recife e Região Metropolitana. Entre em contato para verificar a disponibilidade em sua localidade.'
  }
]
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.backface-hidden {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
.rotate-y-0 {
  transform: rotateY(0deg);
}

/* Efeito de zoom e transição suave */
.relative:hover img {
  transform: scale(1.08);
  transition: transform 0.5s ease;
}
</style>