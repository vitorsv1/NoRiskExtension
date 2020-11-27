console.log("Extension loaded heeh");
let requests = []

function setArrayInLocalStorage(key, array) {
    localStorage.setItem(key, JSON.stringify(array));
}

function getArrayInLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// to set
setArrayInLocalStorage('requests', requests);
let requestCount = 0

// to get
function logURL(requestDetails) {
    const regex = /([a-z0-9A-Z]\.)*[a-z0-9-]+\.([a-z0-9]{2,24})+(\.co\.([a-z0-9]{2,24})|\.([a-z0-9]{2,24}))*/;
    if ('originUrl' in requestDetails) {
        const origin = requestDetails.originUrl.match(regex)
        console.log(origin[2] + origin[3])
        if (!requestDetails.url.match(origin[2] + origin[3])) {
            requests.push(requestDetails)
            requestCount += 1;
            setArrayInLocalStorage('requests', requests);

            browser.browserAction.setBadgeText({ text: requests.length.toString()});
        }
    }

}



browser.webRequest.onBeforeRequest.addListener(
    logURL,
    { urls: ["<all_urls>"] }
);
