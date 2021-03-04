window.addEventListener("load",() =>
{
    let RollNo = localStorage.getItem("RollNo");
    let Name = localStorage.getItem("Name");
    let Class = localStorage.getItem("Class");
    let Eng = localStorage.getItem("Eng");
    let Hindi = localStorage.getItem("Hindi");
    let Maths = localStorage.getItem("Maths");
    let Social = localStorage.getItem("Social");
    let Science = localStorage.getItem("Science");
    document.getElementById("rollno_spanid").innerHTML = RollNo;
    document.getElementById("name_spanid").innerHTML = Name;
    document.getElementById("class_spanid").innerHTML = Class;
    document.getElementById("marks1_spanid").innerHTML = Eng;
    document.getElementById("marks2_spanid").innerHTML = Hindi;
    document.getElementById("marks3_spanid").innerHTML = Maths;
    document.getElementById("marks4_spanid").innerHTML = Social;
    document.getElementById("marks5_spanid").innerHTML = Science;
}
)
function submit_data(){
    let rollno = document.getElementById("rollNo").value;    
    let name = document.getElementById("name").value;    
    let Class = document.getElementById("class").value;    
    let engM = document.getElementById("marks1").value;    
    let hindiM = document.getElementById("marks2").value;    
    let mathsM = document.getElementById("marks3").value;    
    let socialM = document.getElementById("marks4").value;    
    let scienceM = document.getElementById("marks5").value; 
    localStorage.setItem("RollNo",rollno);   
    localStorage.setItem("Name",name);   
    localStorage.setItem("Class",Class);   
    localStorage.setItem("Eng",engM);   
    localStorage.setItem("Hindi",hindiM);   
    localStorage.setItem("Maths",mathsM);   
    localStorage.setItem("Social",socialM);   
    localStorage.setItem("Science",scienceM);   
}