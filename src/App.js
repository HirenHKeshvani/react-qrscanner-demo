import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './style.css';

export default function App() {
  const [qrValue, setQrValue] = useState('');

  const generateQRCode = () => {};

  return (
    <div class="style-qr">
      Generate QR code for given value <br></br>
      <br></br>{' '}
      <input type="text" onChange={(e) => setQrValue(e.target.value)}></input>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>{qrValue}</p>
      {qrValue && <QRCodeSVG value={qrValue} size="192" />}
      <br></br>
    </div>
  );
}
