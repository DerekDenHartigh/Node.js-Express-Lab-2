"use strict";
const express = require("express");
const cartItems = require("./cart-items"); //not using cart-items.js but the postgreSQL DB
// const cartItems = require("pg"); //?
const cartItemsPage = express.Router();  // Router has to be capital

const pg = require('pg');
const pool = new pg.Pool({
    user: "postgres",
    password: "polonium84",
    host: "localhost",
    port: 3000,
    database: "ExpressShopDB",
    ssl: false
});

let getList = function(){
    pool.query("SELECT * FROM shopping_cart")
    .then((result) => {
        console.warn("from getList in server.js")
        console.warn(result.rows);
        ctrl.cartItems = result.rows;
    });
}
getList();


cartItemsPage.get("/cartItemsPage", (req, res) => {
    // res.writeHead(200, {'content-type': "application/json"})
    console.log("here are the items in your cart:\n")
    res.send(cartItems); // this corresponds to the data being getted (gotten from the $http.get())
    });

// accept POST request at URI: /cartItemsPage
cartItemsPage.post("/cartItemsPage", (req, res) => {
    res.send("adding item to cart");
    console.log(req.body);


    pool.query('INSERT INTO ExpressShopDB (product, price, quantity) VALUES (req.body.product, req.body.price, req.body.quantity)', (error, results) => {
        if (error) {
          throw error
        }
        response.status(201).send(`Added item ID: ${res.id}, ${res.quantity} ${res.product} costing ${res.price}`)
      })


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