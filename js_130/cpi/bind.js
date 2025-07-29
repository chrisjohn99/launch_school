"use strict";
let obj = {};
function myBind(func, context) {
  return function () {
    return func.call(context);
  };
}

let newFunc = myBind(function () {
  this.foo = "bar";
}, obj);

newFunc();
console.log(obj);
