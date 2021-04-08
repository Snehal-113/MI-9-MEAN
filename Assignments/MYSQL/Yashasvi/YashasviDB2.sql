/*
1. Create a table course with the following details
courseId   number
courseName varchar(20)
add following constraints to it
courseId – Primary Key
courseName – Not Null and Unique
*/

CREATE  TABLE course(
courseId char,
courseName varchar(20) not null,
primary key(courseId)
);
DESCRIBE course;

/*#Q2. Create a table student with the following details
studId number,studName varchar(20),studAadhar varchar(12),mobileNo varchar(8),
stream varchar(10) ,studCourseId number
add following constraints to it
studId – Primary Key,studName – Not Null,studAadhar – unique,stream – check(science,commerce)studCourseId – 
Foreign key reference courseID from crourse table */

CREATE  TABLE emp(
empno  int primary key,
empname varchar(20) not null,
address varchar(29),
aadharno char(12) unique,
salary double(7,2) not null check(salary>0),
dname int,
foreign key(dname)
references dep(depno)
on update restrict
on delete cascade);
DESCRIBE emp ;

/* Q3 . Alter the student table – add a column address varchar(30) and DOB Date
modify mobieNo varchar(10) */
ALTER TABLE student
ADD address varchar(30),	
ADD Date1 date;


/*Q4. Create a table temp
tempid number,tempDesc varchar(20) */

CREATE  TABLE temp(
tempId int,
tempDesc varchar(20)
);
DESCRIBE temp;

/* Q5  DROP the table temp */

DROP TABLE temp;

#Q6. Display all the employees whose first name start from F.

SELECT  firstName FROM employees WHERE firstName LIKE 'F%';


#Q7 Display all the employees whose first name has exactly 6 characters AND lastname ends with n;
SELECT firstName,lastName FROM employees WHERE firstName LIKE '______'  AND lastName LIKE '%n';


#Q8.Display the officeCode,postalcode AND city of country USA(use table offices)
SELECT officeCode,postalcode,city,country   FROM offices    WHERE country="USA";

#Q9 . Display the first 6 employees if their firstname is sorted alphabetically.
SELECT firstName FROM employees WHERE firstName LIKE '______' ORDER BY firstName ASC;


#Q10 .Display the customer details of the cutomers whose firstname starts with J AND state is NOT NULL.
SELECT* FROM customers WHERE customerName LIKE 'J%' AND  state is NOT NULL;

/* Q11. Display the  customer details of the cutomers whose firstname starts with J and state is 
not null in descending order of creditlimit. */
SELECT * FROM customers WHERE customerName like 'J%' AND state IS NOT NULL ORDER BY creditLimit DESC;


#Q12. Display the customer details of the cutomers whose firstname starts with J AND state is NOT NULL IN
#escendINg order of creditlimit.
SELECT * FROM customers WHERE customerName LIKE 'J%' AND state is NOT NULL ORDER BY creditLimit DESC;