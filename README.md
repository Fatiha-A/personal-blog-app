# 📝 React Personal Blog App

A responsive personal blog application built with React, Tailwind CSS, Jotai, and React Router. This app allows users to view, create, edit, delete, and bookmark blog posts with a clean and user-friendly interface. Built to match a Figma design, it works smoothly across all screen sizes.

## Features

- 🏠 _Home Page_
- Displays a featured blog and a list of recent blogs in a responsive layout.
- 📝 _Create Blog Post_
  Add new posts using a reusable blogform component.
- ✏️ _Edit Blog Post_
  with pre-filled blogform data
- 🗑️ _Dlete blog post_
  remove Blog Post with confirmation
  Bookmark Blogs
- 🔖 save and view them on a saved page
- 🔗 Dynamic Routing
  Navigate between pages like Home, Blog Details, and Bookmarks using React Router.
- 🧠 Global State with Jotai
  All blog data and bookmarks are shared across components via atoms.
- 💾 Persistent Storage using `localStorage`
- 🎨 Responsive Design
  Clean, mobile-first layout using Tailwind CSS only.

## Tech Stack

Tool and Purpose

- React -Frontend UI framework
- Vite -Fast dev/build setup
- React Router DOM -Page navigation
- Jotai -Global state management
- Tailwind CSS -Utility-first responsive styling
- React Icons -Icons for UI e;ements
- localStorage -Persistent client-side data
- UUID -Unique ID generation for blogs

## Folder Structure

src/
├── assets/ # Blog images and sample data
├── atoms/ # Jotai atoms for blog & bookmark state/BlogAtom
├── components/ # Reusable UI components like Navbar, BlogCard and BlogForm
├── hooks/ # Custom hook: useLocalStorage
├── pages/ # All route pages like Home, BlogDetail and Bookmarks
├── App.jsx # App component with routes
├── main.jsx # Entry point
├── App.css # Extra styling if needed
└── index.css # Tailwind CSS directives

## 💻 Installation & Setup

1. Clone the Repository
   You can use 'VS Code Source Control tab' or run in terminal:

```bash
git clone https://github.com/Fatiha-A/personal-blog-app.git
cd personal-blog-app

2. Install Dependencies
bash
npm install
or with Yarn:
bash
yarn install

3. Start the App
bash
npm run dev
App will run at 🔗 http://localhost:5173

📷 Screenshots
screenshots:
Home Page * *
Create Blog Page * *
Blog Details Page * *
EditBlog * *
CreateBlog * *

Usage Instructions
● Home page View all recent blogs and featured blog.
●Click a blog to view full details
● Edit or delete from blog details page
● Use the bookmark icon to add or remove blogs from your bookmarks.
● Visit "Saved" page to view bookmarked blogs
● Navigate to /post a blog  and use create blog form in home to publish new posts
● Data is saved in localStorage and persists after refresh

Key Concepts
● Reusable BlogForm used for both Creating and Editing blogs.
● Jotai atoms manage global blog/bookmark state
● Custom hook keeps state synced with localStorage
● React Router used for all navigation
● Routing with useParams & useNavigate
Dynamic routes for blog details and editing.
● Tailwind CSS for responsive layout and styling

Future Improvements
● Add user login/signup (authentication)
● Add rich text editor support
● Enable Image uploads
● Add Pagination / infinite scroll
● Backend integration
● Better animations & loading states

🔗 Live Demo
🌍 https://personal-blog-app-pearl.vercel.app/

🎨 Design Reference
This project follows a custom Figma design to ensure a polished and visually consistent user experience. Key design features include:
- Featured blog section (full-width background)
- Overlay text on blog images.
- Responsive grid layout for blog cards.
- Matching fonts and spacing, and color style.

License
This project is open-source and available under the MIT License.

  Contact
 Created by Fatiha
📧 fethiaawol@gmail.com
🔗 GitHub Profile

```
