import { ethers } from "hardhat";
import { TenFI } from "../src/types/contracts/TENFI_Token.sol";

async function main() {
  const TENFI_TokenFactory = await ethers.getContractFactory("TENFI_Token");
  const TENFI_TokenContract = await TENFI_TokenFactory.deploy() as TenFI;
  const [signer] = await ethers.getSigners();
  await TENFI_TokenContract.deployed();

  console.log("AUTO token deployed to:", TENFI_TokenContract.address);
  const amt1 = ethers.utils.parseEther("10000");
  await TENFI_TokenContract.mint(signer.address,amt1 );
  await TENFI_TokenContract.mint( "0x7368ea4b5A7204CFe592d096D4CdC8832f754027", amt1);
  
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
