const fs = require("fs");
const path = require("path");
const flowCopySource = require("flow-copy-source");

flowCopySource(
  [path.resolve(__dirname, "..", "src")],
  path.resolve(__dirname, "..", "dist"),
  { verbose: true }
)
  .then(files => files.map(removeCssImports))
  .then(promises => Promise.all(promises));

function removeCssImports({ dest }) {
  return new Promise((resolve, reject) => {
    fs.readFile(dest, "utf8", (err, content) => {
      if (err) return reject(err);
      fs.writeFile(dest, content.replace(/import .*.css\W+/g, ""), err => {
        if (err) reject(err);
        resolve(true);
      });
    });
  });
}
