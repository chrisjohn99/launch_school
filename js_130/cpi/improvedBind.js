"use strict";
let obj = {};
function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  };
}

let newFunc = myBind(function () {
  this.foo = "bar";
}, obj);

newFunc();
console.log(obj);

