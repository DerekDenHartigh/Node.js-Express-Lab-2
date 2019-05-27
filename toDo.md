FULL­STACK EXPRESS LAB PART 2

Task: Create a database for your shopping cart. Build out the front end functionality. What does the application do?

    1. The application will now have a consistent database to hold and retrieve information from, allowing the user to keep their shopping cart.

    2. The Angular application will allow users to add items, remove items, and update the quantity of an item.

Build Specifications:

Server Side:

1. In pgAdmin, create a database called “ExpressShopDB” and a table called “ShoppingCart”. The table will have columns: id, product, price, and quantity.

    2. Add the JavaScript with pg-node that will contain all of the information allowing the server to communicate with the database.

    3. Adjust your GET, POST, PUT, and DELETE requests in your routes module to include the appropriate queries for each of the four requests.

    4. Test your endpoints with Postman to make sure the routing is set up.

Client (Angular) Side:

    5. Update the CartService to call all four of your API endpoints. Add the methods addItem(item), removeItem(id), and updateItem(item).

    6. Expand the UI to handle each of these new operations.
        a. Submit the form to add an item.
        b. Click the “x” to remove an item.
        c. Change the quantity.