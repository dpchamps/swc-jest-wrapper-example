export const feature = (input: number) => {
    if(input === 1) return "Hello";

    /* istanbul ignore if */
    if(input === 2) return "World";
    /* istanbul ignore else */
    else if(input === 3) {
        /* istanbul ignore next */
        throw new Error("Anything but 3!");
    }

    return "Hello World";
}

export const featurePartTwo = (input: string) => {
    if(input === "1") return "Hello";
    if(input === "2") return "World";

    return "Hello World";
}