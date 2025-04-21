let btnColorGet = document.getElementById("get-color");

btnColorGet.addEventListener("click", () => {
    function setup() {
        if (window.EyeDropper === undefined) {
            alert("متأسفانه از مرورگر شما پشتیبانی نمیشود");
            return
        } else {
            pickColor();
        }
    }
    setup();

    async function pickColor() {
        try {
            const eyeDropper = new EyeDropper;

            const HEX_color = await eyeDropper.open();
            const showColor = document.getElementById("show-color");
            const liElement = document.createElement("li");
            liElement.style.border = `2px solid ${HEX_color.sRGBHex}`;
            liElement.textContent = HEX_color.sRGBHex;
            liElement.addEventListener("click", e => {
                let copiedMsg = document.getElementById("copiedMsg")
                copiedMsg.innerHTML = ""
                navigator.clipboard.writeText(HEX_color.sRGBHex)
                    .then(
                        () => {
                            copiedMsg.innerHTML = "<span>کپی شد!</span>"
                            console.log("copied!")
                            setTimeout(() => {
                                copiedMsg.innerHTML = ""
                            }, 2000)
                        }
                    )
                    .catch(
                        (err) => {
                            console.log(err)
                        }
                    )
            })
            showColor.appendChild(liElement);
            // اسکرول به پایین
            setTimeout(() => {
                showColor.scrollTo({
                    top: showColor.scrollHeight,
                    behavior: 'smooth'
                });
            }, 50); // کمی تأخیر
        } catch (error) {
            console.log(error)
        }
    }

})