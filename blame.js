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
    // blame_commit = super_parent.querySelector(".blame-commit").querySelector(".flex-items-start")
    blame_commit = super_parent.querySelector(".blame-commit")

    avatar = blame_commit.querySelector(".avatar")
    user_link = "https://github.com" + avatar.getAttribute("href")
    avatar_src = avatar.querySelector("img").getAttribute("src")

    content = blame_commit.querySelector(".message")
    commit_msg = content.innerText
    commit_link = "https://github.com" + content.getAttribute("href")

    time = blame_commit.querySelector("time-ago").getAttribute("datetime")
    time = new Date(time).toString()

    let reblame = ''
    try {
        reblame = "https://github.com" + super_parent.querySelector(".blob-reblame").querySelector("a").getAttribute("href")
        reblame = reblame.replace("blame", "blob")
    } catch (error) {
    }
    
    let data = {
        avatar_src,
        user_link,
        commit_msg,
        commit_link,
        time,
        reblame
    }
    return data
}