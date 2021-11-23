const { readFileSync, writeFileSync } = require("fs");
// const { myReadSync, myWriteSync } = require("fs");
console.log("start");
const myfirstfile = readFileSync("./01-node-tutorial/content/dir.txt", "utf8");
const first = readFileSync("./01-node-tutorial/content/first.txt", "utf8");
const second = readFileSync("./01-node-tutorial/content/second.txt", "utf8");

const testFolder = "./01-node-tutorial/";
const fs = require("fs");

// to write contents of directory into file
//definition: fs.readdir(path [,options],callback){}
// path=string/buffer/url
// options=string/object
fs.readdir(
  testFolder,
  (err, files) => {
    files.forEach((file) => {
      // console.log(file);
      writeFileSync("./01-node-tutorial/content/dir.txt", `${file}\n`, {
        flag: "a",
      });
    });
  },
  console.log("A Callback")
);

writeFileSync(
  "./01-node-tutorial/content/result-sync.txt",
  `Here is the result : ${first}, ${second} ");
  }}`,
  { flag: "a" }
);
console.log("done with this task");
console.log("starting the next one");
