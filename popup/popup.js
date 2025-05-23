window.addEventListener("load", () => {
    const getImg = document.getElementById("get_img");

    getImg.addEventListener("click", async (e) => {

            const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
            if (tabs.length === 0) {
                console.error('No active tabs found.');
                return;
            }

            const currentTab = tabs[0];
            const port = chrome.tabs.connect(currentTab.id, { name: "getImg" });
            if (chrome.runtime.lastError) {
                console.error('Connection error:', chrome.runtime.lastError);
                return;
            }

            port.postMessage({ message: "hello from popup" });

            port.onMessage.addListener(msg => {
                const imgSource = msg.response;
                if (Array.isArray(imgSource)) {
                    const ContainerImg = document.getElementById("container_img");
                    ContainerImg.innerHTML = '';
                    imgSource.forEach(imgUrl => {
                        const img = document.createElement('img');
                        img.src = imgUrl;
                        ContainerImg.appendChild(img);
                        img.addEventListener('click', e => {
                            // میشه این قسمت رو به یک تابع تبدیل کرد
                            const imgUrl = e.target.src;
                            const link = document.createElement("a");
                            link.href = imgUrl;
                            link.download = "img.png";
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        });
                    });
                } else {
                    console.error('Expected an array of image URLs but received:', imgSource);
                }
            });

            // Optionally disconnect the port after a certain logic or after messages received
            // port.disconnect(); // Uncomment if you want to close the connection after usage
        
    });
});