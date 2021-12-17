const slug = require("slug");

function toSlug(string) {
    return slug(string, '_');
};

function titleCase(string) {
    var splitStr = string.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
};

module.exports = {
    toSlug,
    titleCase
};