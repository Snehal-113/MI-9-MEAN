
#select *from student;
#1. Insert a record in student table
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo)
value(101,"Amit", 1234567890, 99998334," science",  "camp");
#2.Is the record inserted in the table? The record is not inserted because there is a referential integrity
#constraint on courseId and there is no record in the master course table.
#No w try inserting the same record with courseId value as null
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo)
value(101,"Amit", 1234567890, 99998334," science",  "null");
#3. Insert the following values in course table
use classicmodels;
select *from course;
insert into course (courseId, courseName1) value(101, "Computers");
insert into course (courseId, courseName1) value(102 ,"Electro");
insert into course (courseId, courseName1) value(103 ,"Mechanical");
insert into course (courseId, courseName1) value(104 ,"Civil");
#4. Add a column in course table – courseCode varachar(4)
alter table course add courseCode varchar(4); 
#5. Display all the records in the course table.
select *from course;
#6. Update the courseCode as follows 101 – COMP,102 – ENTC,103- MECH,104 – CIVL
set sql_safe_updates = 0;
update course set courseCode =101 where courseName ="COMP";
update course set courseCode =101 where courseName ="ENTC";
update course set courseCode =101 where courseName ="MECH";
update course set courseCode =101 where courseName ="CIVIL";
#7. Insert 10 records in student table against various coourseIds. - use multiple insert.

select *from student;
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(104,"meena",123456789,9874563,"sci",01);
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(105,"ajay",14569876,7895463,"ele",02);
insert into student  (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(106,"radha",101456789,9874563,"sci",03);
insert into student  (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(107,"rohan",36547891,456355,"ent",04);
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(108,"meena",123456789,9874563,"sci",05);
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(109,"ram",4569871,3669874,"Gio",06);
insert into student(studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(111,"shree",0843456789,9874563,"math",07);
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(112,"Om",8745615,654622,"mech",08);
insert into student  (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(113,"raj",783456789,98634563,"chemi",09);
insert into student (studentId,studentName,studAadhar,mobileNo,stream,studCourseIdNo) value(114,"anju",0453456789,98634500,"Eco",010);
#8. Create a duplicate table of student table. Name it DUP_EMP
create table dummy_emp(
    empNo int ,
    empName varchar(20) not null,
    address varchar(30),
    aadhar varchar(12) unique,
    deptNo int,
    mobileNo int,
    salary double,
    deptNo int,
    foreign key (deptNo)
    references DEPT(deptNo)
    on update restrict
    on delete cascade
    );
select *from dummy_emp;
desc dummy_emp;
#9.Delete all the records of course Mechanical course from DUP_EMP table.
delete from dup_emp where courseName="Mechanical";
#10. set the auotcommit to 0. Give start transaction command.
set autocommit =0;
#11. Add a columns marks and practical in student table.
alter table student add mark int;
alter table student add practical varchar(15);
#12. Give a rollback statement.Check if the columns added are still in the table
rollback;
#13. insert two more records in student table.
insert into student  value(118,"angraj",7834567149,98634573,"Arospa",15);
insert into student  value(119,"balu",0453436789,98604500,"Eco",20);
#14. Give Rollback command. Check if the records are still there in the table.
rollback;
#15. insert two more records in student table.Give a commit command.
insert into student  value(118,"angraj",7834567149,98634573,"Arospa",15);
insert into student  value(119,"balu",0453436789,98604500,"Eco",20);
commit;
select *from student;

#16. Now give a savepoint A and update the marks and practical marks of all students.
set sql_safe_updates=0;
savepoint a;
update student
set mark=80 and practical=70;
#17. Display the data from student table.See if the data is updated in the table.
select *from student;
#18. Now give savepoint B and delete the records from the student table whose name start from S.
savepoint b;
delete from student where studentName like "S%";
#19. Display the result and check if the records are deleted.
select *From student;
#20. Give a Roll back command.Display the results and check if the records are there in the table.
rollback;
select *from studnet;




