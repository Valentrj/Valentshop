export type BrandVideo = {
  title: string;
  videoLink: string;
};

export type Brand = {
  slug: string;
  name: string;
  banner: string;
  description: string;
  videos: BrandVideo[];
};

// Banners das marcas salvos em public/destaques.
// Os vídeos ficam organizados aqui, separados por marca.
export const brands: Brand[] = [
  { slug: "emeet", name: "EMEET", banner: "/destaques/destaqueemeet.png", description: "Destaques e vídeos da EMEET.", videos: [{ title: "Webcam EMEET SmartCam S600", videoLink: "https://vt.tiktok.com/ZSb7qvJEU/" }] },
  { slug: "xiaomi", name: "Xiaomi", banner: "/destaques/Xiaomidestaques.png", description: "Destaques e vídeos da Xiaomi.", videos: [] },
  { slug: "inova", name: "Inova", banner: "/destaques/inovadestaques.png", description: "Destaques e vídeos da Inova.", videos: [] },
  { slug: "lenyes", name: "Lenyes", banner: "/destaques/lenyesdestaque.png", description: "Destaques e vídeos da Lenyes.", videos: [] },
];
