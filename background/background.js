console.log("kaftar")

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //درخواست ارسال شده از فایل پاپ‌آپ
    // console.log(request.message)

    console.log(sender)

    //از این تابع استفاده میکنیم تا پاسخ به فایل پاپ‌آپ ارسال کنیم
    sendResponse({ message: "Hello to you" })
})