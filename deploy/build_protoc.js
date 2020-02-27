const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

var inputDir = path.join(__dirname, '../public/proto');
var outputDir = path.join(__dirname, '../src/common/constants/proto');
var outputProtoDir = path.join(__dirname, '../src/common/constants/proto/protos');
var outputProtoJsDir = path.join(__dirname, '../src/common/constants/proto/js');

const deleteFile = (delPath) => {
    try {
        fs.unlinkSync(delPath);
    } catch (error) {
        console.log('del error', error);
    }
};

const getProtoFile = (dirPath) => {
    let prrotoFiles = [];
    function findProtoFile(dirPath) {
        let files = fs.readdirSync(dirPath);
        files.forEach(function(item, index) {
            let fPath = path.join(dirPath, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findProtoFile(fPath);
            }
            if (stat.isFile() === true && fPath.includes('.proto')) {
                fs.copyFile(fPath, path.join(outputProtoDir, item), function(err) {
                    if (err) {
                        console.log('copy err', err);
                    }
                });
            }
        });
    }
    findProtoFile(dirPath);
    return prrotoFiles;
};

const doExec = (command, extraEnv) => {
    return exec(command, {
        stdio: 'inherit',
        env: Object.assign({}, process.env, extraEnv),
    });
};

const clean = (dir) => {
    const buildFileList = fs.readdirSync(dir);
    buildFileList.map((fileName) => {
        deleteFile(path.join(dir, fileName));
    });
};

console.log(`\nBuilding proto start ...`);

clean(outputProtoDir);
clean(outputProtoJsDir);

getProtoFile(inputDir).map((fPath) => {
    copy(fPath);
});

const propoList = fs.readdirSync(outputProtoDir);

propoList.forEach((fileName) => {
    console.log(`\nBuilding ${fileName}`);
    doExec(
        `protoc -I=${outputProtoDir} ${fileName} --js_out=import_style=commonjs:${outputProtoJsDir} --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${outputProtoJsDir}`
    );
});

console.log(`\nBuilding proto end ...`);
