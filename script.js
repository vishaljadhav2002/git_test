
function addStudent() {
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if (name === "" || course === "") {
        alert("Please enter all details");
        return;
    }

    let li = document.createElement("li");

    li.textContent = name + " - " + course;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("course").value = "";
}
