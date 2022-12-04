const Migrations = artifacts.require("Migrations","Error");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
