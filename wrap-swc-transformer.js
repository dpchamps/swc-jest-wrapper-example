const { createTransformer: createSwcTransformer } = require("@swc/jest");

const FILE_LEVEL_IGNORE = "\n/* istanbul ignore file */";
const istanbulFileLevelMatcher = /(istanbul ignore) (?!.*(next|branch|if|else))/gm;
/**
 * search the contents of the file for a file-level istanbul-ignore
 * e.g. `istanbul ignore file`
 * if found, append the ignore text to the bottom of the file
 **/
const wrapTransformer = (swcOptions) => {
    const swcTransformer = createSwcTransformer(swcOptions);
    return {
        ...swcTransformer,
        process: (src, filename, jestOptions) => {
            const result = swcTransformer.process(src, filename, jestOptions);
            if( src.match(istanbulFileLevelMatcher) ){
                result.code += FILE_LEVEL_IGNORE;
                console.log(result.code)
            }

            return result;
        },
    };
};

module.exports = {
    createTransformer: wrapTransformer
}