let currentSite = window.location.hostname;

chrome.storage.local.get({ lockSites: [] }, (result) => {
    if (result.lockSites.includes(currentSite) == true) {
        document.body.innerHTML = "<h1 class='message_block'>! شما، این سایت را مسدود کرده اید</h1>"
    }
})

const updatedLockSites = blockedSites.filter(site => site !== currentSite);
chrome.storage.local.set({ lockSites: updatedLockSites }, () => {
    document.body.innerHTML = "<h1 class='message_block'>این سایت از لیست مسدود شده ها رها شد</h1>";
});