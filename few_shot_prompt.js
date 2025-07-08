function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Examples:
console.log(toCamelCase('first name'));      // firstName
console.log(toCamelCase('user_id'));         // userId
console.log(toCamelCase('SCREEN_NAME'));     // screenName
console.log(toCamelCase('mobile-number'));   // mobileNumber
console.log(toCamelCase('Last_Name'));       // lastName
console.log(toCamelCase('email address'));   // emailAddress
console.log(toCamelCase('user-name-id'));    // userNameId
console.log(toCamelCase('ZIP_CODE'));        // zipCode
module.exports = toCamelCase;