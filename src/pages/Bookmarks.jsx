import { useAtom } from "jotai";
import { useEffect } from "react";
import { bookmarksAtom } from "../atoms/BlogAtom";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const removeBookmark = (id) => {
    const updated = bookmarks.filter((blog) => blog.id !== id);
    setBookmarks(updated);
  };

  return (
    <div className="min-h-screen px-6 md:px-12 py-10 bg-blue font-[Poppins]">
      <h2 className="text-2xl font-bold mb-6 mt-15">Saved Blogs</h2>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600 text-lg">No saved posts yet.</p>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center border-gray-200 rounded-3xl">
          {bookmarks.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md border-white rounded-3xl overflow-hidden hover:shadow-lg transition duration-300 w-full sm:w-[48%] lg:w-[30%] flex flex-col relative"
            >
              <button
                onClick={() => removeBookmark(blog.id)}
                className="absolute top-3 right-3 text-black hover:text-red-600 z-10"
                title="Remove Bookmark"
              >
                <FaBookmark size={20} />
              </button>

              <div className="flex items-center gap-3 px-4 pt-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-sm text-gray-700">
                  <p className="font-semibold">{blog.author}</p>
                  <p className="text-xs text-gray-500">
                    {blog.role || "Author"} • {blog.date}
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-3 px-4 leading-tight line-clamp-2">
                {blog.title}
              </h3>

              <img
                src={blog.image}
                alt={blog.title}
                className="flex-1 p-2 m-2"
              />

              {/* Content */}
              <div className="p-4 flex-1 flex flex-col justify-center">
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {blog.description}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                  {blog.content}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="px-6 py-12 md:px-16 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}
