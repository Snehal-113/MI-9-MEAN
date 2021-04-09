/*1 Insert a record in student table
1 Amit 1234567890 9999833445 science 101 camp */
SELECT * FROM student;
INSERT INTO student VALUES(101,'Amit', 1234567890, 9999833445, 'science', 'camp');

/*2 Is the record inserted in the table? The record is not inserted because there is a referential integrity
constraint on courseId and there is no record in the master course table.
No w try inserting the same record with courseId value as null */

INSERT INTO student VALUES(101,'Amit', 1234567890, 9999833445, 'science',null, 'camp', null);

/* 3 Insert the following values in course table
courseID courseName
101 Computers
102 Electronics
103 Mechanical
104 Civil */
select * from course;
INSERT INTO course(courseId,courseName ) VALUES
(101,'Computers'),(102,'Electronics'),(103,'Mechanical'),(104,'Civil');

#4 Add a column in course table – courseCode varachar(4)
ALTER TABLE course 
ADD courseCode varchar(4);

#5 Display all the records in the course table.
SELECT * FROM course;

#6 Update the courseCode as follows 101 – COMP,102 – ENTC,103- MECH,104 – CIVL
UPDATE course 
SET courseName =  
CASE WHEN courseId = 101 THEN 'COMP'
WHEN courseId = 102 THEN 'ENTC'
WHEN courseId = 103 THEN 'MECH'
WHEN courseId = 104 THEN 'CIVIL'
END;

#7 Insert 10 records in student table against various coourseIds. - use multiple insert.
SELECT * FROM  student;
INSERT INTO student VALUES
(102,'Riya', 1111117890, 9999833445, 'mechanical',null, 'camp', null),
(103,'Pihu', 555555490, 9999833445, 'science',null, 'camp', null),
(104,'Pooja', 2222267890, 9999833445, 'science',null, 'camp', null),
(105,'Rahul', 169999968890, 9999833445, 'science',null, 'camp', null),
(106,'Varun', 12342222890, 9999833445, 'mechanical',null, 'camp', null),
(107,'Shikha', 12345552890, 9999833445, 'science',null, 'camp', null),
(108,'Naveen', 12345555590, 9999833445, 'science',null, 'camp', null),
(109,'Sid', 12345644141, 9999833445, 'mechanical',null, 'camp', null),
(110,'Tanu', 1234564141, 9999833445, 'mechanical',null, 'camp', null),
(111,'Anu', 12345677777, 9999833445, 'science',null, 'camp', null);

#8 Create a duplicate table of student table. Name it DUP_EMP
CREATE TABLE dup_emp LIKE student;
INSERT INTO dup_emp SELECT * FROM student;
SELECT * FROM dup_emp;

#9 Delete all the records of course Mechanical course from DUP_EMP table.
DELETE FROM dup_emp WHERE studstream = 'science';

#10 set the auotcommit to 0. Give start transaction command.
SET AUTOCOMMIT = 0;
START TRANSACTION;

#11 Add a columns marks and practical in student table.
SELECT * FROM student;
ALTER TABLE student
ADD (marks INT, practical INT);

#12 Give a rollback statement.Check if the columns added are still in the table
ROLLBACK;
SELECT * FROM student;

#13 insert two more records in student table.
INSERT INTO student VALUES
(113,'Gaurav', 78569547852, 9999833445, 'science',null, 'camp', null, null, null);

#14 Give Rollback command. Check if the records are still there in the table.
ROLLBACK;
SELECT * FROM STUDENT;

#15 insert two more records in student table.Give a commit command.
INSERT INTO student VALUES
(114,'Shivani', 785632149, 9999833445, 'science',null, 'camp', null, null, null),
(115,'Shivam', 5632145986, 9999833445, 'science',null, 'camp', null, null, null);
COMMIT;
 
 #16 Now give a savepoint A and update the marks and practical marks of all students.	
SAVEPOINT A;
UPDATE student SET marks = 58 AND practical = 26 WHERE studId = 101;
UPDATE student SET marks = 88 AND practical = 16 WHERE studId = 102;
UPDATE student SET marks = 58 AND practical = 28 WHERE studId = 103;
UPDATE student SET marks = 58 AND practical = 29 WHERE studId = 104;
UPDATE student SET marks = 38 AND practical = 24 WHERE studId = 105;
UPDATE student SET marks = 78 AND practical = 28 WHERE studId = 106;
UPDATE student SET marks = 58 AND practical = 25 WHERE studId = 107;
UPDATE student SET marks = 65 AND practical = 22 WHERE studId = 108;
UPDATE student SET marks = 63 AND practical = 28 WHERE studId = 109;
UPDATE student SET marks = 62 AND practical = 29 WHERE studId = 110;
UPDATE student SET marks = 61 AND practical = 30 WHERE studId = 111;
UPDATE student SET marks = 60 AND practical = 24 WHERE studId = 112;
UPDATE student SET marks = 45 AND practical = 25 WHERE studId = 113;
UPDATE student SET marks = 66 AND practical = 24 WHERE studId = 114;
UPDATE student SET marks = 70 AND practical = 25 WHERE studId = 115;

#17 Display the data from student table.See if the data is updated in the table.
SELECT * FROM student;
SAVEPOINT B;

#18 Now give savepoint B and delete the records from the student table whose name start from S.
DELETE FROM student WHERE studName LIKE 'S%';	

#19 Display the result and check if the records are deleted.
SELECT * FROM student;

#20 Give a Roll back command.Display the results and check if the records are there in the table.
ROLLBACK;
SELECT * FROM student;





