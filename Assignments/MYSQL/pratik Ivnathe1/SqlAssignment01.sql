#1.display all field from employee table
USE `classicmodels`;
select *from employees;
#2.display all emplyee number first name ,last name,job title all the emplyee
select employeeNumber,firstName,lastName,jobTitle from employees;
#3.display the office code,phone number,city ,country of all offices;
select *from offices;
select officeCode,phone,city,country from offices;
#4.display all the field from product table
select *from products;
#5.display customer name,phone number,city, country of all the customer
select *from customers;
select customerName,phone,city,country from customers;
#6.display the detail of customer where the state is null
select *from customers
where state = null;
#7.display the details of customer who are from country france
select *from customers where country="france";
#8. Display the product code,name,product description and quantity of all the products whose product line is Motocycles.
select productCode,productName,productDescription,quantityInStock from products where productLine = 'Motocycles';
/*9. Display the product code,name,product description and quantity of all the products whose product line
is Motocycles and quantity in stock is greater than 6000.*/
#Display all products whose productline is cars.
select * from products where productLine='cars';
#11. Display all the employees who are Sales Rep.
select *from employees where 'Sales Rep';
#12.Display all the employees with office code 4.
select *from employees where officeCode= 4;
#13. Display all the employees with office code 1,3 and 4.
select *from employees where officeCode in (1,3,4);
#14. Display all the customers with credit limit between 70000 and 85000.
select *from customers;
select *from customers where creditLimit between 70000 and 85000;
#15. Increase the credit limit by 2000 for all and display the customer code,name and credit limit.
select *from customers;
select postalCode,customerName from customers where creaditLimit = creaditLimit + 2000 ;
#16. Display only those records whose creditlimit after inceasing by 2000 is between 70000 and 90000.
select creaditLimit  from customers where (creaditLimit+2000) > 70000 and ( creaditLimit+2000) <90000;


