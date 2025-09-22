import React, { useEffect, useState } from "react";
import * as QRCode from "qrcode";

interface QRCodePrintProps {
  url: string;
}

const QRCodePrint = ({ url }: QRCodePrintProps) => {
  const [qrCodeUrl, setQRCodeUrl] = useState<string>("");

  useEffect(() => {
    const generateQRCode = async () => {
      if (!url) return; // Não gera QR code se não houver URL

      try {
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: 120,
          margin: 2,
          color: {
            dark: "#463f3a",
            light: "#f4f3ee",
          },
        });
        setQRCodeUrl(qrDataUrl);
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    };

    generateQRCode();
  }, [url]);

  return (
    <div className="inline-block">
      {qrCodeUrl && (
        <div className="text-center bg-white p-3 rounded shadow-sm">
          <img src={qrCodeUrl} alt="QR Code do Portfólio" className="mx-auto" />
          <p className="text-xs mt-2 text-gray-600">
            Escaneie para acessar online
          </p>
        </div>
      )}
    </div>
  );
};

export default QRCodePrint;
