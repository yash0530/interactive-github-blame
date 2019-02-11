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
                // console.log(html);
                console.log(document.querySelector("body")).appendChild(
                    document.createElement("<div id='underscoreBlameHtmlPage' style='display: none;'></div>")
                );
                // document.querySelector("#underscoreBlameHtmlPage").innerHTML = html;

            
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