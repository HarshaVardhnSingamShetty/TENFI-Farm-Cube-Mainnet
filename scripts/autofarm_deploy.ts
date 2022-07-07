import { ethers } from "hardhat";
import { TENFIFarm } from "../src/types/contracts/TENFI_Farm.sol";

// const autotoken = require("../abis/auto.js");



async function main() {

  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);

  const AutoFarm = await ethers.getContractFactory("TENFIFarm");
  const autoFarm = await AutoFarm.deploy() as TENFIFarm;

  await autoFarm.deployed();

  console.log("AutoFarm deployed to:", autoFarm.address);

  // const Auto = (await ethers.getContractAt(autotoken.abi, autotoken.address)) as AUTOv2;

  // let owner = await Auto.owner();
  // console.log("owner", owner)
  
  // const tx = await Auto.transferOwnership(autoFarm.address);
  // await tx.wait();
  // owner = await Auto.owner();
  // console.log("New owner", owner);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
