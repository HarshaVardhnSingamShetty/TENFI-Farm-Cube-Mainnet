const { expect } = require("chai");
const { ethers } = require("hardhat");
import { keccak256 } from "@ethersproject/keccak256";
import { toUtf8Bytes } from "@ethersproject/strings";

import { AbiCoder } from "ethers/lib/utils";
// import { TimelockController } from "../src/types/AutoFarmTimelock.sol/TimelockController";
// import { AutoFarmV2 } from "../src/types/AutoFarmV2.sol/AutoFarmV2";
// import { StratX2_PCS } from "../src/types/StratX2_PCS";
import { TENFIFarm } from "../src/types/contracts/TENFI_Farm.sol";


const autoToken = require("../abis/auto.js");
const autoFarm = require("../abis/TENFI_Farm.js");
const autoLock = require("../abis/autoLock.js");
const stratX2_PCS = require("../abis/stratX2PCS.js");

async function main() {
    const [signer] = await ethers.getSigners();
    // const autoLockInstance = (await ethers.getContractAt(autoLock.abi, autoLock.address)) as TimelockController;
    const autoFarmInstance = (await ethers.getContractAt(autoFarm.abi, autoFarm.address)) as TENFIFarm
    //const stratX2Instance = (await ethers.getContractAt(stratX2_PCS.abi, stratX2_PCS.address)) as StratX2_PCS
    const want_USDT_DAI = "0x3d7df35d06e1746900be3725d201523189ae4ce1";
    const want_USDC_USDT = "0x7217F096Fce9F81eF25eA7d9cEa4Bb7b2363b597";
    const farm = "0x80ec21A12431481eF0E166e216e5ae8F5CC8eCc2";
    const strat_USDT_DAI = "0x556eE1C7e058C1FcCc3D02915f38AAf31F98EA44";
    const strat_USDC_USDT = "0x638F1c93051f8a181A6336B9F6A8e6E9A079342C";

    // let abiCoder = new ethers.utils.AbiCoder();

    // const role = abiCoder.encode(["string"], ["EXECUTOR_ROLE"]);
    // // const exec_role = keccak256(toUtf8Bytes("EXECUTOR_ROLE"));
    // const admin_role = keccak256(toUtf8Bytes("TIMELOCK_ADMIN_ROLE"));
    // console.log(signer.address);
    // //await autoLockInstance.grantRole(exec_role, "0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D");

    // let has_admin_role = await autoLockInstance.hasRole(admin_role, signer.address);
    // // let has_exec_role = await autoLockInstance.hasRole(exec_role, "0x7748329C48FE9F5Dc50f5858E174Dbc7A037117D");
    
    // console.log(has_admin_role);
    //  console.log(has_exec_role);
    
    // await autoLockInstance.add(farm, want_USDC_USDT, false, strat_USDC_USDT);

    // const pool0 = await autoFarmInstance.poolInfo(1);
    // const userInfo = await autoFarmInstance.userInfo(1, signer.address);
    // console.log("Singenr add", signer.address,"UserINfo : ",userInfo);
    
    // console.log("\n Pool Info",pool0);
    
    const wantAmt = ethers.utils.parseEther("2");

    console.log("before deposit!", wantAmt);
    //we must approve before deposting
    const tx = await autoFarmInstance.deposit(0, wantAmt );
    tx.wait();
    console.log("after deposit!")


    // let filter = {
    //     address: autoFarmInstance.address,
    //     topics: [
    //         // the name of the event, parnetheses containing the data type of each event, no spaces
    //         ethers.utils.id("Deposit(address,uint256,uint256)")
    //     ]
    // }
    // ethers.provider.on(filter, (log: any, event: any) => {

    //     console.log("\n LOG :", log, "\n EVENT :", event);
    // })


    
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});