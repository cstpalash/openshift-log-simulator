const uuidv4 = require('uuid/v4');
const winston = require('winston');

function Container(name, logFreq, logBasePath){
	this.id = uuidv4();
	this.name = name;
	this.logFreq = logFreq;
	this.logBasePath = logBasePath;

	var fileName = this.logBasePath + "/" + this.id + ".log";

	this.logger = new (winston.Logger)({
	  transports: [
	    new winston.transports.File({ filename: fileName, level: 'error' }),
	  ]
	});

	this.counter = 0;

	this.start = () => {
		console.log("Starting container : " + this.name);

		setInterval(this.log, this.logFreq * 1000);
	}

	this.log = () => {
		this.logger.error("This is a test log from container (" + this.name + ") : " + ++this.counter);
	}
}

module.exports = {
	Container : Container
}