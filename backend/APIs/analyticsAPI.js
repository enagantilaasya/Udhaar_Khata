import exp from "express";
import { CustomerModel } from "../models/CustomerModel.js";
import { TransactionModel } from "../models/TransactionModel.js";
import { UserModel } from "../models/UserModel.js";
import { verifyToken } from "../middleware/verifyToken.js";

export const analyticsApp = exp.Router();

analyticsApp.get("/dashboard",verifyToken,async (req, res) => {
    try {
      const user = await UserModel.findById(req.userId).select("-password");
      const customers =await CustomerModel.find({userId: req.userId,});
      const transactions =await TransactionModel.find({userId: req.userId,});
      const totalCustomers =customers.length;
      const totalTransactions =transactions.length;
      const totalCredit =transactions.filter(
            (item) =>
              item.type === "credit"
          )
          .reduce(
            (sum, item) =>
              sum + item.amount,
            0
          );
      const totalDebit =transactions.filter(
            (item) =>
              item.type === "debit"
          )
          .reduce(
            (sum, item) =>
              sum + item.amount,
            0
          );

      const totalPendingAmount =customers.filter(
            (customer) =>
              customer.balance < 0
          )
          .reduce(
            (sum, customer) =>
              sum +
              Math.abs(
                customer.balance
              ),
            0
          );
      res.status(200).json({
        payload: {
          user,
          totalCustomers,
          totalTransactions,
          totalPendingAmount,
          totalCredit,
          totalDebit,
        },
      });
    } catch (err) {

      res.status(500).json({
        message:
          err.message,
      });
    }
  }
);