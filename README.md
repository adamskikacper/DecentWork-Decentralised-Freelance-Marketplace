# Decentralized Freelance Marketplace

A blockchain-based platform connecting freelancers and clients without intermediaries, using smart contracts for secure agreements and payments.

## 🌟 Vision

Creating a global, decentralized marketplace where talent can connect directly with clients without intermediaries, while ensuring security, transparency, and fair compensation through blockchain technology.

## 🚀 Features

### For Freelancers

- Create profiles and showcase portfolios with blockchain-verified credentials
- Discover projects that match your skills and interests
- Submit proposals with detailed estimates and timelines
- Receive secure payments through smart contract escrow
- Build a portable, verifiable reputation

### For Clients

- Post projects with detailed requirements and budgets
- Browse freelancer profiles with verified skills and reputation
- Create milestone-based contracts with secure escrow
- Release payments only when satisfied with deliverables
- Leave verified reviews to build marketplace trust

## 💻 Tech Stack

- **Frontend**:

  - React 18 with TypeScript
  - Vite
  - Tailwind CSS with shadcn/ui components
  - React Router for navigation
  - React Query for data fetching
  - Storybook for component development and documentation

- **Backend**:

  - Supabase (PostgreSQL database)
  - Supabase Auth with wallet authentication

- **Blockchain**:

  - Ethereum/Polygon smart contracts
  - Solidity for contract development
  - Hardhat for testing and deployment
  - Polygon Amoy testnet for development testing

- **Web3 Integration**:

  - ethers.js for blockchain interactions
  - wagmi for React hooks
  - WalletConnect for multi-wallet support

### Prerequisites

- Node.js (v18+)
- npm
- Supabase CLI
- Metamask or compatible wallet
- Infura account (or other RPC provider)
- NFT.Storage account for IPFS file uploads

### Setup

```bash
# Clone the repository
git clone https://github.com/adamskikacper/Decentralised-Freelance-Marketplace
cd Decentralised-Freelance-Marketplace

# Install dependencies
npm install

# Compile smart contracts
npm run compile

# Test smart contracts
npm run test:contracts

# Deploy to local network
npm run deploy:local

# Deploy to Polygon Amoy testnet
npm run deploy:amoy

# Deploy to Polygon mainnet
npm run deploy:polygon

# Start local development server
npm run dev

# Start Storybook component explorer
npm run storybook
```

## 📚 Storybook Component Library

This project includes a Storybook component library documenting UI components:

To run Storybook:

```bash
npm run storybook
```

This will start Storybook on [http://localhost:6006](http://localhost:6006).

## 📊 Current Status

The project is currently in the initial development phase. I'm working on:

- Core smart contract development
- Frontend prototype
- Database schema implementation
- Authentication system integration
- UI component library via Storybook

## 📧 Contact

For questions, contact me at [contact@kacperadamski.dev](mailto:contact@kacperadamski.dev).
