/**
 * Conteúdo central do site — Borders Vilas Boas.
 *
 * ⚠️ TEXTOS E CÃES ABAIXO SÃO EXEMPLOS para dar vida ao layout.
 * Substitua nomes, personalidades e dados pelos reais (e adicione as fotos).
 */

export const site = {
  name: "Borders Vilas Boas",
  tagline: "Border Collies criados como parte da família",
  description:
    "Canil familiar de Border Collies. Filhotes criados dentro de casa, com muito carinho, pedigree, saúde e socialização desde os primeiros dias.",
  location: "Florianópolis • SC",
  address: {
    street: "Rua João Januário da Silva, 6046",
    neighborhood: "Bairro Ratones",
    city: "Florianópolis — SC",
    zip: "CEP 88052-200",
    mapsQuery: "Rua+Jo%C3%A3o+Janu%C3%A1rio+da+Silva,+6046,+Ratones,+Florian%C3%B3polis,+SC,+88052-200",
  },
  whatsapp: {
    number: "5547988934120",
    display: "(47) 98893-4120",
  },
  instagram: {
    handle: "@bordersvilasboas",
    url: "https://www.instagram.com/bordersvilasboas/",
  },
} as const;

export const defaultWaMessage =
  "Olá! Vim pelo site da Borders Vilas Boas e gostaria de saber mais sobre os Border Collies. 🐶";

