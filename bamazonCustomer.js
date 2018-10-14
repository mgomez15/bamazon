var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    showProducts();
});

function showProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.table(res)
        selectProduct(res)
    })
}

function selectProduct(inventory) {
    inquirer.prompt([{
        name: "productId",
        type: "input",
        message: "What is ID of the product you would like to purchase"
    }]).then(function (input) {
        var product = getItem(input.productId, inventory)
        selectQuantity(product);
    })

}

function selectQuantity(product) {
    console.log(product)
    inquirer.prompt([{
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
    }]).then(function (input) {
        connection.query("UPDATE products SET stock_quantity = stock_quantity -? WHERE item_ID =?",
            [input.quantity, product.item_ID],
            function (err, res) {
                console.log("successfully purchased " + input.quantity + " " + product.product_name)
            })
    })

}

function getItem(id, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_ID == id) {
            console.log(inventory[i])
            return inventory[i]
        }
    }
}