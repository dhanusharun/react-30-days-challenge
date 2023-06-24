import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = ({ text }) => {
  return <QRCode value={text} fgColor='white' bgColor='#2A7CFA'/>;
};

export default QRCodeComponent;
