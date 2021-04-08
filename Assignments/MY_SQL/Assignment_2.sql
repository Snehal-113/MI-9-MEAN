/* Q1.
courseId   NUMBER
courseName VARCHAR(20)
add following constraints to it
courseId – PRIMAY KEY
courseName – NOT NULL and UNIQUE
*/

CREATE  TABLE course(
courseId char,
courseName VARCHAR(20) NOT NULL,
PRIMARY KEY(courseId)
);
DESCRIBE course;

/*#Q2. Create a table student with the following details
studId NUMBER,studName VARCHAR(20),studAadhar VARCHAR(12),mobileNo VARCHAR(8),
stream VARCHAR(10) ,studCourseId NUMBER

add following constraints to it
studId – PRIMAY KEY,studName – NOT NULL,studAadhar – UNIQUE,stream – check(science,commerce)studCourseId – 
Foreign key reference courseID from crourse table */

CREATE  TABLE emp(
empno  int PRIMAY KEY,
empname VARCHAR(20) NOT NULL,
address VARCHAR(29),
aadharno char(12) UNIQUE,
salary double(7,2) NOT NULL check(salary>0),
dname int,
FOREIGN KEY (dname)
REFERENCE dep(depno)
ON UPDATE RESTRICt
ON DELET CASCADE);
DESCRIBE emp ;

/* Q3 . Alter the student table – add a column address VARCHAR(30) and DOB Date
modify mobieNo VARCHAR(10) */
ALTER TABLE student
ADD address VARCHAR(30),	
ADD Date1 DATE;


/*Q4. Create a table temp
tempid NUMBER,tempDesc VARCHAR(20) */

CREATE  TABLE temp(
tempId INT,
tempDesc VARCHAR(20)
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
NOT NULL in descending order of creditlimit. */
SELECT * FROM customers WHERE customerName like 'J%' AND state IS NOT NULL ORDER BY creditLimit DESC;


/* Q12. Display the customer details of the cutomers whose firstname starts with J AND state is NOT NULL IN escendINg order of creditlimit.*/
SELECT * FROM customers WHERE customerName LIKE 'J%' AND state is NOT NULL ORDER BY creditLimit DESC;
