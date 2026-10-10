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

// Coloque os banners em public/marcas e atualize o caminho de cada marca.
// Os vídeos ficam organizados aqui, separados por marca.
export const brands: Brand[] = [
  { slug: "emeet", name: "EMEET", banner: "", description: "Destaques e vídeos da EMEET.", videos: [{ title: "Webcam EMEET SmartCam S600", videoLink: "https://vt.tiktok.com/ZSb7qvJEU/" }] },
  { slug: "xiaomi", name: "Xiaomi", banner: "", description: "Destaques e vídeos da Xiaomi.", videos: [] },
  { slug: "inova", name: "Inova", banner: "", description: "Destaques e vídeos da Inova.", videos: [] },
  { slug: "lenyer", name: "Lenyer", banner: "", description: "Destaques e vídeos da Lenyer.", videos: [] },
];
