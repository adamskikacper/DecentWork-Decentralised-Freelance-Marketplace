require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const PRIVATE_KEY =
 process.env.PRIVATE_KEY ||
 "0x0000000000000000000000000000000000000000000000000000000000000000";
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "";
const AMOY_RPC_URL =
 process.env.AMOY_RPC_URL || "https://polygon-amoy.infura.io/v3/";
const POLYGON_RPC_URL =
 process.env.POLYGON_RPC_URL || "https://polygon-rpc.com";
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
 solidity: {
  version: "0.8.20",
  settings: {
   optimizer: {
    enabled: true,
    runs: 200,
   },
  },
 },
 networks: {
  hardhat: {
   chainId: 31337,
  },
  localhost: {
   chainId: 31337,
  },
  alchemy_sepolia: {
   url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
   accounts: [PRIVATE_KEY],
   chainId: 11155111,
  },
  alchemy_polygon: {
   url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
   accounts: [PRIVATE_KEY],
   chainId: 137,
  },
  amoy: {
   url: AMOY_RPC_URL,
   accounts: [PRIVATE_KEY],
   chainId: 80002,
  },
  polygon: {
   url: POLYGON_RPC_URL,
   accounts: [PRIVATE_KEY],
   chainId: 137,
  },
 },
 etherscan: {
  apiKey: {
   sepolia: POLYGONSCAN_API_KEY,
   polygonAmoy: POLYGONSCAN_API_KEY,
   polygon: POLYGONSCAN_API_KEY,
  },
 },
 paths: {
  sources: "./contracts",
  tests: "./test",
  cache: "./cache",
  artifacts: "./artifacts",
 },
};
