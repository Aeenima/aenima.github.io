
function AccesProtege() {
    let test = prompt("GO TO DISC 2", "");
    if (test == "221845") {
        location.href = "disc4.html";
    } else {
        window.alert("ACCESS DENIED.");
        window.close()
    }
}

