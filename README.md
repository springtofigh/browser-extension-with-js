# Image Downloader Extension 🖼️

A simple Chrome extension that allows users to extract and download all images from the current webpage directly through the extension popup. Perfect for quickly collecting assets, wallpapers, product images, or any visual content on a website.

---

## 📸 Features

- **Single–Click Image Extraction**  
  When the user clicks the **دریافت تصویر** button inside the popup, the extension scans the current tab and retrieves all image sources available on that page.

- **Scrollable Image List**  
  All detected images are displayed inside the popup in a vertical list format.

- **One-Click Download**  
  Clicking any displayed image immediately downloads it using the browser’s native download functionality.

- **Works on Most Websites**  
  The extension attempts to detect images from `<img>`, background images, and other common image containers.

---

## 🧠 How It Works

- The popup sends a message to a content script.
- The content script collects all image URLs from the active page.
- The popup dynamically renders them in a list.
- Clicking on any image triggers a direct download using `chrome.downloads.download`.

---

## 🚀 Installation (Developer Mode)

1. Download or clone the repository.
2. Open **chrome://extensions/**
3. Enable **Developer mode** (top right).
4. Click **Load unpacked**.
5. Select the project folder.

You're ready to extract and download images instantly!

---