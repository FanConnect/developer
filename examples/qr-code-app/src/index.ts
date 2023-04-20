const generateQrCode = (): string => {
  return 'https://api.qrserver.com/v1/create-qr-code/?size=700x700&color=ffffff&bgcolor=174b8b&margin=0&qzone=0&data=https://fanconnect.tv';
};

const start = (): void => {
  const qrCodeImg: HTMLImageElement = document.createElement('img');
  qrCodeImg.src = generateQrCode();
  document.getElementById('qr-code')?.appendChild(qrCodeImg);
};

start();
