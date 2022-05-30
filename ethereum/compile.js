// We have seen in our lottery project that for every time we need to compile our project again and again which takes a couple of seconds but in this project we will just compile the project once and use it agian and again to overcome that waiting time. It's just like we do npm run build for react projects.

const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

// Step 1: We have to delete the build directory if it already exists so that we can make a new build directory with new changes we have done in our main code.
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // This will delete the folder if it exists.

// Step 2: Read 'Campaign.sol' from the contracts folder.
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8'); // This will read the file content.

// Step 3: Compile both contracts with solidity compiler.
const output = solc.compile(source, 1).contracts;

// Step 4: Write output to the 'build' directory.
fs.ensureDirSync(buildPath); //As we have deleted the 'build' folder above we have to create it before writing something into it. ensureDir checks if a folder with this path exists and if it doesn't it will create it for us.

for (let contract in output){ // This is a for in loop which is used to iterate over the keys of an object. We will iterate over all the keys(all the contracts) and write it into the build folder into a new file 'KEY_NAME.json'.
    fs.outputJsonSync( // It will write some json file to the specified directory.
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract] // This second argument is the content we want to write into the file
    );
}