function setTooltipListeners() {
    $('.tooltip').tooltipster({
        theme: 'tooltipster-light',
        interactive: true,
        contentAsHTML: true 
    });
}

function setBlameDetailsPopup(blameDetails, id) {
    const { avatar_src, commit_link, commit_msg, name, time } = blameDetails;
    console.log(blameDetails);
    const blamePopup = `
    <div class='box-interactive-github-blame'>
        <div class='user-details'>
            <img height='20' width='20' style='padding-left: 5px;' src='${avatar_src}'>
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