// method overridden
const { readFile, writeFile } = require("fs");

console.log("start");
readFile(
  "./01-node-tutorial/content/first.txt" /**path/url */,
  "utf8" /**parameters/options */,
  /**callback function */ (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const first = result;
    readFile("./01-node-tutorial/content/second.txt", "utf8", (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      const second = result;
      writeFile(
        "./01-node-tutorial/content/result-async.txt",
        `Here is the result : ${first}, ${second}`,
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("done with this task");
        }
      );
    });
  }
);
console.log("starting next task");
