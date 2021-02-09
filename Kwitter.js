function Add_User() {
    User_Name = document.getElementById("User-Name").value;
    if (User_Name == "") {
        document.getElementById("Error_Label").innerHTML = " Please Enter User Name in Text-Input Box ";
    } else {
        localStorage.setItem("User name :-", User_Name);
        window.location = "Kwitter_Room.html";
    }
}
