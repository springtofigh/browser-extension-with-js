## ⏱️ SabzLearn Reading Time Calculator

### 📌 Overview
This Chrome extension calculates and displays the estimated reading time for articles on the  
[SabzLearn](https://sabzlearn.ir/) website.  
Its goal is to help readers quickly understand how long an article will take to read before starting it.
## ⏱️ Reading Time — User Flow

1. Navigate to the [SabzLearn](https://sabzlearn.ir/) website and open any article.
2. The extension automatically scans the article content.
3. It calculates an estimated reading time based on:
   - total word count  
   - average reading speed  
4. The estimated reading time is displayed directly on the page.
5. Refreshing or navigating to another article updates the estimation automatically.

## ⚙️ How It Works

1. The extension injects a content script into article pages on **SabzLearn**.
2. It selects the main article container and extracts the visible text.
3. The text is split into words to calculate the total word count.
4. The reading time is estimated using a standard average reading speed  
   (commonly **200–250 words per minute**).
5. The calculated reading time is then rendered inside the article page  
   as a small UI element.
6. Navigating to a new article triggers the same process automatically.

---

## ⚠️ Known Limitations

- The extension is **specifically designed** for the SabzLearn website and does not work on other sites.
- Changes in page layout or CSS selectors may break text extraction.
- Mixed content (code blocks, tables, etc.) may affect reading-time accuracy.
- No user settings for customizing reading speed or UI behavior.