$(document).ready(function(){
    $.each(chrome.extension.getBackgroundPage().GB.getBlockedSites(), 
    function (index, value) {
            $("#blockedlist").append("<div class='siterow' title='"+value+"'>
            <div class='sitename'>"+index+"</div><span class='sitedesc'> : 
            "+value+"</span></div>");
        });
});
