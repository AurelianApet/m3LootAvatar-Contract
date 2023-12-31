const M3LootAvatar = artifacts.require("M3LootAvatar");

const NetworkTypes = {
  "mainnet": "mainnet",
  "polygon": "polygon",
  "goerli": "goerli",
}

const treasurer = {
  "mainnet": process.env.mainnetTreasuryAddress,
  "polygon": process.env.polygonTreasuryAddress,
  "goerli": process.env.goerliTreasuryAddress,
}

module.exports = async function (deployer) {
  const networkType = NetworkTypes[process.argv[4]];

  if (!networkType)
    return console.error(process.argv[4] + " was not found in the networkType list");

  console.log("Treasury is", treasurer[networkType]);

  if (!treasurer[networkType])
    return console.error("Treasury address not valid");

  console.log("Deploying on the " + networkType + " networkType");
//////////////////////////// Webaverse Character ////////////////////////////
  await deployer.deploy(M3LootAvatar, treasurer[networkType]);
//////////////////////////////////////////////////////////////////////////

  console.log("*******************************")
  console.log("Treasury: ", treasurer[networkType]);
  console.log("Deploying on the " + networkType + " networkType");
  console.log("*******************************")
  console.log("\"" + networkType + "\": {");
  console.log(" \"M3LootAvatar\": " + "\"" + M3LootAvatar.address + "\",")
  console.log("}");
  console.log("*******************************")
};
