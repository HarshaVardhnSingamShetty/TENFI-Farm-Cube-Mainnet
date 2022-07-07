import { ethers } from "hardhat";
// const autotoken = require("../abis/auto.js");

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("Deployer: ", signer.address);
  //const strat = await ethers.getContractFactory("StartX2_PCS");
  // const strat = await ethers.getContractFactory("TENFIStrategy_PCS");
  const strat = await ethers.getContractFactory("TENFIStrategy_PCS_CORN");
  const dai ="0xdf443238d7b80446c3b3e76a556a354670da0205";
  const tusd = "";
  const corn = "0x1cc23571ec9dc62b8f80bf5c5e13ea035ce0c49b";
  const wcube = "0xb9164670a2f388d835b868b3d0d441fa1be5bb00";
  // const autoToken = "0xD97025fE249D5EF553a228D1835800cf0CD79BE9";
  const TENFI_token = "0x2Ab5CB73931F21f5727e9d5b4fc646CD36964650";
  const usdc = "0x397f46e835cbee65228c9af441c48eea50a4ca37";
  const usdt = "0x9bd522cc85bd1bd6d069d5e273e46ccfee905493";
  const eth = "0xbc66b3895a1ed852b877b2ba8f42e79a846eb732";
  //const govAddress = "0x10314AF57a74791a1670073063625D186F46571E";
  const TENFI_timelock = "0x830DCBe1a8CEd5E4F7F9ddECf83da0598dCeD1e8";
  //const autoTokenFarm = "0x80ec21A12431481eF0E166e216e5ae8F5CC8eCc2";
  const TENFI_Farm = "0xc752e374e42CeECcB534cEd1493c79F8ef7f09F2";
  const wbtc = "0xbd996d73ffdd2e2393cd0a339de3748ca508b625";
  const want_USDC_USDT = "0x7217F096Fce9F81eF25eA7d9cEa4Bb7b2363b597"; // pid10 in masterchef
  const want_CORN = "0x1cc23571ec9dc62b8f80bf5c5e13ea035ce0c49b"; //pid 0 in masterchef
  const want_Corn_USDT = "0x363348549Abbc642682e2a6291DED01AacAbF639"; //pid2 in masterchef
  const want_Corn_WCUBE = "0x32A7f50138372A323B99EEbc9035004E946f1B94"; //pid 3 in masterchef
  const want_USDT_WCUBE = "0x93247d3a88C7474BCA9563eD40C5F31800bc623a"; // pid 4 in masterchef
  const want_Corn_ETH = "0xFfD696140BB18DcAC8ed75ba17f209c2e4cdAb77"; // pid 6 in masterchef
  const want_USDT_ETH = "0xe6b9ffeE932CFe1aEe0aF60725fAA6e125582019"; //pid 8 in masterchef
  const want_USDT_WBTC = "0xc000F4CF5CC87A78BE915C0a7efa206eA447a91b"; //pid 7 in masterchef
  const masterChefFarmAdd = "0x6273638e3be5770851e23bfce27d69592bedcd2c";
  const routerAdd = "0x14C02Dc9B29aC28e852F740CBA6722BC7308fEB8";
  const rewardAdd = "0x7368ea4b5A7204CFe592d096D4CdC8832f754027";
  const burnAdd = "0x000000000000000000000000000000000000dead";
  const zeroAdd = "0x0000000000000000000000000000000000000000";
  const addresses = [wcube, 
  TENFI_timelock,
  //govAddress, // govAddress
  TENFI_Farm,
  //autoTokenFarm, // autoFarm or autoTokenFarm
  TENFI_token,
  //autoToken, 
  want_CORN, // want address 
  zeroAdd, //token 0
  zeroAdd, //token 1
  corn, //earnedAddress
  masterChefFarmAdd, // Masterchef (farm) address
  routerAdd, // router address
  rewardAdd, // reward address
  burnAdd] // burn address

  const earnedToAutoPath = [corn, TENFI_token]

  const earnedToToken0Path:any = [];// = [corn];

  const earnedToToken1Path:any = [];// //check the route in capSwap

  const token0ToEarnedPath:any = [];//
// token1ToEarnedPath and earnedToToken1Path might have differnt paths.EX: CORN-ETH is direct but, 
//ETH-USDT-CORN!
  const token1ToEarnedPath :any = [];//
  
  //here give the pid of MAsterchef farm
  //const StratPCS = await strat.deploy(addresses, 0, true, true, true, earnedToAutoPath, earnedToToken0Path, earnedToToken1Path, token0ToEarnedPath, token1ToEarnedPath, 0, 0 ,0, 0);
  const StratPCS = await strat.deploy(addresses, 0, true, false, true, earnedToAutoPath, earnedToToken0Path, earnedToToken1Path, token0ToEarnedPath, token1ToEarnedPath);  
  
  await StratPCS.deployed();

  console.log("StratX2 PCS deployed to:", StratPCS.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
