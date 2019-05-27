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

const cartItemsPage = require("./cartItemsPage.js");
const app = express();
app.use(express.json());

app.use("/",cartItemsPage);
app.use(express.static("./public")); // allows access to public directory which has front-end business
const port = 3000;
// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));