show databases;
USE classicmodels;
show tables;

#1 Question
CREATE TABLE course(
courseId INT PRIMARY KEY,
courseName VARCHAR(20) NOT NULL UNIQUE); 
SHOW TABLES;
SELECT * FROM course;
DESC course;

#2Question
CREATE TABLE student(
studId int primary key,
studName varchar(20) not null,
studAadhar varchar(12) unique,
mobileNo varchar(8),
stream VARCHAR(10) check (stream='science' or stream = 'commerce'),
studCourseId int, 
foreign key(studCourseId) 
references course(courseId)
on update restrict
on delete cascade);

desc student;

#3 Question
alter table student add address varchar(30);
alter table student add DOB date;
alter table student modify mobileNo varchar(10);

#4 Question
create table temp(
tempId int,
tempDesc varchar(20));
desc  temp;
#5 Question
drop table temp;
desc temp;

#6. Display all the employees whose first name start from F.
select * from employees where firstName like 'f%';

#7. Display all the employees whose first name has exactly 6 characters and lastname ends with n;
select * from employees where firstName like '______' and lastName like '%n';

select * from offices;
#8. Display the officeCode,postalcode and city of country USA(use table offices)
select officeCode,postalCode,city from offices where country = 'USA';

#9. Display the first 6 employees if their firstname is sorted alphabetically.
select * from employees order by firstName limit 6;

select * from customers;
#10. Display the customer details of the cutomers whose firstname starts with J and state is not null.
select * from customers where state is NOT NULL and contactFirstName like 'j%';

#11. Display the customer details of the cutomers whose firstname starts with J and state is not null in descending order of creditlimit.
select * from customers where state is NOT NULL and contactFirstName like 'j%' order by creditLimit desc;

#12.Display the customer details of the first two cutomers whose firstname starts with J and state is not null in descending order of creditlimit.
select * from customers where state is NOT NULL and contactFirstName like 'j%' order by creditLimit desc limit 2;