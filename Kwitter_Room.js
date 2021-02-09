function Logout() {
    window.location = "Index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyDfluqK2by5Gb7_PnhSTixy3b7qE_Ty-XY",
    authDomain: "kwitter-cf3d8.firebaseapp.com",
    databaseURL: "https://kwitter-cf3d8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kwitter-cf3d8",
    storageBucket: "kwitter-cf3d8.appspot.com",
    messagingSenderId: "367784048876",
    appId: "1:367784048876:web:21088528564880e24c4dc9"
};
firebase.initializeApp(firebaseConfig);

var Name = localStorage.getItem("User name :-");
document.getElementById("hello").innerHTML = ("Welcome " + Name + "!");

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log(Room_names);
            row = "<div id='" + Room_names + "'class='room_name' onclick='next_page(this.id)'>" + Room_names + "</div>";
            document.getElementById("output").innerHTML += row;
        });
    });
}

function next_page(Room_ID) {
    console.log(Room_ID);
    localStorage.setItem("roomID", Room_ID);
    window.location = "kwitter_page.html";
}
getData();
