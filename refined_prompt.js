/**
 * Converts a given string to dot.case (lowercase words separated by dots).
 *
 * The function performs the following transformations:
 * 1. Converts camelCase or PascalCase to dot.case by inserting dots between lowercase and uppercase letter boundaries.
 * 2. Replaces spaces, underscores, and hyphens with dots.
 * 3. Collapses multiple consecutive dots into a single dot.
 * 4. Converts the entire string to lowercase.
 * 5. Removes any leading or trailing dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in dot.case format.
 *
 * @example
 * toDotCase('HelloWorld Example_string-test');
 * // Returns: 'hello.world.example.string.test'
 *
 * @example
 * toDotCase('myVariableName');
 * // Returns: 'my.variable.name'
 */
function toDotCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1.$2') // camelCase to camel.Case
        .replace(/[\s_-]+/g, '.')            // spaces, underscores, hyphens to dots
        .replace(/\.+/g, '.')                // multiple dots to single dot
        .toLowerCase()
        .replace(/^\./, '')                  // remove leading dot
        .replace(/\.$/, '');                 // remove trailing dot
}

// Example usage:
// console.log(toDotCase('HelloWorld Example_string-test')); // hello.world.example.string.test
/**
 * Converts a given string to kebab-case.
 *
 * The function performs the following transformations:
 * 1. Converts camelCase or PascalCase to kebab-case by inserting hyphens between lowercase and uppercase letter boundaries.
 * 2. Replaces spaces with hyphens.
 * 3. Collapses multiple consecutive hyphens into a single hyphen.
 * 4. Converts the entire string to lowercase.
 * 5. Removes any leading or trailing hyphens.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The converted string in kebab-case format.
 *
 * @example
 * toKebabCase('HelloWorld Example_string-test');
 * // Returns: 'hello-world-example_string-test'
 *
 * @example
 * toKebabCase('myVariableName');
 * // Returns: 'my-variable-name'
 */
function toKebabCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase to camel-Case
        .replace(/[\s]+/g, '-')              // spaces to hyphens
        .replace(/-+/g, '-')                 // multiple hyphens to single hyphen
        .toLowerCase()
        .replace(/^-/, '')                   // remove leading hyphen
        .replace(/-$/, '');                  // remove trailing hyphen
}

// Example usage:
// console.log(toKebabCase('HelloWorld Example_string-test')); // hello-world-example_string-test
// console.log(toKebabCase('myVariableName')); // my-variable-name
// console.log(toKebabCase('my New String')); // my-new-string
// console.log(toKebabCase('another--string')); // another-string