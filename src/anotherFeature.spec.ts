import {doesSomethingNeedlesslyBranchy} from "./anotherFeature";

describe("anotherFeature", () => {
    it("Does something weird", () => {
        expect(doesSomethingNeedlesslyBranchy("hello")).toEqual(":shrug:");
    })
})