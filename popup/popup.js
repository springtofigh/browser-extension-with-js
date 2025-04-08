let btnBlockSite = document.getElementById("block_site_btn");

btnBlockSite.addEventListener("click", (e) => {
    console.log(e.target)
    chrome.tabs.query({ active:true, currentWindow:true }, tabs => {
        let activeTab = tabs[0];
        console.log(activeTab)
        chrome.scripting.executeScript({
            target: {tabId: activeTab.id},
            function:BlckSite
        })
        chrome.tabs.reload(activeTab.id)
    })
})

function BlckSite() {
    console.log(window.location.hostname)

    chrome.storage.local.get({lockSites: []}, (result) => {
        let currentSite = window.location.hostname;
        if (result.lockSites.includes(currentSite) == false) {
            result.lockSites.push(currentSite)
            chrome.storage.local.set({lockSites: result.lockSitess}, () => {
                console.log("data is save")
            })
        }
    })
}