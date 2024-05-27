function dropDown() {
    event.stopPropagation();
    console.log("Dropdown button clicked");
    var element = document.getElementById("prevBlogs");
    console.log(element);
    element.classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        console.log("Clicked outside dropdown");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; ++i) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                console.log("Hiding dropdown");
                openDropdown.classList.remove("show");
            }
        }
    }
}