/** Monta um link wa.me com mensagem pré-preenchida. */
export function waLink(message: string = defaultWaMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#plantel", label: "Nosso plantel" },
  { href: "#filhotes", label: "Filhotes" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
] as const;

/** Pilares / diferenciais — o ícone é o nome de um ícone do lucide-react. */
export const values = [
  {
    icon: "Home",
    title: "Criados em família",
    text: "Nossos cães vivem dentro de casa, no convívio do dia a dia — nada de canil isolado. Crescem cercados de colo, rotina e carinho.",
  },
  {
    icon: "ScrollText",
    title: "Pedigree e linhagem",
    text: "Filhotes acompanhados de pedigree e genealogia, com procedência e linhagem registradas para você ter total tranquilidade.",
  },
  {
    icon: "Stethoscope",
    title: "Saúde em primeiro lugar",
    text: "Vacinação e vermifugação em dia, com acompanhamento veterinário desde os primeiros dias de vida.",
  },
  {
    icon: "Sparkles",
    title: "Socialização desde cedo",
    text: "Sons, pessoas, texturas e outros animais fazem parte da rotina — a base para um Border equilibrado e confiante.",
  },
  {
    icon: "HeartHandshake",
    title: "Suporte para sempre",
    text: "Acompanhamos cada família depois da adoção, tirando dúvidas sobre adestramento, alimentação e cuidados.",
  },
  {
    icon: "Award",
    title: "Temperamento & padrão",
    text: "Seleção criteriosa de matrizes e reprodutores, priorizando saúde, temperamento e o padrão da raça.",
  },
] as const;

export type Dog = {
  name: string;
  role: "Matriz" | "Reprodutor";
  coat: string;
  trait: string;
  bio: string;
  tone: "sage" | "tan" | "forest";
};

/** Cada cão tem nome e personalidade — substitua pelos reais + fotos. */
export const pack: Dog[] = [
  {
    name: "Aurora",
    role: "Matriz",
    coat: "Black & White",
    trait: "Doce e atenta",
    bio: "A mãe coruja do canil. Calma e observadora, é sempre a primeira a receber as visitas com a patinha estendida.",
    tone: "sage",
  },
  {
    name: "Maple",
    role: "Matriz",
    coat: "Chocolate & White",
    trait: "Carinhosa e brincalhona",
    bio: "Vive grudada na família. Adora colo, brinca o dia inteiro e passa toda essa doçura para os filhotes.",
    tone: "tan",
  },
  {
    name: "Thor",
    role: "Reprodutor",
    coat: "Black Tricolor",
    trait: "Confiante e leal",
    bio: "Porte elegante e temperamento equilibrado. Inteligente, obediente e completamente apaixonado pela bolinha.",
    tone: "forest",
  },
  {
    name: "Uísque",
    role: "Reprodutor",
    coat: "Blue Merle",
    trait: "Esperto e companheiro",
    bio: "O xodó da casa. Olhar marcante, energia na medida certa e uma vontade enorme de agradar a todos.",
    tone: "sage",
  },
];

export const puppyIncludes = [
  "Pedigree e genealogia",
  "Vacinas e vermífugos em dia",
  "Avaliação veterinária",
  "Kit de adaptação para os primeiros dias",
  "Contrato de compra e venda",
  "Suporte e orientação vitalícios",
] as const;

export const faqs = [
  {
    q: "Como funciona a reserva de um filhote?",
    a: "O primeiro passo é conversar com a gente pelo WhatsApp. Contamos sobre as ninhadas disponíveis ou previstas e, havendo interesse, a reserva é feita para garantir o seu filhote com prioridade de escolha.",
  },
  {
    q: "Os filhotes têm pedigree?",
    a: "Sim. Nossos filhotes acompanham pedigree e documentação de genealogia, com linhagem e procedência registradas.",
  },
  {
    q: "Com quantos dias o filhote vai para a nova casa?",
    a: "Os filhotes são entregues a partir dos 60 dias, já com vacinação e vermifugação iniciadas — o tempo certo para uma transição tranquila e saudável.",
  },
  {
    q: "Vocês enviam para outras cidades e estados?",
    a: "Sim. Combinamos juntos a forma mais segura e confortável de transporte para que seu filhote chegue bem até você.",
  },
  {
    q: "Que suporte vocês oferecem depois da adoção?",
    a: "Acompanhamos cada família para sempre. Estamos por perto para ajudar com adestramento, alimentação, saúde e a adaptação nos primeiros dias.",
  },
  {
    q: "Os pais passam por avaliação de saúde?",
    a: "Sim. Selecionamos matrizes e reprodutores priorizando saúde e temperamento, com acompanhamento veterinário contínuo.",
  },
] as const;

/** Passo a passo da adoção. `icon` = nome de um ícone do lucide-react; `href` = seção do site. */
export const steps = [
  {
    icon: "MessageCircle",
    title: "Fale no WhatsApp",
    text: "Chame a gente e conte o que procura. Tiramos todas as suas dúvidas, sem compromisso.",
    href: "#contato",
  },
  {
    icon: "PawPrint",
    title: "Conheça a ninhada",
    text: "Apresentamos os filhotes disponíveis ou previstos, com fotos, vídeos e a história dos pais.",
    href: "#plantel",
  },
  {
    icon: "BookmarkCheck",
    title: "Faça a reserva",
    text: "Garanta seu filhote com prioridade de escolha e acompanhe cada fase do crescimento.",
    href: "#filhotes",
  },
  {
    icon: "Heart",
    title: "Boas-vindas",
    text: "Seu novo amigo vai pra casa com pedigree, saúde em dia e o nosso suporte para sempre.",
    href: "#depoimentos",
  },
] as const;

/** Depoimentos — EXEMPLOS, substituir por relatos reais de famílias. */
export const testimonials = [
  {
    quote:
      "Nosso filhote chegou em casa já super sociável e saudável. O carinho deles é de verdade — e o suporte continua até hoje, sempre que temos uma dúvida.",
    name: "Mariana",
    role: "tutora do Auê",
    location: "Joinville, SC",
  },
  {
    quote:
      "Visitamos, conhecemos os pais e vimos como os cães vivem em família. Isso fez toda a diferença na nossa escolha. Recomendo de olhos fechados.",
    name: "Rafael",
    role: "tutor da Nina",
    location: "Jaraguá do Sul, SC",
  },
  {
    quote:
      "Recebemos o pedigree, as vacinas em dia e até um kit para os primeiros dias. Deu pra sentir o cuidado em cada detalhe. Gratidão eterna!",
    name: "Carla",
    role: "tutora do Theo",
    location: "Blumenau, SC",
  },
  {
    quote:
      "O acompanhamento veterinário e a socialização fizeram toda a diferença. Nossa Border chegou confiante, dócil e cheia de saúde.",
    name: "Patrícia",
    role: "tutora da Lua",
    location: "Itajaí, SC",
  },
  {
    quote:
      "Profissionalismo do começo ao fim. Tiraram todas as dúvidas e nos deram total segurança na escolha do nosso filhote.",
    name: "Diego",
    role: "tutor do Max",
    location: "Florianópolis, SC",
  },
  {
    quote:
      "Mais que um filhote, ganhamos um novo membro da família. Gratidão pelo carinho e pela dedicação de vocês em cada detalhe!",
    name: "Aline",
    role: "tutora da Mel",
    location: "Balneário Camboriú, SC",
  },
] as const;

/** Posts do feed do Instagram (carrossel). Cada um vira um link para o perfil. */
export const galleryTiles = [
  { label: "Primeiros passos", tone: "sage" },
  { label: "No colo da família", tone: "tan" },
  { label: "Correndo no quintal", tone: "forest" },
  { label: "Soneca da tarde", tone: "cream" },
  { label: "Olhar de Border", tone: "sage" },
  { label: "Hora da brincadeira", tone: "tan" },
  { label: "Filhotes do mês", tone: "forest" },
  { label: "Em família", tone: "cream" },
] as const;
