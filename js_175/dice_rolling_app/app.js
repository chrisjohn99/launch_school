const HTTP = require("http");
const URL = require("url").URL;
const PORT = 3000;

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  const myURL = new URL(path, "http://my-website");
  let params = myURL.searchParams;
  let rolls = params.get("rolls");
  let sides = params.get("sides");

  function logRolls(sides, rolls, res) {
    for (let i = 0; i < rolls; i++) {
      console.log(`${Math.ceil(Math.random() * sides)}\n`);
      res.write(`${Math.ceil(Math.random() * sides)}\n`);
    }
  }

  if (path === "/favicon.ico") {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    logRolls(sides, rolls, res);
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
