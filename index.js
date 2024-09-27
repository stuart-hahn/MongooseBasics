const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("Connection success!");
}
