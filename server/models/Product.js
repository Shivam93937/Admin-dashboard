import mongooose from "mongoose";


const ProductSchema = new mongooose.Schema(
    {
        name:String,
        price:Number,
        description:String,
        category:String,
        rating:Number,
        supply:Number,
    },
    {timestamps:true}


)

const Product = mongooose.model("Product",ProductSchema);
export default Product;