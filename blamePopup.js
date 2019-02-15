function setTooltipListeners() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light',
        interactive: true,
        contentAsHTML: true 
    });
}

function addHeaders() {
    loadFile("https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/themes/tooltipster-light.css", "css");
    loadFile("https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/css/tooltipster.css", "css");
    loadFile("https://cdnjs.cloudflare.com/ajax/libs/tooltipster/3.3.0/js/jquery.tooltipster.js", "js");
    loadFile("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", "js");
    console.log("Files added");
}

function setBlameDetailsPopup(blameDetails, id) {
    const { avatar, commit_link, commit_msg, name, time } = blameDetails;
    const blamePopup = 
    `<div class='box-interactive-github-blame'>
        <div class='user-details'>
            <img height='20' width='20' style='padding-left: 5px;' src='${avatar}'>
            <span style='padding-left: 5px;'>@${name}</span>
        </div>
        <hr class='hr-interactive-github-blame'>
        <div class='commit-details'>
            <span style='padding-left: 5px; max-width: 490px;'>${commit_msg}</span>
            <div style='padding-left: 5px; color: #555'>${time}</div>
        </div>
    </div>`;

    let td = document.querySelector(`#${id}`);
    td.classList.add("tooltip");
    td.setAttribute("title", blamePopup);
}

function loadFile(path, type) {
    if (type == "js") {
        var fileref = document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", path);
    }
    else if (type == "css") {
        var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", path);
    }
    document.getElementsByTagName("head")[0].prepend(fileref);
}   