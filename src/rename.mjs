const fs = require("fs").promises;
const path = require("path");
const allowTypes = [
  "lower-camel-case",
  "upper-camel-case",
  "kebab-case",
  "underscore-case",
];
main();

function throwError(msg) {
  console.error("error: %s", msg);
  process.exit(0);
}

function checkRenameType(type) {
  if (allowTypes.every((val) => val != type)) {
    throwError("rename type is in [" + allowTypes.join(", ") + "]");
  }
}

async function main() {
  if (process.argv.length < 3) {
    throwError("need is a path params!");
  }
  if (process.argv.length < 4) {
    throwError("need is a rename type params!");
  }
  const targetDir = process.argv[2];
  const type = process.argv[3] || allowTypes[0];
  checkRenameType(type);
  console.log(targetDir, type);
  const dirs = await fs.readdir(targetDir);

  console.log(dirs);
}
