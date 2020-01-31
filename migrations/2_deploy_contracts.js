const ConvertLib = artifacts.require("ConvertLib");
const OzcarCoin = artifacts.require("OzcarCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, OzcarCoin);
  deployer.deploy(OzcarCoin);
};
