# contracts

M3LootAvatar contracts.

# Setup and Installation

First, copy .env.default and rename it to .env, then configure it for the network you want to deploy to.

```
npm install
npm run deploy-<network> // i.e. npm run deploy-polygon
npm run deploy-<network>-verify // verify deployed smart contracts
```
Consult package.json for more options

# Deployment

To deploy contracts, you will need several things:
1. A deployment wallet with enough Mainnet Ethereum, Rinkeby and/or Polygon/MATIC token to pay for the gas of deploying.
    Your best option is to download Metamask. Create a new Metamask wallet for this purpose so you can use the private keys for your signing authority.

2. Several BIP39 mnemonics and private keys
 -- Treasury addresses, for handling tokens owned by your treasury
 -- Signing addresses, for handling chain transfers and other transactions
 -- Private keys for each of the networks you want to interact with

 You can generate BIP39 mnemonics with Metamask (recommended) or here: 
 https://particl.github.io/bip39/bip39-standalone.html

The first step is to add your private keys to the .env file. You can export your private key from your Metamask wallet. Assuming you have one wallet with all of your deployment currency, this should look like this:

NOTE: STORE ALL MNEMONICS, ROOT/PRIVATE AND PUBLIC KEYS SOMEWHERE VERY SAFE!!!

```
.env
mainnet=a72ee7af443c3333e59d59a4273ce5a39a9f072a89fbc1cdbace0522197bf465
polygon=a72ee7af443c3333e59d59a4273ce5a39a9f072a89fbc1cdbace0522197bf465
testnet=a72ee7af443c3333e59d59a4273ce5a39a9f072a89fbc1cdbace0522197bf465
```

Next, you will need public wallet addresses, which are derived from BIP39 mnemonics.

These should be unique and generated per chain you hope to deploy to. You will need keys for both your signer and your treasury. The signer is responsible for signing off on transactions, while the treasury holds items and tokens on behalf of your org as a network peer.

Make sure you are generating addresses for the ethereum network. They will have a "0x" at the beginning.

```
.env
mainnetTreasuryAddress=0xebDeFbB0B1efc88603BF3Ea7DCac4d11628Fb862	
polygonTreasuryAddress=0x05FD932b8EE9E94CB80D799a298E0FfB233a42A7
testnetTreasuryAddress=0x9aA26FaBE68BC7E6CF9af378b7d5DBB0af88D6Fb

mainnetSignerAddress=0x0008255d48210c877ffd5c967b143B5c1523a71b
polygonSignerAddress=0xB8c2a35e92D5218CcA816EB7665e7525973F2b58
testnetSignerAddress=0x0940A21a2430dA3B78e084c01baD302Bbb982442
```

Once your environment variables are set up, you are ready to deploy.

Your first deployment is, ideally, to a Ganache test server. If you've never used Truffle or Ganache before, you should start here:
https://www.trufflesuite.com/docs/truffle/quickstart

# Addressess used

burn: 0x000000000000000000000000000000000000dEaD

mainnet signer: 0xB565D3A7Bcf568f231726585e0b84f9E2a3722dB

testnet signer: 0xB565D3A7Bcf568f231726585e0b84f9E2a3722dB

polygon signer: 0xB565D3A7Bcf568f231726585e0b84f9E2a3722dB

testnetpolygon signer: 0xB565D3A7Bcf568f231726585e0b84f9E2a3722dB

treasury: 0xB565D3A7Bcf568f231726585e0b84f9E2a3722dB
