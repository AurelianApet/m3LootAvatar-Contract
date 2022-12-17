const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config()

module.exports = {
  contracts_directory: "./ethereum/",
  networks: {
    mainnet: {
      host: "", // TODO: Add me
      provider: () => new HDWalletProvider(process.env.mainnet, ""),
      port: 8485,
      network_id: "1338",
      networkCheckTimeout: 10000,
    },
    polygon: {
      provider: () => new HDWalletProvider(process.env.polygon, `https://matic-mainnet.chainstacklabs.com`),
      network_id: 137,
      confirmations: 2,
      pollingInterval: 60000,
      timeoutBlocks: 10500,
      gasPrice: 40e9,
      networkCheckTimeout: 100000,
      timeout: 100000,
      skipDryRun: false
    },
    goerli: {
      provider: () => new HDWalletProvider(process.env.goerli, "https://goerli.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 5,
      gas: 6700000,
      gasPrice: 10000000000,
      timeoutBlocks: 600,
      networkCheckTimeout: 10000
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.15",
      settings: {
        optimizer: {
          enabled: true,
          runs: 15000
        }
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: '16X7NBNHE9FF11P6K11HIIBBMF8KPVXW5J',
    etherscan: 'SKID1ZVK755GXRUJEIPCT4BVNS5JUH12PJ'
  }
}
