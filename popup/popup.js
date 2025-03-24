const sendMessageBtn = document.getElementById("send_btn");

function sendMessage() {
    let HTMLTab = document.getElementById("tabs");
    tabs.innerHTML = ""

    function showTabs(tabs) {
        tabs.map(tab => {
            let liElement = document.createElement("li");
            liElement.innerText = tab.title;
            HTMLTab.append(liElement);

            if (tab.active === true) {
            liElement.style.backgroundColor = "blue"; 
            liElement.style.color = "white"; 
            }

            let spanElement = document.createElement("span");
            spanElement.innerText = tab.url;
            liElement.append(spanElement);
        })
    }

    const port = chrome.runtime.connect({ name: "popup" })

    port.onMessage.addListener(msg => {
        console.log("Recieve Message from backgroundJs:", msg.response)
        showTabs(msg.response)
    })

    port.postMessage({response: "Hello from popup"})
}

sendMessageBtn.addEventListener("click", sendMessage)