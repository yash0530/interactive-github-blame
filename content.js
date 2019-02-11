let URL = window.location.href
let latestUrl = window.location.href

function changed() {
    if (window.location.href.indexOf("/blob/") !== -1) {
        console.log("REACHED");
        // getting the html of blame page 
        const url = window.location.href.replace("/blob/", "/blame/");
        let xhr = createCORSRequest('GET', url);
        if (!xhr) {
            console.error('CORS not supported');
        } else {
            xhr.onload = function () {
                let html = xhr.responseText;
                set_dom(html); // To make the DOM

                // Access using line id, as shown below
                // TODO: Parse the received JSON, and render accordingly
                console.log(blameDetails("L1"));
                console.log(blameDetails("L4")['avatar_src'])
                console.log(blameDetails("L4")['commit_link'])
                console.log(blameDetails("L4")['commit_msg'])
                console.log(blameDetails("L4")['reblame'])
                console.log(blameDetails("L4")['time'])
                console.log(blameDetails("L4")['user_link'])

            };
            xhr.onerror = function () {
                console.error('There was an error making the CORS request.');
            };
            xhr.send();
        }
    }
}
setInterval(() => {
    latestUrl = window.location.href
    if (latestUrl != URL) {
        URL = latestUrl
        changed()
    }
}, 500);