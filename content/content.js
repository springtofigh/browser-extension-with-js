chrome.storage.local.get({lockSites: []}, (result) => {
    let currentSite = window.location.hostname;
    if (result.lockSites.includes(currentSite) == true) {
        document.body.innerHTML = "<h1 class='message_block'>! شما، این سایت را مسدود کرده اید</h1>"
    }
})