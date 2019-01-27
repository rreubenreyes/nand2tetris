import { ReadStream, WriteStream, createReadStream, createWriteStream } from 'fs'
import { Interface, createInterface } from 'readline'

enum Command {
    A_COMMAND, // syntax: @value
    C_COMMAND, // syntax: dest=comp;jump
    L_COMMAND // syntax: (symbol)
}

interface IParser {
    commandType: (string) => Command | void
    symbol: () => string
    dest: () => string
    comp: () => string
    jump: () => string
}

export default class Parser implements IParser {
    private _source: Interface
    private _currentLine: number

    constructor({ sourceFile }: { sourceFile: string }) {
        const [ filename ]: string[] = sourceFile.split(`.asm`) // include upper-level dirnames
        const input: ReadStream = createReadStream(sourceFile)
        const output: WriteStream = createWriteStream(`${filename}.hack`)

        this._source = createInterface({
            input,
            output,
        })

        this._source.on(`line`, (line: string) => {
            // call commandType()
        })

        this._currentLine = 0
    }

    commandType(this: Parser, command: string): Command | void {
        // parse command and determine commandType
        const A: RegExp = /(^@[A-Za-z0-9]+$)|(^@[0-9]+$)/
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
            console.error(`Error: Invalid command at line ${this._currentLine}`)
        }
        // return the symbol 
    }

    symbol(): string {
        // TODO: implement symbol()
        return `please don't yell at me mr. compiler i still have to do this one`
    }

    dest(): string {
        // TODO: implement dest()
        return `please don't yell at me mr. compiler i still have to do this one`
    }

    comp(): string {
        // TODO: implement comp()
        return `please don't yell at me mr. compiler i still have to do this one`
    }

    jump(): string {
        // TODO: implement jump()
        return `please don't yell at me mr. compiler i still have to do this one`
    }
}
