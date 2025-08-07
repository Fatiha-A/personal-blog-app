# 📝 Personal Blog App

A clean, responsive, and user-friendly personal blog application built with **React**, **Tailwind CSS**, **Jotai**, and **Vite**. Users can create, edit, delete, and bookmark blog posts. All data persists using `localStorage`.

---

## 🚀 Features

- 📰 View all blog posts (Home Page)
- ⭐ Bookmark blogs to save for later
- ➕ Create a new blog using a modal form
- 📝 Edit blog posts inline
- 🗑️ Delete blog posts inline
- 🔍 Search through blog posts by title or author
- 💾 Persistent storage using `localStorage`
- 🎨 Responsive design with Tailwind CSS

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- Jotai (global state management)
- localStorage (persistent storage)
- React Router DOM (page routing)

---

## 📁 Folder Structure

```
src/
│
├── assets/              # Images & sample data
│   └── screenshots/     # Project screenshots
│   └── sampleBlogs.js
│
├── atoms/               # Jotai blog atom state
│   └── BlogAtom.js
│
├── components/          # Reusable components
│   ├── BlogCard.jsx
│   ├── BlogForm.jsx
│   └── Navbar.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/               # Main pages
│   ├── Home.jsx
│   ├── Bookmarks.jsx
│   └── BlogDetails.jsx
│
├── App.jsx              # Main app component with routes
├── main.jsx             # App entry point
├── App.css
└── index.css
```

---

## 🖼️ Screenshots

| Page         | Screenshot                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------- |
| Home Page    | ![Home](https://github.com/Fatiha-A/personal-blog-app/blob/main/src/assets/screenshots/HomePage.png?raw=true)       |
| Bookmarks    | ![Bookmarks](https://github.com/Fatiha-A/personal-blog-app/blob/main/src/assets/screenshots/Bookmarks.png?raw=true) |
| Blog Details | ![Details](https://github.com/Fatiha-A/personal-blog-app/blob/main/src/assets/screenshots/DetailPage.png?raw=true)  |
| Edit Blog    | ![Edit](https://github.com/Fatiha-A/personal-blog-app/blob/main/src/assets/screenshots/Edit.png?raw=true)           |
| Create Blog  | ![Create](https://github.com/Fatiha-A/personal-blog-app/blob/main/src/assets/screenshots/Create.png?raw=true)       |

---

## 🧭 Pages

- **Home**: View all blogs, featured blog, and responsive grid layout.
- **Blog Details**: Shows full blog content with title, author, date, and image.
- **Bookmarks**: Saved blog posts for later reading.

> ✅ Note: Blog creation and editing are done inline via modal — not separate pages.

---

## 🧩 Components

- `BlogForm.jsx`: Reusable form for creating/editing blogs (modal)
- `BlogCard.jsx`: Card UI for displaying blog info
- `Navbar.jsx`: Navigation bar with page links

---

## 💾 Persistent Storage

Uses a custom `useLocalStorage()` hook to store blogs and bookmarks across sessions.

---

## 💻 Installation & Setup

### 1. Clone the repository

You can use 'VS Code Source Control tab' or run in terminal:

```bash
git clone https://github.com/Fatiha-A/personal-blog-app.git
cd personal-blog-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
App will run at 🔗 http://localhost:5173
```

---

## 🎨 Design Reference

This app was inspired by a custom **Figma** design with:

- ✅ Featured blog section (full-width)
- ✅ Overlay text on blog images
- ✅ Responsive grid layout
- ✅ Matching fonts and spacing

---

## 🌐 Live Demo

🔗 [https://personal-blog-app-pearl.vercel.app](https://personal-blog-app-pearl.vercel.app)

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

Created by Fethya Awol

📧 **fethyaawol19@gmail.com**  
🔗 GitHub: [Fatiha-A](https://github.com/Fatiha-A)
