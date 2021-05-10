const express = require("express");
const Pizza = require("../models/pizza");
const router = express.Router();

// GET = SELECT * 
// GET method without parameters
router.get("/", async  (req, res) => {
   try{
       //Asynchronus methods
       let pizza = await Pizza
       .find({availability: true})
       .sort({name: "asc"})
       .select({ name: 1, details: 1, price: 1, imageUrl: 1 });
       res.send(pizza);
    }catch(err){
        return res.status(500).send("Error :", err.message)
    }
});

// GET method with parameters
router.get("/:id", async (req, res) => {
    //send avenger details for the requested id
    let requestedID = req.params.id;
    let pizza = await Pizza.findById(requestedID);
    if(!pizza){
        return res
           .status(400)
           .send("Avenger you are looking for does not exist on the MCU ");
    }
    return res
       .status(200)
       .send(pizza);
});

// PUT =  UPDATE
// PUT method 
router.put("/:id", async (req, res) => {
    let requestedID = req.params.id;
    let pizza = await Pizza.findById(requestedID);
    
    if(!pizza){
        return res
           .status(400)
           .send("Avenger you are looking tp update does not exist on the MCU ");
    }
    try{
        pizza.set({
            price: req.body.price,
            availability: req.body.availability,
            imageUrl: req.body.imageUrl,
            details: req.body.details,
            size: req.body.size
        });
        pizza = await pizza.save();
        return res.send(pizza);
        }
    catch(err){
            return res.send(err.message).status(500);
        }
   
});

// POST = INSERT
// POST Method
router.post("/", async (req, res) => {
    if(!req.body.name){
        return res
        .status(400)
        .send("Why you no send all the values in the request?");
    } 
    let newPizza = new Pizza({
        name: req.body.name,
        ingredients: req.body.ingredients,
        size: req.body.size,
        price: req.body.price,
        availability: req.body.availability,
        imageUrl: req.body.imageUrl,
        details: req.body.details,
    });
    try{
        newPizza = await newPizza.save();
        return res.send(newPizza);
    }
    catch(err){
        return res.send(err.message).status(500);
    } 
});

// DELETE = DELETE
// DELETE Method
router.post("/:id", async (req, res) => {
   let pizza = pizzaArray.find((b) => b.id == req.params.id);
   if(!pizza){
       res.status(404).send("The pizza you request does not exist on or MCU");
       return;
   }
});

module.exports = router;