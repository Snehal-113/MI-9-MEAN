show databases;

USE classicmodels;

SHOW TABLES;

#1. Display all the fields from employee table.
SELECT * FROM employees;

#2. Display employee number, first name,last name ,job title of all the employees.
SELECT employeeNumber,firstName,lastName,jobTitle FROM employees;

select * from offices;

#3. Display the office code,phone number,city and country of all offices.
SELECT officeCode,phone,city,country from offices;

#4. Display all the fields from products table.
SELECT * from products;

SELECT * from customers;
#5. Display the customer name,phone number,city,country of all the customers.
SELECT customerName,phone,city,country FROM customers;

#6. Display the details of customers where the state is null.
SELECT * FROM customers WHERE state IS NULL;

#7. Display the details of customers who are from country France.
SELECT * FROM customers WHERE country = 'France';

#8. Display the product code,name,product description and quantity of all the products whose product line is Motocycles.
SELECT productCode,productName,productDescription,quantityInStock FROM products WHERE productLine = 'Motorcycles';

#9. Display the product code,name,product description and quantity of all the products whose product line is Motocycles and quantity in stock is greater than 6000.
SELECT productCode,productName,productDescription,quantityInStock FROM products WHERE productLine = 'Motorcycles' AND quantityInStock > 6000;

#10. Display all products whose productline is cars.
SELECT * FROM products WHERE productLine = 'Classic Cars' OR productLine = 'Vintage Cars';

#11. Display all the employees who are Sales Rep.
SELECT * FROM employees where jobTitle= 'sales Rep';

#12. Display all the employees with office code 4.
SELECT * FROM employees WHERE officeCode=4;

#13. Display all the employees with office code 1,3 and 4.
SELECT * FROM employees WHERE officeCode IN (1,3,4);

#14. Display all the customers with credit limit between 70000 and 85000.
SELECT * FROM customers WHERE creditLimit>70000 AND creditLimit<85000;

#15. Increase the credit limit by 2000 for all and display the customer code,name and credit limit.
SELECT customerNumber,customerName, creditlimit+1000 from customers;

#16. Display only those records whose creditlimit after inceasing by 2000 is between 70000 and 90000.
SELECT * FROM customers WHERE creditLimit+1000>70000 AND creditLimit+1000<90000;