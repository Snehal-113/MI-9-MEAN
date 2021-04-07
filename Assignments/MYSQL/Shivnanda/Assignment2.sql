#Assignment 2
USE classicmodels;
/*
	1. Create a table course with the following details
courseId number
courseName varchar(20)
*/
CREATE TABLE course(
courseId INT PRIMARY KEY ,
courseName  VARCHAR(20) NOT NULL UNIQUE
);
desc course;

/*
	2. Create a table student with the following details
studId number
studName varchar(20)
studAadhar varchar(12)
mobileNo varchar(8)
stream varchar(10)
studCourseId number
*/
CREATE TABLE stud(
studId INT PRIMARY KEY,
studName VARCHAR(20) NOT NULL,
studAadhar VARCHAR(12) UNIQUE,
mobileNo VARCHAR(8),
stream VARCHAR(10) CHECK('science''commerce'),
courseId INT,
foreign key (courseId)
REFERENCES course (courseId)
ON UPDATE restrict
ON DELETE CASCADE);
desc stud;

/*Alter the student table – add a column address varchar(30) and DOB Date
	modify mobieNo varchar(10)
*/
ALTER TABLE stud ADD (address VARCHAR(30), DOB DATE);
ALTER TABLE stud MODIFY mobileNo VARCHAR(10);

/*
4. Create a table temp
tempid number
tempDesc varchar(20)
*/
CREATE TABLE temp (tempId INT ,
tempDecs VARCHAR(20));

#5. DROP the table temp
DROP TABLE temp;

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
LIMIT 0,2;