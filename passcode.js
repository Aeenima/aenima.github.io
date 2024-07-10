
function AccesProtege() {
    let test = prompt("PASSWORD:", "");
    if (test == "1234") {
        location.href = "libreta.html";
    } else {
        window.alert("ACCESS DENIED. LEAVE THIS PAGE IMMEDIATELY.");
        window.close()
    }
}

