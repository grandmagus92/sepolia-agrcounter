import { createThirdwebClient, defineChain, getContract } from "thirdweb";

const CLIENT_ID =process.env.NEXT_PUBLIC_CLIENT_ID;
export const client = createThirdwebClient({
    clientId: CLIENT_ID as string,
});

export const chain= defineChain(11155111)

const contractAddress="0x511B89c4967a18164a7dA3d529654C1943C6782B"
const contractABI=[
    {
      "type": "function",
      "name": "count",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "decrement",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getCount",
      "inputs": [],
      "outputs": [
        {
          "type": "uint256",
          "name": "",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "increment",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    }
  ] as const;

  export const CONTRACT = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi:contractABI,
  });