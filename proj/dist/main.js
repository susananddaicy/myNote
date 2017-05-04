"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeter_1 = require("./greeter");
console.log(greeter_1.sayHello("TypeScript"));
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypeScript");
