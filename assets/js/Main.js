let timerTag = document.getElementById('timer');
let messageTag = document.getElementById('message');
let dateTag = document.getElementById('date_str');
let dateNumTag = document.getElementById('date_number');
let searchInp = document.getElementById('search_input');
let buttonTag = document.getElementById('search_btn');

buttonTag.addEventListener("click", () => {
    if (searchInp.value.length > 0) {
        chrome.tabs.update(null, { url: `https://google.com/search?q=${searchInp.value}` })
    }
})

document.addEventListener("keydown", (e) => {
    if (searchInp.value.length > 0) {
        if (e.key === "Enter") {
            chrome.tabs.update(null, { url: `https://google.com/search?q=${searchInp.value}` })
        }
    }
})

function updateTime() {
    const now = new Date().toLocaleTimeString("fa-IR", { hour12: false });
    timerTag.innerText = now;
}

// هر یک ثانیه
setInterval(updateTime, 1000);

function getHour() {
    // اعداد فارسی رو نمیتونه با ساعت انگلیسی تطابق بده و در نتیجه به درستی اجرا نمیشه
    const now = new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit" });

    if (now >= 6 && now < 12) {
        messageTag.innerText = "روزت بخیر باشه برنامه نویس پرتلاض من!"
    } else if (now >= 12 && now < 16) {
        messageTag.innerText = "ظهرت بخیر، برنامه نویس کوشا👌😉"
    } else if (now >= 16 && now < 18) {
        messageTag.innerText = "عصر زیبای تو بخیر"
    } else {
        messageTag.innerText = "شبت بخیر! یادت باشه دنیا به تو افتخار میکنه🌹"
    }
}
getHour();
// هر یک دقیقه اجرا میشه تا هر زمان که لازم بود نوشته پیغام رو تغییر بده
setInterval(getHour, 60 * 1000);

function getData() {
    const year = new Date().toLocaleString("fa-IR", { year: "numeric" });
    const month = new Date().toLocaleString("fa-IR", { month: "long" });
    const monthNum = new Date().toLocaleString("fa-IR", { month: "numeric" });
    const day = new Date().toLocaleString("fa-IR", { day: "numeric" });
    const weekday = new Date().toLocaleString("fa-IR", { weekday: "long" });

    dateTag.textContent = `${weekday} ${day} ${month} ${year}`;
    dateNumTag.textContent = `${day} / ${monthNum} / ${year}`;
}

getData();