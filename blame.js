let container;
function set_dom(html) {
    const div = document.createElement("DIV");
    div.style.display = "none";
    div.id = "blameHTML";
    document.querySelector("body").appendChild(div);
    document.querySelector("#blameHTML").innerHTML = html;

    blames = div.getElementsByClassName("blame-container");
    if (blames.length == 1) {
        container = blames[0];
    } else {
        console.error("Multiple 'blame-container's")
    }
}
function blameDetails(line_id) {
    let super_parent = container.querySelector("#"+line_id).parentNode.parentNode.parentNode;
    blame_commit = super_parent.querySelector(".blame-commit")
    blame_reblame = super_parent.querySelector(".blame-reblame")

    // WIP
    // all will be nested dictionaries
    let data = {
        'avatar':'avatar',
        'commit':'commit',
        'time':'time',
        'reblame':'reblame'
    }
    return data
}