const fs = require("fs");

// BLOCKING CODE
// READ/WRITE FILES SYNCHRONOUSLY
const syncFile = fs.readFileSync("./txt/synchronously.txt", "utf-8");
const text = "string format";
fs.writeFileSync("./txt/writeToSyncFile.txt", text);

// NON-BLOCKING CODE
// READ/WRITE FILES ASYNCHRONOUSLY
fs.readFile("./txt/asynchronously.txt", "utf-8", (err, data1) => {
  fs.readFile("./txt/synchronously.txt", "utf-8", (err, data2) => {
    console.log(data1);
    fs.writeFile("./txt/writeTofile.txt", `${data1} + ${data2}`, (err) => {
      if (err) throw err;
      console.log("The file got contents!");
    });
  });
});
