import {Schema,Types,model} from "mongoose";

const transactionSchema = new Schema({
        customerId: {
            type:Types.ObjectId,
            ref: "Customer",
            required: true,
        },
        userId: {
            type:Types.ObjectId,
            ref: "User",
            required: true,
        },
        type: {
            type: String,
            enum: ["credit","debit",],
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        note: {
            type: String,
        },
        paymentMethod: {
            type: String,
            enum: ["cash","card","gpay","phonepe","paytm",],
            default: "cash",
        },
},
{
  timestamps: true,
}
);
export const TransactionModel =model("Transaction",transactionSchema);
