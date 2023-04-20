const generateQrCode = async () => {
  return 'https://api.qrserver.com/v1/create-qr-code/?size=700x700&color=ffffff&bgcolor=174b8b&margin=0&qzone=0&data=https://fanconnect.tv';
};

const run = async () => {
  const qrCodeImg = document.createElement('img');
  qrCodeImg.src = await generateQrCode();
  document.getElementById('qr-code').appendChild(qrCodeImg);
};

run();
