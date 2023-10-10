// (async()=>{
//   console.log("process.env.MAINNET_PRC_URL",process.env.MAINNET_RPC_URL);
//   console.log("ethers.providers",ethers.JsonRpcProvider);
//   const provider = new ethers.JsonRpcProvider("https://eth.llamarpc.com");
//   console.log("Provider",provider.connection);
//   blockNumber = await provider.getBlockNumber()-10;
//   console.log("blockNumber",blockNumber);
// })();

async function main() {
    const address = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8"; // Example Ethereum address
    const balance = await ethers.provider.getBalance(address);
    console.log("balance",balance);
}
  
main();


