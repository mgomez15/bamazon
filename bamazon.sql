DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_ID INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("toothpaste", "pharmacy", 4, 10),
("toothpaste", "pharmacy", 4, 10),
("mouthwash", "pharmacy", 4, 10),
("toothbrush", "pharmacy", 4, 10),
("floss", "pharmacy", 4, 10),
("bodywash", "pharmacy", 4, 10),
("soap", "pharmacy", 4, 10);

SELECT * FROM products;
