import { ethers } from "hardhat";
// import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";

// const autoFarm = require("../abis/autofarm.js");

async function main() {

  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);

  const AutoLock = await ethers.getContractFactory("TENLock");
  const autoLock = await AutoLock.deploy();

  await autoLock.deployed();

  console.log("AutoLock deployed to:", autoLock.address);

  // const autoFarmContract = (await ethers.getContractAt(autoFarm.abi, autoFarm.address)) as AutoFarmV2;

  // let owner = await autoFarmContract.owner();
  // console.log("owner", owner);
  // const tx = await autoFarmContract.transferOwnership(autoLock.address);
  // await tx.wait();
  // owner = await autoFarmContract.owner();
  // console.log("New owner", owner);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
