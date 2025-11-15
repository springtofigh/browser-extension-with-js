# 🔤 Font Detector Chrome Extension

The **Font Detector** extension allows users to hover over any element on a webpage and instantly view the list of fonts applied to that element. This is especially useful for designers, developers, and anyone curious about typography used on websites.

---

## 🚀 Features

- **Font Detection Mode:**  
  Clicking the **"دریافت فونت"** button in the popup activates the font detection mode.  
  Once activated, hovering over any element on the page displays all the fonts applied to that element inside a red floating box next to the cursor.

- **Real-Time Hover Preview:**  
  As the cursor moves across different elements, the red info box updates live, showing the font stack of the current element.

- **Clear Fonts / Reset Mode:**  
  Clicking the **"حذف فونت"** button removes the red font box from the screen and exits detection mode.

---

## 🖼️ User Flow — Font Detector

1. Open the extension popup.
2. Click **"دریافت فونت"**.
3.  Move the cursor over any element on the webpage.
5. A red tooltip appears next to the hovered element, showing the resolved fonts.
6. Move the cursor to other elements to update the tooltip dynamically.
7. Click **"حذف فونت"** to hide the tooltip and exit font-detection mode.



---

## 📂 How It Works (General Behavior)

<!-- - The popup sends a request to the content script to enable font detection mode.
- The content script:
  - Listens for mouse movements
  - Reads the computed `font-family` of the hovered element
  - Shows the list of fonts inside a red floating box positioned near the cursor
- When the user clicks **“Remove Font”**, the floating box is removed and event listeners are cleaned up. -->

- The popup triggers enabling or disabling the font detection mode.
- When enabled, the extension displays a floating red box beside the cursor containing the fonts of the hovered element.
- When disabled, the red box is removed and the page returns to normal.

---

## ✨ Notes

- The extension shows *all* fonts applied to the hovered element, as seen by the user.
- The font display disappears completely when detection mode is turned off.
