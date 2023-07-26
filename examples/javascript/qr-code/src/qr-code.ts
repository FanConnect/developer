export interface QrCode {
  width: number;
  height: number;
  color: string;
  bgColor: string;
  url: string;
}

export const generateQrCode = (params: QrCode): string => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${params.width}x${params.height}&color=${params.color}&bgcolor=${params.bgColor}&margin=0&qzone=0&data=${params.url}`;
};
