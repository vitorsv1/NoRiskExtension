$("#blockthistoo").click(function () {
    chrome.extension.getBackgroundPage().GB.addBlockedSite($("#dontgothere").val());
    ...
});
