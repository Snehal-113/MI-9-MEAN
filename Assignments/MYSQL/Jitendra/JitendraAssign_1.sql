select *from employees;
select employeeNumber,lastName,firstName,jobTitle from employees;
select officeCode,phone,state,country from offices;
select *from products;
select customerName,phone,city,country from customers;
select *from customers where city is null;
select *from customers where city="France";
select productCode,productName,productDescription,quantityInStock from products where productLine="Motorcycles";
select productCode,productName,productDescription,quantityInStock from products where (productLine="Motorcycles" and quantityInStock>6000);
select productName from products where productLine like '%car%';
select employeeNumber,lastName,firstName,jobTitle from employees where jobTitle="Sales Rep";
select employeeNumber,lastName,firstName,jobTitle from employees where officeCode=4;
select employeeNumber,lastName,firstName,jobTitle from employees where (officeCode=1 or officeCode=3 or officeCode=4);
select *from customers where (CreditLimit>60000 and CreditLimit<85000);
select customerName,phone,city,country,creditLimit,creditLimit+2000 from customers where (CreditLimit>60000 and CreditLimit<85000);
select customerName,phone,city,country,creditLimit,creditLimit+2000 from customers where (creditLimit+2000>70000 and creditLimit+2000<90000);


