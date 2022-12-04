const goSHARE = artifacts.require("./src/contracts/goSHARE","Error");

module.exports = function(deployer) {
  deployer.deploy(goSHARE);
};
