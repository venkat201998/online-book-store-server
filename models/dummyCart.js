const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const dummyCartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        title: String,
        price: Number,
        brand: String,
        color: String,
        count: Number,
        shipping: String,
        images: Array,   
        
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    orderdBy: { type: ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("DummyCart", dummyCartSchema);
