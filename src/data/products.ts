export type ProductImage = {
  placeholder: string;
  backgroundClass: string;
};

export type ProductVideo = {
  title: string;
  videoLink: string;
  id?: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: ProductImage;
  shortDescription: string;
  price: string;
  productLink: string;
  videos: ProductVideo[];
  status: string;
  order: number;
  featured?: boolean;
};

const productList: Product[] = [
  {
    id: "luminaria-globo-led-galaxia",
    name: "Luminária Globo LED Galáxia",
    category: "Casa",
    image: { placeholder: "/produtos/luminaria-galaxia.png", backgroundClass: "bg-[#d7f1e8]" },
    shortDescription: "Testei o efeito de luz, o acabamento e a presença dela no ambiente.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3sRd3a/", id: "7683907696055029010" }],
    status: "Testado",
    order: 4,
    featured: true,
  },
  {
    id: "luminaria-solar-led-parede",
    name: "Luminária Solar LED para parede",
    category: "Casa",
    image: { placeholder: "/produtos/luminaria-solar.png", backgroundClass: "bg-[#ffd8be]" },
    shortDescription: "Testei a iluminação, a instalação e o funcionamento em área externa.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3s2sA2/", id: "7687403075149122834" }],
    status: "Testado",
    order: 2,
    featured: false,
  },
  {
    id: "luminaria-mesa-led-touch",
    name: "Luminária de Mesa LED Touch",
    category: "Casa",
    image: { placeholder: "/produtos/luminaria-mesa.png", backgroundClass: "bg-[#dcd4ff]" },
    shortDescription: "Testei os níveis de luz, o toque e a praticidade na mesa.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3pcVut/", id: "7683661754416499975" }],
    status: "Testado",
    order: 3,
    featured: false,
  },
  {
    id: "ventilador-com-luz-led-42cm",
    name: "Ventilador com Luz LED 42cm",
    category: "Casa",
    image: { placeholder: "/produtos/ventilador.jpg", backgroundClass: "bg-[#d7f1e8]" },
    shortDescription: "Testei a ventilação, a iluminação e os recursos do controle remoto.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [
      { title: "Instalação", videoLink: "https://vt.tiktok.com/ZSq3Tf14k/", id: "7681411886390332690" },
      { title: "Unboxing", videoLink: "https://vt.tiktok.com/ZSq3oCFjV/", id: "7681371788571315464" },
    ],
    status: "Testado",
    order: 1,
  },
  {
    id: "aspirador-de-po-portatil",
    name: "Aspirador de Pó Portátil",
    category: "Casa",
    image: { placeholder: "/produtos/aspirador-portatil.jpg", backgroundClass: "bg-[#ffd8be]" },
    shortDescription: "Testei a sucção, a praticidade e a limpeza em diferentes superfícies.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3TqMQR/", id: "7680246927300103432" }],
    status: "Testado",
    order: 5,
  },
  {
    id: "kit-3-camisetas-oversized",
    name: "Kit 3 Camisetas Oversized",
    category: "Vestuário",
    image: { placeholder: "/produtos/camisas-oversized.jpg", backgroundClass: "bg-[#dcd4ff]" },
    shortDescription: "Testei o caimento, o tecido e o conforto das três camisetas.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3T7Maw/", id: "7686593272818437383" }],
    status: "Testado",
    order: 6,
  },
  {
    id: "mousepad-gamer",
    name: "Mousepad Gamer",
    category: "Acessórios / Games",
    image: { placeholder: "/produtos/mousepad-gamer.jpg", backgroundClass: "bg-[#d7f1e8]" },
    shortDescription: "Testei o tamanho, a superfície e o deslizamento durante o uso.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3w4VkU/", id: "7675516595359223048" }],
    status: "Testado",
    order: 7,
  },
  {
    id: "pelicula-kingkong-glass",
    name: "Película KingKong Glass",
    category: "Eletrônicos / Acessórios",
    image: { placeholder: "/produtos/pelicula-kingkong-glass.jpg", backgroundClass: "bg-[#ffd8be]" },
    shortDescription: "Testei a aplicação, a cobertura da tela e a resistência no uso diário.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSq3wq95u/", id: "7674444960367758600" }],
    status: "Testado",
    order: 8,
  },
  {
    id: "lavadora-de-alta-pressao-wap-1800",
    name: "Lavadora de Alta Pressão WAP 1800",
    category: "Casa",
    image: { placeholder: "/produtos/lavadora-wap-1800.png", backgroundClass: "bg-[#d7f1e8]" },
    shortDescription: "Testei a potência, a praticidade e a eficiência da lavadora na limpeza de diferentes superfícies.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSqKFTHFr/" }],
    status: "Testado",
    order: 9,
  },
  {
    id: "aspirador-de-po-portatil-premium",
    name: "Aspirador de Pó Portátil Premium",
    category: "Casa",
    image: { placeholder: "/produtos/aspirador-po-portatil-premium.png", backgroundClass: "bg-[#ffd8be]" },
    shortDescription: "Testei a sucção, os acessórios e a praticidade desse aspirador portátil para diferentes tipos de limpeza.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [
      { title: "Unboxing", videoLink: "https://vt.tiktok.com/ZSbRVJXqa/" },
      { title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSbR4vfB2/" },
    ],
    status: "Testado",
    order: 10,
  },
  {
    id: "creatina-dobro-pack-7-dias",
    name: "Creatina Dobro — Pack 7 Dias",
    category: "Suplementos",
    image: { placeholder: "/produtos/creatina-dobro-pack-7-dias.png", backgroundClass: "bg-[#dcd4ff]" },
    shortDescription: "Testei a Creatina Dobro saborizada e os dois sabores do pack de 7 dias.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videos: [{ title: "Demonstração", videoLink: "https://vt.tiktok.com/ZSbRV6kSy/" }],
    status: "Testado",
    order: 11,
  },
];

export const products = [...productList].sort((first, second) => first.order - second.order);