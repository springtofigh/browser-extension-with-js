const getImg = document.getElementById("get_img");

window.addEventListener("load", () => {
    getImg.addEventListener("click", (e) => {
        async function sendMessagePopup() {
            const tabs = await chrome.tabs.query({ active: true, currentWindow: true }); //get Active Tab
            let currentTab = tabs[0];
            const port = chrome.tabs.connect(currentTab.id, { name: "getImage" });
            port.postMessage({ message: "hello from popup" });
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            }
    
            port.onMessage.addListener(msg => {
                console.log(msg.response)
            })
        }
    
        sendMessagePopup()
    })
})
