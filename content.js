let latestUrl = window.location.href;

setInterval(() => {

    if (latestUrl === window.location.href && 
        window.location.href.indexOf("/blob/") !== -1) {

        latestUrl = window.location.href;

        console.log("REACHED");
        
        // getting the html of blame page 
        const url = window.location.href.replace("/blob/", "/blame/");

        fetch(url)
            .then(data => data.text())
            .then(data => {
                console.log(data);
                
                // TODO
            
            });
    }
}, 500);