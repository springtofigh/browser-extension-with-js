## 🎨 Theme Page Extension

### 📌 Overview
This Chrome extension replaces the default New Tab page with a customizable, beautifully designed dashboard.  
It provides users with daily utilities such as date display, to-do management, bookmarks, and a redesigned Google search input — all wrapped inside an aesthetic UI inspired by popular new-tab extensions.

---

## 🧩 Features

### ✅ Custom Background  
A unique theme is applied to every new tab, replacing Chrome’s default layout.

### 🕒 Date & Time Display  
- Live digital clock  
- Full Gregorian date (numeric + textual)  
- Full Persian date (numeric + textual)

### 📝 To-Do List  
- Add new tasks  
- Edit existing tasks  
- Delete tasks  
- Tasks displayed on the right-hand interactive panel

### 🔖 Quick Bookmarks  
- Add bookmarks with one click  
- Each bookmark appears as a colorful tile on the dashboard  
- Clicking the tile opens the link instantly

### ⏲️ Pomodoro Timer (25 minutes)
A focus timer that counts down 25 minutes with start/pause/reset controls, integrated directly on the dashboard.

### 📚 Bookmark Manager
A separate panel showing:
- full list of saved bookmarks  
- ability to delete bookmarks  
- cleaner management UI  

### 🔍 Custom Google Search Box  
A redesigned search input with a modern look that sends queries directly to Google.

---

## 👣 User Flow

1. Open a new browser tab after installing the extension.  
2. The themed dashboard loads automatically, replacing Chrome’s default New Tab page.  
3. Interact with:
   - Clock & date widgets  
   - To-do list panel  
   - Bookmark tiles  
   - Search box  
4. Add/edit/remove content directly from the interface.  
5. Changes are saved instantly using Chrome Storage.

---

## ⚙️ How It Works

1. The extension overrides the New Tab page using the `chrome_url_overrides` API.  
2. Custom UI loads from an HTML/CSS/JS interface styled as the dashboard.  
3. Date/time widgets update via JavaScript timers.  
4. The search bar redirects user queries to Google with `https://google.com/search?q=`.

---

## ⚠️ Known Limitations

- Only works on the New Tab page (not on regular websites).  
- Changing themes or backgrounds is not yet supported.  

