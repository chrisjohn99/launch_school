function minilang(str) {
  let values = {
    register: 0,
    stack: [],
  };
  str.split(" ").forEach((word) => {
    switch (word) {
      case "PRINT":
        console.log(values.register);
        break;
      case "PUSH":
        values.stack.push(values.register);
        break;
      case "MULT":
        values.register = Number(values.register * values.stack.pop());
        break;
      case "ADD":
        values.register = Number(values.register + values.stack.pop());
        break;
      case "SUB":
        values.register = Number(values.register - values.stack.pop());
        break;
      case "POP":
        values.register = Number(values.stack.pop());
        break;
      case "DIV":
        values.register = parseInt(values.register / values.stack.pop());
        break;
      case "REMAINDER":
        values.register = Number(values.register % values.stack.pop());
        break;
      default:
        values.register = Number(word);
    }
  });
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
