/*1. Create a table course with the following details
courseId number
courseName varchar(20)
add following constraints to it
courseId – Primary Key
courseName – Not Null and Unique*/
create table course(
courseId int,
courseName varchar(20),
primary key(courseid),
courseName varchar(10) not null unique );
/*2. Create a table student with the following details
studId number
studName varchar(20)
studAadhar varchar(12)
mobileNo varchar(8)
stream varchar(10)
studCourseId number
add following constraints to it
studId – Primary Key
studName – Not Null
studAadhar – unique
stream – check(science,commerce)
studCourseId – Foreign key reference courseID from crourse table*/
create table student(
studentId int primary key,
studentName varchar(20) not null,
studAadhar varchar(12) unique,
mobileNo varchar(8),
stream varchar(10) check(stream='science'or stream='commerce'),
studCourseIdNo int,
foreign key(studCourseId)
references course(courseId)
on update restrict
on delete cascade);
desc student;
 
 #Q.3. Alter the student table – add a column address varchar(30) and DOB Date modify mobieNo varchar(10)
 alter table student 
 add address varchar(25),
 add DOB varchar(10);
 alter table student modify mobileNO varchar(10);
 
 
 #Q.44. Create a table temp tempid number tempDesc varchar(20)
 create table temp(
 tempId int,
 tempDesc varchar(20));
 
 
 #Q.5. DROP the table temp
 drop table temp;
 
 #Q.6 Display all the employees whose first name start from F.
 select *from employees where firstName like 'F%';
 
 #Q.7. Display all the employees whose first name has exactly 6 characters and lastname ends with n;
 select *from employees where firstName like '_____%n';
 #8. Display the officeCode,postalcode and city of country USA(use table offices)
 select officeCode,postalCode,city from offices where country ='USA';
 #9. Display the first 6 employees if their firstname is sorted alphabetically.
 select *from employees 
 order by firstName asc limit 6;
# 10. Display the customer details of the cutomers whose firstname starts with J and state is not null.
 select *from customers where customerName like 'J%' and state is not null  ;
 
/* 11. Display the customer details of the cutomers whose firstname starts with J and state is not null in
descending order of creditlimit.*/

 select *from customers where customerName like 'J%' and state is not null order by creaditlimit desc;

 /*12.Display the customer details of the first two cutomers whose firstname starts with J and state is not
null in descending order of creditlimit.*/
 select *from customers where customerName like 'J%' and state is not null limit 0,2;
 
 
 
 





