import mongooose from "mongoose";


const TransactionSchema = new mongooose.Schema(
    {
        userId:String,
        cost:Number,
        products:{
            type:[mongooose.Types.ObjectId],
            of:Number,

        },
        // products:[String]
    },
    {timestamps:true}
)

const Transaction = mongooose.model("Transaction",TransactionSchema);
export default Transaction;