# 🎨 Color Finder Chrome Extension

The **Color Finder** extension allows users to pick any color from any webpage and instantly view its HEX code inside the popup. This tool is ideal for developers, designers, and anyone who needs quick color extraction directly from the browser.

---

## 🚀 Features

- **Pick Color Mode:**  
  Clicking the main button in the popup activates color-picking mode.  
  The cursor changes to a color-picker icon, indicating that the user can now select any area of the browser window.

- **Extract HEX Code:**  
  When the user clicks on any element on the page, the extension captures the color beneath the cursor and displays its **HEX code** in the popup.

- **Color Preview Box:**  
  The extracted HEX value is shown along with a small colored box that visually represents the selected color.

- **Click to Copy:**  
  Users can click the displayed HEX code to copy it directly to the clipboard.

- **Automatic Reset:**  
  Closing the popup or clicking elsewhere resets the UI and removes previously selected colors, allowing the user to pick a new color each time.

---

## 📂 How It Works (Overview)

1. The user opens the popup and clicks **"دریافت رنگ"**.
2. The extension injects logic into the active tab and activates Chrome’s built-in **EyeDropper API** (or equivalent implementation depending on your build).
3. The cursor turns into a color selection tool.
4. The user clicks anywhere on the page.
5. The selected color’s HEX code is sent back to the popup.
6. The popup displays the color and allows copying to clipboard.

---

## 🖼️ User Flow

1. Open the extension popup.
2. Click **"دریافت رنگ"**.
3. Click anywhere on the webpage to select a color.
5. The HEX code appears inside the popup (with a preview box).
6. Click the HEX value to copy it to clipboard.


---

## 🛠️ Technologies Used

- **JavaScript (Vanilla)**
- **Chrome Extensions API**
- **Popup UI (HTML/CSS)**
- **Chrome Messaging (runtime API)**
- **Clipboard API**
- **EyeDropper API (where supported)**

---

## 