"use client";

import { ConnectButton, Connector } from "@ant-design/web3";
import {
  BitcoinWeb3ConfigProvider,
  XverseWallet,
} from "@ant-design/web3-bitcoin";

const App: React.FC = () => {
  return (
    <BitcoinWeb3ConfigProvider wallets={[XverseWallet()]}>
      <Connector>
        <ConnectButton />
      </Connector>
    </BitcoinWeb3ConfigProvider>
  );
};

export default App;
