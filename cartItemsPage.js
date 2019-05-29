"use strict";
const express = require("express");
const cartItems = require("./cart-items"); //not using cart-items.js but the postgreSQL DB
// const cartItems = require("pg"); //?
const cartItemsPage = express.Router();  // Router has to be capital

const pg = require('pg');
const pool = new pg.Pool({
    user: "postgres",
    password: "NoneOfYoBidness",
    host: "localhost",
    port: 5432,
    database: "ExpressShopDB",
    ssl: false
});

// an error listener to log my errors and maybe keep my code from crashing?
pool.on('error', (err) => {
    console.error('An idle client has experienced an error', err.stack)
  })


cartItemsPage.get("/cartItemsPage", (req, res) => {
    pool.query('SELECT * FROM shopping_cart ORDER BY item_id;')
        .then((result)=>{
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error)=>{
            console.error(error);
        });
    });

// accept POST request at URI: /cartItemsPage
cartItemsPage.post("/cartItemsPage", (req, res) => {
    let cartData = req.body;
    let sql = "INSERT INTO shopping_cart(price, product, quantity) " + "VALUES ($1::numeric, $2::char(20), $3::int)";
    let values = [cartData.price, cartData.product, cartData.quantity];
    // res.send("adding item to cart"); // can't send then later modify headers (like setting 201 status)
    console.log(req.body);
        pool.query(sql, values).then((result) => {
            res.status(201); // 201 Created
            res.send("item added successfully!");
            });
    });

// accept PUT request at URI: /cartItemsPage
// cartItemsPage.put("/cartItemsPage/:id", (req, res) => {
//     // console.log(req);
//     console.log(req.params.id, req.body);
//     let sql = `UPDATE shopping_cart SET quantity = ${req.body} WHERE item_id=${req.params.id};`;
//     // let values = [req.body, req.params.id];
    
//     pool.query(sql)
//     .then((result)=>{
//         console.log("updated item quantity");
//         res.status(204);
//         res.send("updated item quantity");
//     })
//     .catch((error)=>{
//         console.error(error);
//     });
//     });


cartItemsPage.put("/cartItemsPage/", (req, res) => {
    // console.log(req);
    console.log(req.body.item_id, req.body.quantity);
    let sql = `UPDATE shopping_cart SET quantity = ${req.body.quantity} WHERE item_id=${req.body.item_id};`;
    // let values = [req.body, req.params.id];
    
    pool.query(sql)
    .then((result)=>{
        console.log("updated item quantity");
        res.status(204);
        res.send("updated item quantity");
    })
    .catch((error)=>{
        console.error(error);
    });
    });



// accept DELETE request at URI: /cartItemsPage
cartItemsPage.delete("/cartItemsPage/:id", (req, res) => {
    // res.send("Deleting a cart item");
    // let cartData = req.body;
    console.warn(req.params.id);
    let sql = `DELETE FROM shopping_cart WHERE item_id=${req.params.id}`;
        pool.query(sql)
        .then((result) => {
            res.status(204); // No Content
            res.send(`Deleted item id# ${req.params.id}, refresh cart`);
        });
    });
    
module.exports = cartItemsPage;