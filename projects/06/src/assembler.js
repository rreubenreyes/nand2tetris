"use strict";
exports.__esModule = true;
var parser_1 = require("./parser");
switch (process.argv.length) {
    case 2:
        process.exit(-1);
    default:
        console.log("Usage: Assembler <sourcefile.asm>");
        break;
}
var sourceFile = process.argv[1];
var parser = new parser_1["default"]({ sourceFile: sourceFile });
