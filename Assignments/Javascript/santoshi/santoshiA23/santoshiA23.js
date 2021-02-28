window.addEventListener("load", () => {
    // const param=(new URL(document.location)).searchParams;
    // const first = param.get("fname");
    // const last = param.get("lname");
    let rollno = localStorage.getItem("RollNo");
    let name = localStorage.getItem("Name");
    let cls = localStorage.getItem("Class");
    let sub1 = localStorage.getItem("sub1");
    let sub2 = localStorage.getItem("sub2");
    let sub3 = localStorage.getItem("sub3");
    let sub4 = localStorage.getItem("sub4");
    let sub5 = localStorage.getItem("sub5");
    let total = sessionStorage.getItem("total");
    let per = sessionStorage.getItem("Persentage");
    let grade = sessionStorage.getItem("grade");
    document.getElementById("rollno_spanid").innerHTML = rollno;
    document.getElementById("name_spanid").innerHTML = name;
    document.getElementById("class_spanid").innerHTML = cls;
    document.getElementById("sub1_spanid").innerHTML = sub1;
    document.getElementById("sub2_spanid").innerHTML = sub2;
    document.getElementById("sub3_spanid").innerHTML = sub3;
    document.getElementById("sub4_spanid").innerHTML = sub4;
    document.getElementById("sub5_spanid").innerHTML = sub5;
    document.getElementById("total_spanid").innerHTML = total;
    document.getElementById("per_spanid").innerHTML = per;
    document.getElementById("grade_spanid").innerHTML = grade;
});
function submit_data() {
    let rollno = document.getElementById("rollnoid").value;
    let name = document.getElementById("nameid").value;
    let cls = document.getElementById("classid").value;
    let sub1 = parseInt(document.getElementById("sub1id").value);
    let sub2 = parseInt(document.getElementById("sub2id").value);
    let sub3 = parseInt(document.getElementById("sub3id").value);
    let sub4 = parseInt(document.getElementById("sub4id").value);
    let sub5 = parseInt(document.getElementById("sub5id").value);
    localStorage.setItem("RollNo", rollno);
    localStorage.setItem("Name", name);
    localStorage.setItem("Class", cls);
    localStorage.setItem("sub1", sub1);
    localStorage.setItem("sub2", sub2);
    localStorage.setItem("sub3", sub3);
    localStorage.setItem("sub4", sub4);
    localStorage.setItem("sub5", sub5);

    let total = sub1 + sub2 + sub3 + sub4 + sub5;
    sessionStorage.setItem("total", total);
    let per = total / 5;
    sessionStorage.setItem("Persentage", per);
    var grade;
    if (per > 80) {
        grade = "A+";
        sessionStorage.setItem("grade", grade);
    } else if (per < 80 && per >= 60) {
        grade = "A";
        sessionStorage.setItem("grade", grade);
    } else if (per < 60 && per >= 55) {
        grade = "B+";
        sessionStorage.setItem("grade", grade);
    } else if (per < 55 && per >= 40) {
        grade = "B";
        sessionStorage.setItem("grade", grade);
    } else {
        grade = "No Grade";
        sessionStorage.setItem("grade", grade);
    }
}