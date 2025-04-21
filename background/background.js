import { hi, goodby } from "./tools.js";

hi();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    //درخواست ارسال شده از فایل پاپ‌آپ
    // console.log(request.message)

    console.log(sender)

    //از این تابع استفاده میکنیم تا پاسخ به فایل پاپ‌آپ ارسال کنیم
    sendResponse({ message: "Hello to you" })
})


chrome.storage.local.set({name: "bahar", age: 25}, () => {
    console.log("data is save")
})

chrome.storage.local.get(["name", "age"], (result) => {
    console.log(result)
    console.log(result.name)
    console.log(result.age)
})

// chrome.storage.local.remove(["name"], (result) => {
//     console.log("The name is remove", result)
// })

chrome.storage.local.get({ name:"barana" }, (result) => {
    console.log(result.name)
})

// chrome.storage.local.remove(["name"], (result) => {
//     console.log("The name is remove", result)
// })

// chrome.storage.local.set({age: 27}, () => {
//     console.log("data is updated")
// })

// chrome.storage.local.get(["age"], (result) => {
//     console.log(result.age)
// })