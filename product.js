const mongoose = require("mongoose");

main().catch((err) => console.error(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/shopApp");
  console.log("Connection success!");
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

const pizzaPan = new Product({
  name: "Pizza Pan",
  price: -20,
});

pizzaPan
  .save()
  .then((data) => {
    console.log("It worked.");
    console.log(data);
  })
  .catch((err) => {
    "It panicked!";
    console.error(err);
  });

console.log(pizzaPan);
