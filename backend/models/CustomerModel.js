import {Schema,Types,model} from "mongoose";

const customerSchema = new Schema(
{
        userId: {
                type:Types.ObjectId,
                ref: "User",
                required: true,
            },
        name: 
            {
                type: String,
                required: true,
            },
        phone: 
            {
                type: String,
                required: true,
            },
        address: 
        {
                type: String,
        },
        balance: 
        {
            type: Number,
            default: 0,
        },
},
{
  timestamps: true,
}

);
export const CustomerModel = model("Customer",customerSchema);