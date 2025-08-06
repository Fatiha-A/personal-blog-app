import { Link, useLocation } from "react-router-dom";
import { sampleBlogs } from "../assets/sampleBlogs";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const author = sampleBlogs[0]?.author || "Author";
  const role = sampleBlogs[0]?.role || "Role";

  return (
    <nav className="fixed z-50 w-full bg-white shadow-md px-6 md:px-12 py-4 flex justify-between items-center rounded-2xl font-[Poppins]">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold text-gray-900">Blog</h1>
      </div>
      <div className="flex justify-between lg:px-22 sm:flex gap-6 text-gray-800 text-sm font-medium">
        <Link className="bg-gray-900 text-white   rounded" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/bookmarks">Saved</Link>
      </div>

      {isHome ? (
        <Link
          to="/?create=true"
          className="bg-gray-900 text-white px-1 py-2  rounded-1xl sm:flex rounded hover:bg-blue-700 text-sm font-medium"
        >
          Post a Blog
        </Link>
      ) : (
        <div className="flex items-center px-6 md:px-12 gap-3">
          <img
            src={`https://ui-avatars.com/api/?name=${author}&background=random`}
            alt={author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block px-6 text-right">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-gray-500">{role}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
