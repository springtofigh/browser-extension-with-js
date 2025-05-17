let btnBlockSite = document.getElementById("block_site_btn");
let removeBlockSite = document.getElementById("remove_btn");

btnBlockSite.addEventListener("click", (e) => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let activeTab = tabs[0];
        console.log(activeTab)
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: BlckSite
        })
        chrome.tabs.reload(activeTab.id)
    })
})

removeBlockSite.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let activeTab = tabs[0];

        chrome.storage.local.get({ lockSites: [] }, (result) => {
            // Check if there are any locked sites
            if (result.lockSites.length > 0) {
                let currentSite = activeTab.url ? new URL(activeTab.url).hostname : window.location.hostname;  // Getting the hostname from active tab URL
                const updatedLockSites = result.lockSites.filter(site => site !== currentSite);

                chrome.storage.local.set({ lockSites: updatedLockSites }, () => {
                    console.log("Site removed:", updatedLockSites);
                });
            } else {
                console.log("No sites are currently blocked");
            }
        });

        // Note: Reloading the tab here
        chrome.tabs.reload(activeTab.id);
    });
});


function BlckSite() {
    console.log(window.location.hostname);

    chrome.storage.local.get({ lockSites: [] }, (result) => {
        let currentSite = window.location.hostname;
        if (!result.lockSites.includes(currentSite)) {
            result.lockSites.push(currentSite);
            chrome.storage.local.set({ lockSites: result.lockSites }, () => {
                console.log("Site saved successfully", result.lockSites);
            });
        } else {
            console.log("Site is already blocked");
        }
    });
}