require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();


const connectDb = require("./util/db");
const errorMiddlwere = require("./middlewere/error-middlware");

const authRoute = require("./Router/auth-route");
const contactRoute = require("./Router/contact-route");
const serviceRoute = require('./Router/service-router');
const adminRoute = require('./Router/admin-router')

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
    credentials:true,
  })
);

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin",adminRoute)

app.use(errorMiddlwere);
const PORT = 5000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port:${PORT}`);
  });
});
