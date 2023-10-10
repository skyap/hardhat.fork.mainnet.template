require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.19",
  networks:{
    hardhat:{
      forking:{
          url:process.env.MAINNET_RPC_URL,
          blockNumber: 18316957
      }

    }
  }
};

