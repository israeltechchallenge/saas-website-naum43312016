function changeIconOnHover(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "none";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "inline";
}

function restoreIcon(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "inline";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "none";
}