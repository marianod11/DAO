require('babel-register');
require('babel-polyfill');


var HDWalletProvider =require("truffle-hdwallet-provider")
var mnemonic = "tu frase semilla"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: function() { 
       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d2275b005f7f48cca3cbde70c8a5c2cc");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }

  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.6.8",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
