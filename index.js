const fs = require("fs");

// Blocking synchronousy way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log(textIn);

// Non-Blocking asynchronouse way
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.error(err.message);
  console.log(data1);
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) return console.error(err.message);
    console.log(data2);
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      if (err) return console.error(err.message);
      console.log(data3);
      fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, "utf-8", (err) => {
        if (err) return console.error(err.message);
      });
    });
  });
});

console.log("will read file.");
