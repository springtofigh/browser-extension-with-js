# Minimal New Tab Theme 🐾

A simple and lightweight Chrome extension that replaces the default New Tab page with a clean, motivational, and visually appealing design featuring a nature background, live clock, date display, and inspirational messages.

## 🌟 Features

- 🖼️ **Nature Background**  
  Displays a full-width, high-quality nature wallpaper for a calm browsing experience.

- 🕒 **Live Digital Clock**  
  Shows the current time in a large, centered digital style.

- 📅 **Today’s Date**  
  Includes both Gregorian and Persian dates for dual-calendar users.

- 💬 **Inspirational Message**  
  Displays a motivational line that updates depending on the time of day (e.g., “Have a good night!”).

- 🔍 **Google Search Bar**  
  Includes a functional search input styled to match the theme.


## ⚙️ How It Works

- Overrides the default Chrome New Tab using `"chrome_url_overrides"` in `manifest.json`.
- Renders a custom HTML page styled with CSS.
- Uses JavaScript to:
  - Fetch and format current time.
  - Display both Persian and Gregorian dates.
  - Update motivational text based on the hour.
  - Handle search input events.

## 🚀 Installation (Developer Mode)

1. Clone or download the repository.
2. Go to: **chrome://extensions/**
3. Enable **Developer Mode** (top-right).
4. Click **Load unpacked**.
5. Select the project folder.

Your custom new tab page is now active!

---

