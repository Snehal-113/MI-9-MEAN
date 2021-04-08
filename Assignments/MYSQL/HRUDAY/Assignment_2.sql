-- 1) Create a table course with the following details courseId number courseName varchar(20)....
create table course(
courseId int,
courseName varchar(20) not null unique,
primary key (courseId) 
);
desc course;

select * from course ;
-- 2) Create a table student with the following details...
create table student(
studId int primary key,
studName varchar(20) not null,
studAadhar varchar(12) unique,
mobileNo varchar(8),
studStream varchar(10) check (studStream='science' AND studStream='commerce'),
studCourseId int,foreign key (studCourseId) references course(courseId)
);
select * from student ;
desc student;
-- 3. Alter the student table  - add  a column address varchar(30) and DOB Date modify mobieNo varchar(10)....
alter table student add address varchar(30) ;
alter table student add dob date;
alter table student modify mobileNo varchar(10);
desc student; 
-- 4) Create a table temp
create table temp(
tempId int,
tempDesc varchar(20) 
);
desc temp;
-- 5) DROP the table temp
drop table temp;
desc temp;

-- 6. Display all the employees whose first name start from F.
select * from employees where firstName like 'F%';
-- 7. Display all the employees whose first name has exactly 6 characters and lastname ends with n;
select * from employees where firstName like '______' and lastName like '%n';
-- 8. Display the officeCode,postalcode and city of country USA(use table offices)
SELECT officeCode,postalCode,city,country FROM offices where country='USA';
-- 9. Display the first 6 employees if their firstname is sorted alphabetically.
SELECT * FROM employees order by firstName ASC limit 0,6;
-- 10. Display the customer details of the cutomers whose firstname starts with J and state is not null.
SELECT * FROM customers where contactFirstName like 'J%' and state is not null;
-- 11. Display the customer details of the cutomers whose firstname starts with J and state is not null in
-- descending order of creditlimit.
SELECT * FROM customers where contactFirstName like 'J%' and state is not null order by creditLimit DESC;
-- 12.Display the customer details of the first two cutomers whose firstname starts with J and state is not
-- null in descending order of creditlimit.
SELECT * FROM customers where contactFirstName like 'J%' and state is not null order by creditLimit DESC limit 0,2;

