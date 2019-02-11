let URL = window.location.href
let latestUrl = window.location.href
function changed() {
    if (window.location.href.indexOf("/blob/") !== -1) {
        console.log("REACHED");
        // getting the html of blame page 
        const url = window.location.href.replace("/blob/", "/blame/");
        fetch(url)
            .then(data => data.text())
            .then(html => {
                console.log(html);
                const div = document.createElement("DIV");
                div.style.display = "none";
                div.id = "blameHTML";
                document.querySelector("body").appendChild(div);
                document.querySelector("#blameHTML").innerHTML = html;
                setBlames();
            });
    }
}
setInterval(() => {
    latestUrl = window.location.href
    if(latestUrl!=URL) {
        URL = latestUrl
        changed()
    }
}, 500);