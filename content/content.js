// const allImages = document.querySelectorAll('img');

// allImages.forEach(img => {
//     console.log(img)
// })

window.addEventListener("load", () => {

    async function getImg() {
        const AllImg = document.querySelectorAll("img")
        const ImgSource = Array.from(AllImg).map(img => img.src)
        return ImgSource
    }


    async function reciveMessage() {
        chrome.runtime.onConnect.addListener(async (port) => {
            if (port.name === "getImg") {
                port.onMessage.addListener((msg) => {
                    console.log(msg.message);
                    port.postMessage({ response: "Received your message!" });
                });
                const GetImgSource = await getImg()
                port.postMessage({ response: GetImgSource })
            }
        });
    }

    reciveMessage();
})


