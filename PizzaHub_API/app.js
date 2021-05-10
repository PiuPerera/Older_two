const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const customeMiddleware_01 = require("./middlewear/customeMiddleware_01");
const customeMiddleware_02 = require("./middlewear/customeMiddleware_02");
const pizzas = require("./routes/pizzas");
const home = require("./routes/home");
const Pizza = require("./routes/adminpizza");
const app = express();
const PORT = 5000;

mongoose.connect("mongodb://localhost/pizzahub", { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to DB succesfully..."))
.catch(err => console.log("Can not connect to DB error :", err));

app.use(express.json());

app.use(cors());
app.use(customeMiddleware_01);
app.use(customeMiddleware_02);
app.use("/", home);
app.use("/api/pizzahub/products",pizzas);
app.use("/api/adminpizza",Pizza);



app.listen(PORT, () => {
    console.log("Started listning on port :"+PORT);
});