import mongooose from "mongoose";


const ProductStatSchema = new mongooose.Schema(
    {
        productId:String,
        yearlySalesTotal:Number,
        yearlyTotalSoldUnits:Number,
        year:Number,
        monthlyData:[
            {
                month:String,
                totalSales:Number,
                totalUnits:Number
            }
        ],
        dailyData:[{
            date:String,
            totalSales:Number,
            totalUnits:Number
        }],
    },
    {timestamps:true}


)

const ProductStat = mongooose.model("ProductStat",ProductStatSchema);
export default ProductStat;