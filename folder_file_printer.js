"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const dir = "./folder1";
function printer(file_path, space = 0) {
    let list = fs_1.default.readdirSync(file_path);
    // console.log(list);
    list.forEach((file) => {
        let filePath = file_path + '/' + file;
        const stat = fs_1.default.statSync(filePath);
        if (stat && stat.isDirectory()) {
            console.log(" ".repeat(space) + file);
            printer(filePath, space + 5);
        }
        else {
            console.log(" ".repeat(space) + file);
        }
    });
}
printer(dir);
