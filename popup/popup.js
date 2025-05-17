let get_font = document.getElementById("get_font");
let remove_font = document.getElementById("remove_font");

let hasActive = false;

get_font.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (hasActive === false) {
            hasActive = true;
            let currentTab = tabs[0];
            chrome.scripting.executeScript({
                target: { tabId: currentTab.id },
                files: ["scripts/script.js"]
            }).then((result) => {
                console.log("injection", result)
            }).catch((err) => {
                console.log(err)
            })
        }
    })
})

remove_font.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            hasActive = true;
            let currentTabReload = tabs[0];
            chrome.tabs.reload(currentTabReload.id)
    })
})
