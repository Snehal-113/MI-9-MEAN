#DML Operations on student and course table

#Q1. Insert a record in student table

#Q1_1 Amit 1234567890 9999833445 science 101 camp

show databases;
USE classicmodels;
SELECT * FROM student;
SELECT * FROM course;
INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(1,'Amit',1234567895,
999983,'science',101);

/*Q2. Is the record inserted in the table? The record is not inserted because there is a referential
 integrity constraint on courseId and there is no record in the master course table.No w try inserting 
 the same record with courseId value as null */
INSERT INTO student(
studID,studName,studAadhar,
mobileNo,streams,courseId) 
VALUES(1,'Amit',123456789,
99998,'science',null);
SELECT * FROM student;

/*Q3. Insert the following values in course table
courseID courseName
101 Computers
102 Electronics
103 Mechanical
104 Civil*/

SELECT * FROM course;
INSERT INTO course(
courseID,courseName)
VALUES(101,'computer');

INSERT INTO course (
courseID,courseName)
VALUES(102,'Electronics');

INSERT INTO course (
courseID,courseName)
VALUES(103,'Mechanical');
 
INSERT INTO course (
courseID,courseName)
VALUES(104,'Civil');
 
#Q4 Add a column in course table – courseCode varachar(4)

ALTER TABLE course ADD courseCode VARCHAR(4);

SELECT * FROM course;

#Q5. Display all the records in the course table.
SELECT * FROM course;
#Q6. Update the courseCode as follows 101 – COMP,102 – ENTC,103- MECH,104 – CIVL

SET SQL_SAFE_UPDATES = 0; 
 
UPDATE course
SET courseCode =101
WHERE courseName ='computer';

UPDATE course
SET courseCode =102
WHERE courseName ='Electronics';

UPDATE course
SET courseCode =103
WHERE courseName ='Mechanical';

UPDATE course
SET courseCode =104
WHERE courseName ='Civil';

SELECT * FROM course;

#Q7. Insert 10 records in student table against various coourseIds. - use multiple insert. 

INSERT INTO student(
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(3,'nikita',1234567,
99998,'science',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(4,'komal',12345678,
9999835,'geograpphy',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(5,'sharyu',1234567891,
99998445,'maths',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(6,'divya',1234567892,
9993445,'marathi',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(7,'trupti',12345678921,
99833445,'hindi',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(8,'shivnanda',1234567893,
9833445,'english',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(9,'suraj',1234567895,
9999445,'sanskrit',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(10,'prathma',12345678951,
99833445,'science',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(11,'sakshi',1234567898,
9993445,'science',null);

SELECT * FROM student;
#Q8. Create a duplicate table of student table. Name it DUP_EMP
CREATE TABLE DUM_EMP(
studID INT PRIMARY KEY,
studName VARCHAR(20)NOT NULL,
studAadhar VARCHAR(12)UNIQUE,
mobileNo VARCHAR(8),
streams VARCHAR(10) CHECK(streams IN ('science','commerce')),
courseId INT,
courseName VARCHAR(10));
DESC DUM_EMP;
ALTER TABLE DUP_EMP ADD courseName VARCHAR(20);

#Q9. Delete all the records of course Mechanical course from DUP_EMP table.
DELETE FROM DUM_EMP WHERE courseName='Mechanical';

#Q10. set the auotcommit to 0. Give start transaction command.
SET autocommit=0;
START TRANSACTION;

#Q11 Add a columns marks and practical in student table.
ALTER TABLE student ADD marks Double;
ALTER TABLE student ADD practical VARCHAR(10);

#Q12 Give a rollback statement.Check if the columns added are still in the table
rollback;
SELECT * FROM student;

#Q13 insert two more records in student table.
INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(11,'amrita',123456789,
999985,'science',111);
INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(12,'Amar',1234567891,
99945,'history',122);

#Q14. Give Rollback command. Check if the records are still there in the table.
rollback;
SELECT * FROM student;
#Q15 15. insert two more records in student table.Give a commit command.
INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(55,'Amit',12345678,
999983,'science',null);

INSERT INTO student (
studID,studName,studAadhar,
mobileNo,streams,courseId)
VALUES(56,'Amita',12345,
999983,'science',null);
commit;
SELECT * FROM student;
#Q16. Now give a savepoint A and update the marks and practical marks of all students.
SET SQL_SAFE_UPDATES=0;
SAVEPOINT A;
UPDATE student
SET marks=90 AND practical=80;
SELECT * FROM student;

#Q17. Display the data from student table.See if the data is updated in the table.
SELECT * FROM student;

# Q18. Now give savepoint B and delete the records from the student table whose name start from S.
SAVEPOINT B;
DELETE FROM student WHERE studName like 's%';

#Q 19. Display the result and check if the records are deleted.
SELECT * FROM student;

#Q 20. Give a Roll back command.Display the results and check if the records are there in the table.
ROLLBACK;
SELECT * FROM student;




