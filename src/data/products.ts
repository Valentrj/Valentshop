export type ProductImage = {
  placeholder: string;
  backgroundClass: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: ProductImage;
  shortDescription: string;
  price: string;
  productLink: string;
  videoLink: string;
  status: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "luminaria-globo-led-galaxia",
    name: "Luminária Globo LED Galáxia",
    category: "Casa",
    image: { placeholder: "/produtos/luminaria-galaxia.png", backgroundClass: "bg-[#d7f1e8]" },
    shortDescription: "Testei o efeito de luz, o acabamento e a presença dela no ambiente.",
    price: "Preço pendente",
    productLink: "[Link do produto pendente]",
    videoLink: "https://vt.tiktok.com/ZSq3sRd3a/",
    status: "Testado",
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
    videoLink: "https://vt.tiktok.com/ZSq3s2sA2/",
    status: "Testado",
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
    videoLink: "https://vt.tiktok.com/ZSq3pcVut/",
    status: "Testado",
    featured: false,
  },
];