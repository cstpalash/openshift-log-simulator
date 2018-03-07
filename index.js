var config = require("./config");
var containerFactory = require("./container");

console.log("**********Starting Fabric Log Simulator**********");
console.log("=================================================");

config.containers.forEach((item, index) => {

	var ctr = new containerFactory.Container(item.name, item.logFrequencyInSeconds, config.logBasePath);
	ctr.start();

});

