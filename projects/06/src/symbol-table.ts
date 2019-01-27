interface SymbolTable {
    addEntry: (string, number) => void
    contains: (string) => boolean
    getAddress: (string) => number
}

export default (): SymbolTable => ({
    addEntry(symbol: string, address: number): void {
        // TODO
    }
    contains(symbol: string): boolean {
        // TODO
    }
    getAddress(symbol: string): number {
        // TODO
    }
})
