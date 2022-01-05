function showIt(elementId) {
    var el = document.getElementById(elementId);
    el.scrollIntoView(true);
}

function hidesend() {
    document.getElementById("float-send").style.display = "none";
    document.getElementById("float-send-icon").style.display = "block";
}

function showsend() {
    document.getElementById("float-send").style.display = "block";
    document.getElementById("float-send-icon").style.display = "none";
}

function changeTheme(theme) {
    var sheet = document.createElement('style')
    sheet.innerHTML = ".sitetheme {background-image: url(images/"+theme+".jpg);}";
    document.body.appendChild(sheet);
}