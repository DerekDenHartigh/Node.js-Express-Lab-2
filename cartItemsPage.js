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
// an error listener to log my errors and maybe keep my code from crashing?
pool.on('error', (err) => {
    console.error('An idle client has experienced an error', err.stack)
  })

// I was trying to generate the database here
let getList = function(){
    pool.query("SELECT * FROM shopping_cart")
    .then((result) => {
        console.warn("from getList() in server.js")
        console.warn(result.rows);
    });
};
getList();


cartItemsPage.get("/cartItemsPage", (req, res) => {
    // res.writeHead(200, {'content-type': "application/json"})
    //console.log("\n\nhere are the items in your cart:")
    //console.log(cartItems);  // for the console log - lists items in cart-items.js
    //res.send(cartItems); // this corresponds to the data being getted (gotten from the $http.get())
    pool.query('SELECT * FROM shopping_cart;').then((error, result)=>{
        if (error) {
            throw error;
        }
        console.log(result.rows);
        res.send(result.rows);
    })
    });

// accept POST request at URI: /cartItemsPage
cartItemsPage.post("/cartItemsPage", (req, res) => {
    res.send("adding item to cart");
    console.log(req.body);
    // console.log(req.body.product, req.body.price, req.body.quantity);
    // pool.query('INSERT INTO ExpressShopDB (product, price, quantity) VALUES (req.body.product, req.body.price, req.body.quantity)', (error, results) => {
    // pool.query('INSERT INTO ExpressShopDB (product, price, quantity) VALUES ($1, $2, $3)', [req.body.product, req.body.price, req.body.quantity], (error, results) => {
        pool.query(`INSERT INTO shopping_cart (product, price, quantity) VALUES (${req.body.product}, ${req.body.price}, ${req.body.quantity});`, (error, result) => {
        if (error) {
          throw error;
        }
        result.status(201).send(`Added item to cart`); // my adaptation
        // response.status(201).send(`User added with ID: ${result.insertId}`) // from the blog
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