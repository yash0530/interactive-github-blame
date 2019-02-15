let URL = window.location.href
let latestUrl = window.location.href

function changed() {
    if (window.location.href.indexOf("/blob/") !== -1) {
        console.log("REACHED");
        const url = window.location.href.replace("/blob/", "/blame/");
        fetch(url)
            .then(data => data.text())
            .then(html => {
                addHeaders();
                set_dom(html);
                setBlames();
            })
            .catch(err => console.log(err));
    }
}

setInterval(() => {
    latestUrl = window.location.href
    if (latestUrl != URL) {
        URL = latestUrl
        changed()
    }
}, 500);