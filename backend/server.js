import exp from "express";
import { config } from "dotenv";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authApp } from "./APIs/authAPI.js";
import { customerApp } from "./APIs/customerAPI.js";
import { transactionApp } from "./APIs/transactionAPI.js";
import { analyticsApp } from "./APIs/analyticsAPI.js";
import { reminderApp } from "./APIs/reminderAPI.js";
config();
const app = exp();
// Cors
app.use(cors({
        origin: ["http://localhost:5173"],
        credentials: true,
        })
);
// Middleware
app.use(cookieParser());
app.use(exp.json());
// Routes
app.use("/auth", authApp);
app.use("/customers", customerApp);
app.use("/transactions", transactionApp);
app.use("/analytics", analyticsApp);
app.use("/reminder",reminderApp);
// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
    message: "Digital Udhaar Khata API Running",
    });
});
// Database Connection
const connectDB = async () => {
try {
    await connect(process.env.DB_URL);
    console.log("DB server connected");
    const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server listening on ${port}..`);
});
} 
catch (err) {
    console.log("err in db connect", err);
}
};
connectDB();
// Invalid Route Handler
app.use((req, res) => {
    res.status(404).json({
    message: `path ${req.url} is invalid`,
    });
});
// Error Handler
app.use((err, req, res, next) => {
console.log("error is", err);
if (err.name === "ValidationError") {
return res.status(400).json({
message: "error occurred",
error: err.message,
});
}
if (err.name === "CastError") {
return res.status(400).json({
message: "error occurred",
error: err.message,
});
}
const errCode =
err.code ??
err.cause?.code ??
err.errorResponse?.code;

const keyValue =
err.keyValue ??
err.cause?.keyValue ??
err.errorResponse?.keyValue;

if (errCode === 11000) {
const field = Object.keys(keyValue)[0];
const value = keyValue[field];

return res.status(409).json({
  message: "error occurred",
  error: `${field} "${value}" already exists`,
});

}
res.status(500).json({
message: "error occurred",
error: "Server side error",
});
});
