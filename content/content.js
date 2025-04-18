const articleText = document.querySelector(".wp-content");

if (articleText) {
    const articleContent = articleText.textContent;
    const wordRegex = /[^\s]+/g
    const textRegex = articleContent.matchAll(wordRegex);
    const countTime = [...textRegex].length;
    const readingTime = Math.round(countTime / 200);
    const pElement = document.createElement("p");
    pElement.textContent = `مدت زمان مطالعه: ${readingTime} دقیقه`;
    pElement.classList.add('raeding-time');

    articleText.insertBefore(pElement, articleText.firstChild)
}