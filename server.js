"use strict";

const express = require('express');

const pg = require('pg');

const pool = new pg.Pool({
    user: "postgres",
    password: "polonium84",
    host: "localhost",
    port: 3000,
    database: "postgres",
    ssl: false
});

// pool is defined here, but... IDK what I'm doing w/ this tbh,
// I'm trying to query the db for the whole table, then... I want to return the table for use by front-end but.. how?
let getList = function(){
    pool.query("SELECT * FROM shopping_cart")
    .then((result) => {
        console.log(result.rows);
        ctrl.cartItems = result.rows;
    });
}

getList();

const cartItemsPage = require("./cartItemsPage.js");
const app = express();
app.use(express.json());

app.use("/",cartItemsPage);
app.use(express.static("./public")); // allows access to public directory which has front-end business
const port = 3000;
// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));