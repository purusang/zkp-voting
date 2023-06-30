const { expect } = require("chai");
const hre = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("CoffeeMachine", function () {
    // fixture to be called from tests
    async function deployCoffeeMachineFixture() {
      // write your deployment code
      const addresses = await hre.ethers.getSigners();
    //   const CM = await hre.ethers.getContractFactory("CoffeeMachine");
    //   const cm = await CM.deploy(addresses[0].address);

      const cm = await hre.ethers.deployContract("CoffeeMachine", [addresses[0].address]);
      await cm.waitForDeployment();
      // return the instances to be used by tests
      return { cm, addresses };
    }
    
    it("should mint tokens for the user", async function () {
      // rewritten to use fixtures
      const { cm, addresses } = await loadFixture(deployCoffeeMachineFixture);
    //   console.log(cm, "cm addr");
      const [owner, addr1] = addresses;
    //   console.log(owner, addr1, "owner addr1");
      await expect(
        cm.connect(addr1).mintTokens({
          value: hre.ethers.parseEther("0.0012"),
        })
      )
        .to.changeEtherBalance(owner, hre.ethers.parseEther("0.001"))
        .to.changeEtherBalance(addr1, hre.ethers.parseEther("-0.001"));
      expect(await cm.connect(addr1).getTokenBalance()).to.equal(2);
    });
    
    it("should not mint tokens for the owner", async function () {
      // rewritten to use fixtures
      const { cm } = await loadFixture(deployCoffeeMachineFixture);
      await expect(
        cm.mintTokens({
          value: hre.ethers.parseEther("0.001"),
        })
      ).to.be.revertedWith("cant mint tokens for the owner");
    });
  });