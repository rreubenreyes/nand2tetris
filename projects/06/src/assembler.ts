import Parser from './parser'

switch (process.argv.length) {
    case 2:
        process.exit(-1)
    default:
        console.log(`Usage: Assembler <sourcefile.asm>`)
        break
}

const sourceFile: string = process.argv[1]
const parser = new Parser({ sourceFile })

