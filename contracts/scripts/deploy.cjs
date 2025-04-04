// Script for deploying the Freelance Marketplace contracts
const hre = require("hardhat");

async function main() {
 console.log("Starting deployment...");

 const FreelanceMarketplace = await hre.ethers.getContractFactory(
  "FreelanceMarketplace"
 );
 const Escrow = await hre.ethers.getContractFactory("Escrow");

 const [deployer] = await hre.ethers.getSigners();
 console.log("Deploying contracts with the account:", deployer.address);

 console.log("Deploying FreelanceMarketplace...");
 const marketplace = await FreelanceMarketplace.deploy(deployer.address);
 await marketplace.waitForDeployment();
 const marketplaceAddress = await marketplace.getAddress();
 console.log("FreelanceMarketplace deployed to:", marketplaceAddress);

 console.log("Deploying Escrow...");
 const treasuryAddress = deployer.address;
 const protocolFeeRate = 250;
 const escrow = await Escrow.deploy(
  deployer.address,
  marketplaceAddress,
  treasuryAddress,
  protocolFeeRate
 );
 await escrow.waitForDeployment();
 const escrowAddress = await escrow.getAddress();

 let tx = await marketplace.setEscrowContract(escrowAddress);
 await tx.wait();
}

main()
 .then(() => process.exit(0))
 .catch((error) => {
  console.error(error);
  process.exit(1);
 });
