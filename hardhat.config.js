const fs = require('fs')
// eslint-disable-next-line import/no-extraneous-dependencies
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')

const PRIVATE_KEY = fs.readFileSync('.secret').toString().trim()

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url:
        'https://polygon-mumbai.g.alchemy.com/v2/gQqiYgK8siAdI0G4p-oaL_NmK1I8Oytf',
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: '0.8.4',
}
