import { useParams, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { blogsAtom, bookmarksAtom } from "../atoms/BlogAtom";
import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaBookmark, FaRegBookmark } from "react-icons/fa";
import BlogForm from "../components/BlogForm";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const blog = blogs.find((b) => b.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarks.some((b) => b.id === blog?.id)
  );

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Blog not found.
      </div>
    );
  }

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      const updated = blogs.filter((b) => b.id !== blog.id);
      setBlogs(updated);
      navigate("/");
    }
  };

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter((b) => b.id !== blog.id));
    } else {
      setBookmarks([...bookmarks, blog]);
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen bg-white font-[Poppins] text-gray-800 relative">
      <div className="flex flex-col  md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-6 border-gray-200">
        <div className="flex items-center mt-20 gap-4 mb-4 md:mb-0">
          <img
            src={`https://ui-avatars.com/api/?name=${blog.author}`}
            alt={blog.author}
            className="w-14 h-14 rounded-full"
          />
          <div>
            <p className="text-lg font-semibold">{blog.author}</p>
            <p className="text-sm text-gray-500">Posted on {blog.date}</p>
          </div>
        </div>

        <div className="flex gap-4 text-2xl text-gray-700">
          <button onClick={() => setIsEditing(true)} title="Edit">
            <FaEdit />
          </button>
          <button onClick={handleDelete} title="Delete">
            <FaTrash />
          </button>
          <button onClick={toggleBookmark} title="Bookmark">
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </div>

      <div className="w-full bg-gray-50 px-12 md:px-16 py-12">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-3xl "
        />
      </div>

      <div className="px-6 md:px-16 py-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
          {blog.title}
        </h1>
        <p className="text-gray-700 text-base mb-8">{blog.description}</p>
        <div className="text-gray-800 text-sm md:text-base leading-7 whitespace-pre-wrap">
          {blog.content || "No content available."}
        </div>
      </div>

      <div className="px-6 md:px-16 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded"
        >
          ← Back
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <BlogForm
            initialData={blog}
            isEdit={true}
            onSave={(updatedBlog) => {
              const updated = blogs.map((b) =>
                b.id === blog.id ? { ...b, ...updatedBlog } : b
              );
              setBlogs(updated);
              setIsEditing(false);
            }}
            onClose={() => setIsEditing(false)}
          />
        </div>
      )}
    </div>
  );
}
