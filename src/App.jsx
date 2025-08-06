import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import Bookmarks from "./pages/Bookmarks";
import { useAtom } from "jotai";
import { blogsAtom, bookmarksAtom } from "./atoms/BlogAtom";
import { useEffect } from "react";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
export default function App() {
  const [blogs] = useAtom(blogsAtom);
  const [bookmarks] = useAtom(bookmarksAtom);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-poppins">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
      <footer className="w-full border-t border-gray-900 p-1 m-2 px-6 rounded-2xl bg-gray-950 md:px-12 font-[Poppins]">
        <div className="flex flex-1/3-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-200 w-full md:w-1/3 text-left">
            Blog
          </h1>

          <p className="text-sm text-gray-200 text-center w-full md:w-1/3">
            © 2025 Your Blog. All rights reserved.
          </p>

          <div className="flex gap-4 w-full md:w-1/3 bg-gay-900 justify-center md:justify-end">
            <img
              src={image2}
              alt="logo1"
              className="w-9 h-9 bg-gray-700 rounded-3xl object-contain"
            />
            <img
              src={image3}
              alt="logo2"
              className="w-9 h-9 rounded-3xl  bg-gray-200 object-contain"
            />
            <img
              src={image4}
              alt="logo3"
              className="w-9 h-9 rounded-3xl bg-gray-900 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
