// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
const BN = require('bn.js');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const HRPToken = await hre.ethers.getContractFactory("HRPToken");
  const hrp = await HRPToken.deploy("Your account address", new BN("The amount of HRPs minted in advance").toString());

  await dvg.deployed();

  console.log("HRP token smart contract address:", hrp.address);
  console.log("HRP token name:", await hrp.name());
  console.log("HRP token symbol:", await hrp.symbol());
  console.log("HRP token decimals:", await hrp.decimals());
  console.log("HRP token total supply:", (await hrp.totalSupply()).toString());
  console.log("HRP token amount of account:", (await hrp.balanceOf("Your account address")).toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
