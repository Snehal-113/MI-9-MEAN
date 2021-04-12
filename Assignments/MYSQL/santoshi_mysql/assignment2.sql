#Q1 Create a table course with following details
CREATE TABLE course(
courseID INT,
courseName VARCHAR(20) NOT NULL UNIQUE,
PRIMARY KEY(courseID));
SHOW TABLES;
#Q2 Create a table student with following details
CREATE TABLE student(
studID INT PRIMARY KEY,
studName VARCHAR(20)NOT NULL,
studAadhar VARCHAR(12)UNIQUE,
mobileNo VARCHAR(8),
streams VARCHAR(10) CHECK(streams IN ('science','commerce')),
courseId INT not null,
FOREIGN KEY(courseId)
REFERENCES course(courseId) 
ON DELETE CASCADE
ON UPDATE CASCADE);
DESC student;
# Q3 Alter the student table-add a coloumn address VARCHAR(30) and DOB date modify mobileNo VARCHAR(10)
ALTER TABLE student ADD (address VARCHAR(30),DOB DATE);
DESC student;
ALTER TABLE student MODIFY mobileNo VARCHAR(10);
desc student;
#Q4 Create a table temp
CREATE TABLE temp(
tempID INT,
tempDesc VARCHAR(20),
PRIMARY KEY(tempID));
desc temp;
#Q5DROP the table temp
DROP TABLE IF EXISTS temp;
desc temp;
#6. Display all the employees whose first name start from F.
SELECT * 
FROM employees
WHERE firstName LIKE '%F';

#7. Display all the employees whose first name has exactly 6 characters and lastname ends with n;
SELECT * 
FROM employees 
WHERE firstName LIKE '______'
AND lastName LIKE '%n';

#8. Display the officeCode,postalcode and city of country USA(use table offices)
SELECT officeCode, postalCode, city
FROM offices
WHERE country='USA';

#9. Display the first 6 employees if their firstname is sorted alphabetically.
SELECT firstName
FROM employees
ORDER BY firstName ASC 
LIMIT 0,6;

#10. Display the customer details of the cutomers whose firstname starts with J and state is not null.
desc customers;
SELECT *
FROM customers 
WHERE contactFirstName LIKE 'J%'
AND state IS NOT NULL;

/*11. Display the customer details of the cutomers whose firstname starts with J and state is not null in
descending order of creditlimit.*/
SELECT *
FROM customers 
WHERE contactFirstName LIKE 'J%'
AND state IS NOT NULL 
ORDER BY creditLimit DESC;

/*
12.Display the customer details of the first two cutomers whose firstname starts with J and state is not
null in descending order of creditlimit.
*/
SELECT *
FROM customers 
WHERE contactFirstName LIKE 'J%'
AND state IS NOT NULL 
ORDER BY creditLimit DESC
LIMIT 0,2