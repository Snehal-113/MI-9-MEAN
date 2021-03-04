window.addEventListener("load",() =>
{
    const param = (new URL(document.location)).searchParams;
    const rollNo = param.get("rollNo");
    const name = param.get("name");
    const Class = param.get("class");
    const marks1 = param.get("marks1");
    const marks2 = param.get("marks2");
    const marks3= param.get("marks3");
    const marks4= param.get("marks4");
    const marks5= param.get("marks5");
    document.getElementById("rollno_spanid").innerHTML = rollNo;
    document.getElementById("name_spanid").innerHTML = name;
    document.getElementById("class_spanid").innerHTML = Class;
    document.getElementById("marks1_spanid").innerHTML = marks1;
    document.getElementById("marks2_spanid").innerHTML = marks2;
    document.getElementById("marks3_spanid").innerHTML = marks3;
    document.getElementById("marks4_spanid").innerHTML = marks4;
    document.getElementById("marks5_spanid").innerHTML = marks5;
})