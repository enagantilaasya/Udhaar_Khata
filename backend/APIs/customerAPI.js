import exp from "express";
import { CustomerModel } from "../models/CustomerModel.js";
import { verifyToken } from "../middleware/verifyToken.js";
export const customerApp = exp.Router();
// add customer
customerApp.post("/add-customer",verifyToken,async (req, res) => {
try {
  const customer =await CustomerModel.create({...req.body,userId: req.userId,});
  res.status(201).json({
    message: "Customer Added",
    payload: customer,
  });
} 
catch (err) {
  res.status(500).json({
    message: err.message,
  });
}
});

// get all the customer 
customerApp.get("/all-customers",verifyToken,async (req, res) => {
try {
  const customers = await CustomerModel.find({userId: req.userId,}).sort({createdAt: -1,});
  res.status(200).json({
    payload: customers,
  });
} 
catch (err) {

  res.status(500).json({
    message: err.message,
  });
}
});
// get one customer
customerApp.get("/customer/:id",verifyToken,async (req, res) => {
try {
  const customer =await CustomerModel.findById(req.params.id);
  if (!customer) {
    return res.status(404).json({
      message:
        "Customer Not Found",
    });
  }
  res.status(200).json({
    payload: customer,
  });
} 
catch (err) {
  res.status(500).json({
    message: err.message,
  });

}
});
// delete a customer
customerApp.delete("/delete-customer/:id",verifyToken,async (req, res) => {
try {
  await CustomerModel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    message:
      "Customer Deleted",
  });
} 
catch (err) {
  res.status(500).json({
    message: err.message,
  });

}
});
// give discount 
customerApp.put("/give-discount/:id",verifyToken,async (req, res) => {
    try {
      const {discountPercentage,} = req.body;
      const customer =await CustomerModel.findById(req.params.id);
      if (!customer) {
        return res.status(404).json({
          message:
            "Customer Not Found",
        });
      }
      if (customer.balance >= 0) 
      {
        return res.status(400).json({
          message:
            "Discount can only be given on pending balances",
        });
      }
      const discount =Math
      .round(
        Math.abs(customer.balance) *discountPercentage /100
        );

      customer.balance =customer.balance +discount;
      await customer.save();
      res.status(200).json({
        message:`${discountPercentage}% Discount Applied`,
        discount,
        payload:
          customer,
      });
    } catch (err) {
      res.status(500).json({
        message:
          err.message,
      });
    }
  }
);