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
courseId INT,
FOREIGN KEY(courseId)
REFERENCES course(courseId)
ON DELETE CASCADE
ON UPDATE CASCADE);
DESC student;
# Q3 Alter the student table-add a coloumn address VARCHAR(30) and DOB date modify mobileNo VARCHAR(10)
ALTER TABLE student ADD (address VARCHAR(30),DOB DATE(10));
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