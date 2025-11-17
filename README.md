## 🚫 Site Blocker

### 📌 Overview
This Chrome extension allows users to block specific websites they don’t want to visit.  
When a blocked site is opened, the extension replaces the page content with a custom  
“Site Blocked” screen. Users can easily remove a site from the blocked list through the popup.

---

## 👣 User Flow

1. Open the extension popup.
2. Click **“مسدودکننده سایت”** to add the current website to the blocked list.
3. Once blocked, revisiting that website shows a **“!شما این سایت را مسدود کرده اید”** message page.
4. To unblock, open the popup and press **“حذف از لیست مسدودی”**.
5. Refresh the page — the website will load normally again.

---

## ⚙️ How It Works

1. The extension checks the active tab URL against a stored list of blocked domains.
2. When a match is found, a blocking page is injected (or the DOM is replaced) to prevent access.
3. The blocked sites list is stored using **Chrome Storage**.
4. Popup actions allow users to:
   - add the current site to the list  
   - remove it from the list  
5. A page refresh updates the state and re-evaluates block rules.

---

## ⚠️ Known Limitations

- Blocking works on a domain basis (e.g., blocking `example.com` blocks all its pages).
- Pages that dynamically change their URL may bypass detection.
- Private windows may behave differently depending on Chrome extension settings.
- The extension includes no scheduling or advanced filtering features.