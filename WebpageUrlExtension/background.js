chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({
        "id": "sampleContextMenu",
        "title": "Sample Context Menu",
        "contexts": ["selection"]
    });
});

// This will run when a bookmark is created.
chrome.bookmarks.onCreated.addListener(function () {
    // do something
    console.log("bookmarks");
});

chrome.tabs.onActivated.addListener(tab => {
    console.log(tab);
    chrome.tabs.get(tab.tabId, current_tab_info => {
        var querystring = decodeURIComponent(current_tab_info.url);
        console.log(querystring);

        fetch('http://127.0.0.1:5000/get').then(result => {
            // Result now contains the response text, do what you want...
            console.log(result.json())
        })
    })

});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];

    var activeTabId = activeTab.id; // or do whatever you need
    console.log(activeTabId);


});

chrome.runtime.onMessage.addListener(function (message, sender, reply) {
    console.log("onMessage");
    chrome.runtime.onMessage.removeListener(event);
});


function executePythonScript() {
    const spawn = require('chile_process').spawn;
    const process = spawn('python', ['./hello.py']);

    process.stdout.on('data', data => {
        console.log(data.toString());
    });
}