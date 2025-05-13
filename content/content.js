// const allImages = document.querySelectorAll('img');

// allImages.forEach(img => {
//     console.log(img)
// })

window.addEventListener("load", () => {
    async function reciveMessage() {
        chrome.runtime.onConnect.addListener((port) => {
            if (port.name === "getImg") {
                port.onMessage.addListener((msg) => {
                    console.log(msg);
                    port.postMessage({ response: "Received your message!" });
                });
            }
        });
    }

    reciveMessage();
})


