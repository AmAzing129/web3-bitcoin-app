"use client";

import {
  BitcoinWeb3ConfigProvider,
  XverseWallet,
  UnisatWallet,
} from "@ant-design/web3-bitcoin";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <BitcoinWeb3ConfigProvider wallets={[XverseWallet(), UnisatWallet()]}>
          {children}
        </BitcoinWeb3ConfigProvider>
      </body>
    </html>
  );
}
