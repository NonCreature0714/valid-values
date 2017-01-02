const path = require('path');

//TODO: create simple validators for primatives.
//TODO: create validators for other Types.

const isArrayOfOneElement = (array: Array()) => {
	//TODO: complete, improve
	return array.length === 1;
}


const isAString = (value) => {
	return typeof value === 'string' || value instanceof String;
}

const isFile = (ofType, atPath) => {
	//TODO: complete	
}

const isADirectory = (filePath) => {
	//TODO: complete
}


const isFileOrDirectory = (filePath) => {
	//TODO: complete
}

const isFoldOfAtLeastOne = (fileType, atPath) => {
	//TODO: complete
}


module.exports = {isAString,isFile,isADirectory,isFileOrDirectory,isFolderOfAtLeastOne};
