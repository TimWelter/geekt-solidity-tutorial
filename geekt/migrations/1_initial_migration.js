const Migrations = artifacts.require("Geekt");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
