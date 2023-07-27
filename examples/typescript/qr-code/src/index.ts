import { generateQrCode } from './qr-code';

const start = (): void => {
  const qrCodeImg: HTMLImageElement = document.createElement('img');
  qrCodeImg.src = generateQrCode({
    width: 700,
    height: 700,
    color: 'ffffff',
    bgColor: '174b8b',
    url: 'https://fanconnect.tv/',
  });
  document.getElementById('qr-code')?.appendChild(qrCodeImg);
};

start();
