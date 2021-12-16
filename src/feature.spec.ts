import {feature, featurePartTwo} from "./feature";

describe("feature", () => {
    it("Tests feature 1", () => {
        expect(feature(1)).toEqual("Hello");
        expect(feature(42)).toEqual("Hello World")
    });

    it("Tests feature 2", () => {
        expect(featurePartTwo("Anything at all")).toEqual("Hello World")
    })
});