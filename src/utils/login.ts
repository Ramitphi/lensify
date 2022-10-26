import { ethers } from "ethers";

import axios from "axios";

import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

export const login = async () => {
  if (!window.ethereum) throw new Error("no wallet found");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  await provider
    .send("eth_requestAccounts", [])

    .catch(() => console.log("user rejected request"));

  const address = await signer.getAddress();
  const { data: lens } = await axios.request({
    method: "GET",
    url: `https://api.nftport.xyz/v0/accounts/${address}?chain=polygon&contract_address=0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "2e0cc1de-7253-4d3b-80c0-7093ee89fb4c",
    },
  });

  const lensprofiles =
    lens?.nfts?.map(({ name }: { name: string }) => name) || [];

  return { address, lens: lensprofiles[0] };
};
