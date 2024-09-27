const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movieApp");
  console.log("Connection success!");
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const parasite = new Movie({
  title: "Parasite",
  year: 2019,
  score: 99,
  rating: "R",
});
