"use strict";

const express = require('express');
const pg = require('pg');
const cartItemsPage = require("./cartItemsPage.js");
const app = express();
app.use(express.json());

app.use("/",cartItemsPage);
app.use(express.static("./public")); // allows access to public directory which has front-end business
const port = 3000;
// runs the server
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));