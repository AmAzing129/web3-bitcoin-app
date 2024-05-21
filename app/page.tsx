"use client";

import { ConnectButton, Connector, NFTImage } from "@ant-design/web3";
import { useBitcoinWallet } from "@ant-design/web3-bitcoin";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const { provider, account, name } = useBitcoinWallet();
  const [start, setStart] = useState(0);
  const [size, setSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [inscriptions, setInscriptions] = useState([]);

  useEffect(() => {
    if (!account) return;
    if (name === "Unisat Wallet") {
      setLoading(true);
      provider
        .getInscriptions(start, size)
        .then(({ list, total }) => {
          setInscriptions(list);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [account, name, provider]);

  return (
    <>
      <Connector>
        <ConnectButton />
      </Connector>
      {inscriptions.length > 0
        ? inscriptions.map(({ content, inscriptionNumber }) => (
            <NFTImage width={300} tokenId={inscriptionNumber} src={content} />
          ))
        : null}
    </>
  );
};

export default App;
