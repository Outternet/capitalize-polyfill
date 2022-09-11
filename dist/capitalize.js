"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("capitalize"));
function capitalizeString(opts) {
    if (typeof opts == "object" && opts.wordByWord) {
        return capitalize_1.default.words(this, opts);
    }
    return (0, capitalize_1.default)(this, opts);
}
// for future spec
String.prototype.capitalize = String.prototype.capitalize || capitalizeString;
String.prototype.capitalizeOverride = capitalizeString;
