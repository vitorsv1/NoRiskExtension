function createPanel() {
    let createData = {
        type: "detached_panel",
        url: "panel.html",
        width: 250,
        height: 100
    };
    let creating = browser.windows.create(createData);
    // console.log("sou ronaldo")
}
let id = 0;
function getArrayInLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}


let requests = getArrayInLocalStorage('requests');
function function1(requestdata) {
    // console.log(requestdata)
    var ul = document.getElementById("requests-list");
    var li = document.createElement("div");
    li.className = "request";

    var meth = document.createElement("div");
    meth.className = "method";
    meth.appendChild(document.createTextNode(requestdata.method))

    var type = document.createElement("div");
    type.className = "type";
    type.appendChild(document.createTextNode(requestdata.type))

    var url = document.createElement("div");
    url.className = "short-url";
    url.appendChild(document.createTextNode(requestdata.url))

    var collapsed = document.createElement("div");
    collapsed.className = "content";

    Object.entries(requestdata).forEach(([key, value]) => {
        var item = document.createElement("div")
        item.className = "content-item"

        var itemKey = document.createElement("div")
        itemKey.className = "content-item-key"
        itemKey.appendChild(document.createTextNode(key))

        var itemValue = document.createElement("div")
        itemValue.className = "content-item-value"
        itemValue.appendChild(document.createTextNode(value))

        item.appendChild(itemKey)
        item.appendChild(itemValue)
        // item.appendChild(document.createTextNode(key + ": " + value));
        collapsed.appendChild(item);
    });

    li.appendChild(meth);
    li.appendChild(type);
    li.appendChild(url);
    ul.appendChild(li);
    ul.appendChild(collapsed);
}
if (requests) {
    requests.forEach(element => {
        function1(element)
    });
} else {
    console.log("No requests...")
}

var coll = document.getElementsByClassName("request");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}