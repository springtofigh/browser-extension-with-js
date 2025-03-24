let AllTabs

chrome.tabs.query({}, function (tabs) {
    AllTabs = tabs
})


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "get_tabs") {
        chrome.tabs.query({}, function (tabs) {
            sendResponse({ message:tabs})
        })
    }
})


chrome.runtime.onConnect.addListener((port) => {
    console.assert(port.name === 'popup')

    port.onMessage.addListener(msg => {
        console.log("Recieve Message from popup:", msg.response)
    })

    chrome.tabs.query({}, function (tabs) {
        port.postMessage({response: tabs})
    })

    
})