## 📑 Tab Retriever Extension

### 📌 Overview
This Chrome extension allows users to retrieve and view a complete list of all their open browser tabs.  
The active tab is visually highlighted for convenience, making it easy to understand which tab is currently in use.

---

## 👣 User Flow

1. Click the extension icon to open the popup.
2. Inside the popup, press the **“Get Your Tabs”** button.
3. The extension fetches all currently open tabs across the browser.
4. A list of tabs appears below the button:
   - The **active tab** is shown inside a **blue background box**.
   - All **other tabs** are shown inside **green background boxes**.
5. The list updates each time the button is clicked.

---

## ⚙️ How It Works

1. When the user clicks the button, the popup script calls the `chrome.tabs.query` API.
2. The query returns all open tabs along with metadata like:
   - tab title  
   - tab ID  
   - active state  
   - URL  
3. The popup dynamically renders each tab as a styled item:
   - If `tab.active === true` → apply blue highlight  
   - Otherwise → apply green highlight  
4. The UI is cleared and rebuilt every time the user requests the tab list.

---

## ⚠️ Known Limitations

- If Chrome restricts tab access (e.g., system pages or special URLs), those tabs may not appear.
- Requires `"tabs"` permission in `manifest.json`.
