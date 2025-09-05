/// <reference types="vite/client" />

declare module "*.jpg" {
  const jpgSrc: string;
  export default jpgSrc;
}

declare module "*.jpeg" {
  const jpegSrc: string;
  export default jpegSrc;
}

declare module "*.png" {
  const pngSrc: string;
  export default pngSrc;
}

declare module "*.gif" {
  const gifSrc: string;
  export default gifSrc;
}

declare module "*.svg" {
  const svgSrc: string;
  export default svgSrc;
}
