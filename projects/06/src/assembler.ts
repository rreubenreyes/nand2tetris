import Parser from 'Parser'

switch (process.argv.length) {
    case 2:
        process.exit(-1)
    default:
        console.log(`Usage: Assembler <sourcefile.asm>`)
        break
}

const input: string = argv[1]
const parser = new Parser({ input })

