const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

var inputDir = path.join(__dirname, '../public/proto');
var outputDir = path.join(__dirname, '../src/common/constants/proto');

const deleteFile = (delPath) => {
    try {
        fs.unlinkSync(delPath);
    } catch (error) {
        console.log('del error', error);
    }
};

const doExec = (command, extraEnv) => {
    return exec(command, {
        stdio: 'inherit',
        env: Object.assign({}, process.env, extraEnv),
    });
};

const clean = () => {
    const buildFileList = fs.readdirSync(outputDir);
    buildFileList.map((fileName) => {
        deleteFile(path.join(outputDir, fileName));
    });
};

console.log(`\nBuilding proto start ...`);

clean();

const propoList = fs.readdirSync(inputDir);

propoList.forEach((fileName) => {
    console.log(`\nBuilding ${fileName}`);
    doExec(
        `protoc -I=${inputDir} ${fileName} --js_out=import_style=commonjs:${outputDir} --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${outputDir}`
    );
});

console.log(`\nBuilding proto end ...`);
