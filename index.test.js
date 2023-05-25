"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexfortest_1 = __importDefault(require("./indexfortest"));
test('add function returns the expected value', () => {
    expect((0, indexfortest_1.default)(1, 2)).toBe(3);
});
