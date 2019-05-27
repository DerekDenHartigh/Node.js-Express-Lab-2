"use strict";
const express = require("express");
const cartItems = require("./cart-items");

const cartItemsPage = express.Router();  // Router has to be capital

cartItemsPage.get("/cartItemsPage", (req, res) => {
    // res.writeHead(200, {'content-type': "application/json"})
    console.log("here are the items in your cart:\n")
    res.send(cartItems); // this corresponds to the data being getted (gotten from the $http.get())
    });

// accept POST request at URI: /cartItemsPage
cartItemsPage.post("/cartItemsPage", (req, res) => {
    res.send("adding item to cart");
    console.log(req.body);
    });
// accept PUT request at URI: /cartItemsPage
cartItemsPage.put("/cartItemsPage/:id", (req, res) => {
    res.send("altering cart item");
    console.log(req.params.id, req.body);
    });
// accept DELETE request at URI: /cartItemsPage
cartItemsPage.delete("/cartItemsPage/:id", (req, res) => {
    res.send("Deleting a cart item");
    console.log(req.params.id);
    });
    
module.exports = cartItemsPage;