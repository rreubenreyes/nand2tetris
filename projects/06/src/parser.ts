import { createReadStream } from 'fs'
import { Interface, createInterface } from 'readline'

enum Command {
    A_COMMAND, // syntax: @value
    C_COMMAND, // syntax: dest=comp;jump
    L_COMMAND // syntax: (symbol)
}

interface IParser {
    source: Interface
    build: () => Parser
    currentLine: number
    commandType: (string) => Command | void
    symbol: () => string
    dest: () => string
    comp: () => string
    jump: () => string
}

export default class Parser implements IParser {
    constructor(this: Parser, { sourceFile: string }) {
        const [ filename ]: string = sourceFile.split(`.`)
        const outputFile: WritableStream = `${filename}.hack`
        this.currentLine = 0

        this.source: Interface = createInterface({
            input: sourceFile,
            output: outputFile,
        })
        
        this.source.on(`line`, (line: string) => {
            // call commandType()
        })
    }

    commandType(command: string): Command | void {
        // parse command and determine commandType
        const A: RegExp = /^@[A-Za-z0-9]+$/
        const C: RegExp = /^([A-Z]+)=?([A-Z]);?/
        const L: RegExp = /^(?<![0-9])[A-Z\$\.:]+$/
            
        if (A.test(command)) {
            // parse and output A-instruction
            // call symbol()
        } else if (C.test(command)) {
            // parse and output C-instruction
            // call dest()
            // call comp()
            // call jump()
            
        } else if (L.test(command)) {
            // add symbol to symbol table
            // call symbol()
            
        } else {
            console.error(`Error: Invalid command at line ${this.currentLine}`)
        }
        // return the symbol 
    }

    symbol(): string {
        // TODO: implement symbol()
    }

    dest(): string {
        // TODO: implement dest()
    }

    comp(): string {
        // TODO: implement comp()
    }

    jump(): string {
        // TODO: implement jump()
    }
}
