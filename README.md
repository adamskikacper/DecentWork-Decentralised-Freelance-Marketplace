# Decentralised Freelance Marketplace

A blockchain-based freelance platform connecting freelancers and clients.

## 💻 Tech Stack

- **Frontend**:

  - React 18 with TypeScript
  - Vite
  - Tailwind CSS with shadcn/ui components
  - React Router
  - React Query
  - Storybook

- **Backend**:

  - Supabase (PostgreSQL database)
  - Supabase Auth

- **Blockchain**:

  - Ethereum
  - Solidity
  - Hardhat

- **Web3 Integration**:

  - ethers.js

### Prerequisites

- Node.js (v18+)
- npm
- Supabase CLI
- Metamask wallet

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

# Start local server
npm run dev

# Start Storybook
npm run storybook
```
