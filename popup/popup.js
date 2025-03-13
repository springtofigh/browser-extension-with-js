console.log("extention")

const btn = document.getElementById("replace_btn");

function replace() {
    // این آیدی بسیار مهمه
    // window.location.href = 'chrome-extension://jpkegnchdpngbnfdakamjlcpndnnpjek/popup/dashboard.html'

    //جهت جلوگیری از شلوغی کدها و تکرار نکردن chrome-extension://jpkegnchdpngbnfdakamjlcpndnnpjek
    let url_file = chrome.runtime.getURL('popup/dashboard.html') //در مسیردهی خیلی مهمه که حواسمون به فولدر باشه
    chrome.tabs.create({url:url_file})
}

btn.addEventListener("click" , replace)