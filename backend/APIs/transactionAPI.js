import exp from "express";
import { TransactionModel } from "../models/TransactionModel.js";
import { CustomerModel } from "../models/CustomerModel.js";
import { verifyToken } from "../middleware/verifyToken.js";
export const transactionApp = exp.Router();

// Add a Transaction
transactionApp.post("/add-transaction",verifyToken,async (req, res) => {
try {
  const {customerId,amount,type,note,paymentMethod,} = req.body;
  const customer =await CustomerModel.findById(customerId);
  if (!customer) {
    return res.status(404).json({
      message:
        "Customer Not Found",
    });
  }
  const transaction =await TransactionModel.create({customerId,userId: req.userId,amount,type,note,paymentMethod,});
  if (type === "credit") {
    customer.balance += Number(amount);
  }

  if (type === "debit") {
    customer.balance -= Number(amount);
  }
  await customer.save();
  res.status(201).json({
    message:
      "Transaction Added",
    payload:
      transaction,
  });
} 
catch (err) {
  res.status(500).json({
    message:
      err.message,
  });
}
});

// Get all Transactions
transactionApp.get("/all-transactions",verifyToken,async (req, res) => {
try {
  const transactions =await TransactionModel.find({userId: req.userId,}).populate("customerId").sort({createdAt: -1,});
  res.status(200).json({
    payload:
      transactions,
  });
}
catch (err) {

  res.status(500).json({
    message:
      err.message,
});
}
});

// Get Customer Transactions

transactionApp.get("/customer-transactions/:id",verifyToken,async (req, res) => {
try {

  const transactions =await TransactionModel.find({customerId:req.params.id,}).sort({createdAt: -1,});
  res.status(200).json({
    payload:
      transactions,
  });
} 
catch (err) {
  res.status(500).json({
    message:
      err.message,
  });
}
});

// Delete a Transation
transactionApp.delete("/delete-transaction/:id",verifyToken,async (req, res) => {
try {
    const transaction =await TransactionModel.findById(req.params.id);
  if (!transaction) {
    return res.status(404).json({
      message:
        "Transaction Not Found",
    });
  }
  const customer =await CustomerModel.findById(transaction.customerId);
  if (transaction.type ==="credit") 
  {
    customer.balance -=transaction.amount;
  }
  if (transaction.type ==="debit") 
  {
    customer.balance +=transaction.amount;
  }
  await customer.save();
  await TransactionModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message:
      "Transaction Deleted",
  });
} 
catch (err) {
  res.status(500).json({
    message:err.message,
  });
}
});