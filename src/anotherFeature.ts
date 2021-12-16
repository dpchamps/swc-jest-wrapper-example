/* istanbul ignore reason: tests, who needs em! */
type ImNotUsed = ":)"

export const doesSomethingNeedlesslyBranchy = (input:string) => {
    if(input === "0" || input === "1") {
            return "we did it!"
    } else if(input === "2" || input === "3"){
            throw new Error("we failed.")
    }
    return ":shrug:"
}