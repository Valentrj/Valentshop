export type BrandVideo = {
  title: string;
  videoLink: string;
  productId: string;
};

export type Brand = {
  slug: string;
  name: string;
  banner: string;
  description: string;
  videos: BrandVideo[];
};

// Banners das marcas salvos em public/destaques.
// Os vídeos ficam organizados aqui, separados por marca. Use o productId do
// produto cadastrado em products.ts para mostrar a miniatura automaticamente.
export const brands: Brand[] = [
  { slug: "emeet", name: "EMEET", banner: "/destaques/destaqueemeet.png", description: "Destaques e vídeos da EMEET.", videos: [{ title: "Webcam EMEET SmartCam S600", videoLink: "https://vt.tiktok.com/ZSb7qvJEU/", productId: "webcam-emeet-smartcam-s600" }] },
  { slug: "xiaomi", name: "Xiaomi", banner: "/destaques/Xiaomidestaques.png", description: "Destaques e vídeos da Xiaomi.", videos: [{ title: "Smartwatch Xiaomi Redmi Watch 5 Lite", videoLink: "https://vt.tiktok.com/ZSgeKBWxx/", productId: "smartwatch-xiaomi-redmi-watch-5-lite" }] },
  { slug: "inova", name: "Inova", banner: "/destaques/inovadestaques.png", description: "Destaques e vídeos da Inova.", videos: [{ title: "Fone Inova 4 em 1", videoLink: "https://vt.tiktok.com/ZSb3v5D4u/", productId: "fone-inova-4-em-1" }] },
  { slug: "lenyes", name: "Lenyes", banner: "/destaques/lenyesdestaque.png", description: "Destaques e vídeos da Lenyes.", videos: [] },
];
