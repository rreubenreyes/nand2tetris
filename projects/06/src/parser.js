"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var readline_1 = require("readline");
var Command;
(function (Command) {
    Command[Command["A_COMMAND"] = 0] = "A_COMMAND";
    Command[Command["C_COMMAND"] = 1] = "C_COMMAND";
    Command[Command["L_COMMAND"] = 2] = "L_COMMAND"; // syntax: (symbol)
})(Command || (Command = {}));
var Parser = /** @class */ (function () {
    function Parser(_a) {
        var sourceFile = _a.sourceFile;
        var filename = sourceFile.split(".asm")[0]; // include upper-level dirnames
        var input = fs_1.createReadStream(sourceFile);
        var output = fs_1.createWriteStream(filename + ".hack");
        this._source = readline_1.createInterface({
            input: input,
            output: output
        });
        this._source.on("line", function (line) {
            // call commandType()
        });
        this._currentLine = 0;
    }
    Parser.prototype.commandType = function (command) {
        // parse command and determine commandType
        var A = /(^@[A-Za-z0-9]+$)|(^@[0-9]+$)/;
        var C = /^([A-Z]+)=?([A-Z]);?/;
        var L = /^(?<![0-9])[A-Z\$\.:]+$/;
        if (A.test(command)) {
            // parse and output A-instruction
            // call symbol()
        }
        else if (C.test(command)) {
            // parse and output C-instruction
            // call dest()
            // call comp()
            // call jump()
        }
        else if (L.test(command)) {
            // add symbol to symbol table
            // call symbol()
        }
        else {
            console.error("Error: Invalid command at line " + this._currentLine);
        }
        // return the symbol 
    };
    Parser.prototype.symbol = function () {
        // TODO: implement symbol()
        return "please don't yell at me mr. compiler i still have to do this one";
    };
    Parser.prototype.dest = function () {
        // TODO: implement dest()
        return "please don't yell at me mr. compiler i still have to do this one";
    };
    Parser.prototype.comp = function () {
        // TODO: implement comp()
        return "please don't yell at me mr. compiler i still have to do this one";
    };
    Parser.prototype.jump = function () {
        // TODO: implement jump()
        return "please don't yell at me mr. compiler i still have to do this one";
    };
    return Parser;
}());
exports["default"] = Parser;
