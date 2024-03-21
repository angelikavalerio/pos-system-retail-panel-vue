export type Product = {
  productID: Number,
  productName: String,
  productImage?: String,
  productGroup: "Meals" | "Burgers" | "Sides" | "Drinks",
  productPrice: Number,
  stockNumber: Number
}