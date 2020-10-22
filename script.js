function changeIconOnHover(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "none";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "inline";
}

function restoreIcon(element){
    element.parentElement.getElementsByClassName("regular-icon").item(0).style.display = "inline";
    element.parentElement.getElementsByClassName("on-hover-icon").item(0).style.display = "none";
}

function toggleSidebar(behPar){
    if(behPar==1){
        var sidebar = document.getElementById('sidebar');
        sidebar.style.cssText = 'display:none !important';
        var content = document.getElementById('site-content');
        content.className = '';
        content.setAttribute("class", "col-12");
        document.getElementById('menu-icon').style.display = 'inline';
    }else{
        var sidebar = document.getElementById('sidebar');
        sidebar.style.cssText = 'display:block';
        var content = document.getElementById('site-content');
        content.className = '';
        content.setAttribute("class", "col-lg-9 col-xl-10 col-sm-12");
        document.getElementById('menu-icon').style.display = 'none';
    }
}