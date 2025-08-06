import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { blogsAtom } from "../atoms/BlogAtom";
import { useLocation, useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import image1 from "../assets/image1.png";
import blog1 from "../assets/blog1.png";
import { sampleBlogs } from "../assets/sampleBlogs";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const [blogs, setBlogs] = useAtom(blogsAtom);
  const [showForm, setShowForm] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setShowForm(params.get("create") === "true");
  }, [location.search]);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleCreate = (newBlog) => {
    const blogWithId = { ...newBlog, id: Date.now() };
    setBlogs([blogWithId, ...(blogs.length ? blogs : sampleBlogs)]);
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen  bg-white px-12 py-1 border-gray-200 rounded-3xl mb-16 gap-6 text-gray-800 font-[Inter]">
      <section className="relative w-full h-[80vh] mb-14 mt-20 diplay-flex">
        <img
          src={blog1}
          alt="Featured Blog Background"
          className="w-full h-full object-cover border-gray-200 rounded-3xl"
        />

        <div className="absolute inset-0 bg-blue bg-opacity-40 flex flex-col justify-end px-6 md:px-12 py-10">
          <p className="text-white font-semibold text-sm mb-2 tracking-wider">
            Featured
          </p>
          <h1 className="text-white text-2xl md:text-4xl font-bold leading-snug font-[Irish_Grover] max-w-3xl">
            Breaking into Product Design:
            <br /> Advice from Untitled Founder, Frankie
          </h1>
          <p className="text-gray-200 mt-3 md:mt-5 text-sm md:text-base max-w-3xl font-[Inter], border-black">
            Let’s get one thing out of the way: you don’t need a fancy
            <br />
            Bachelor’s Degree to get into Product Design. We sat down
            <br /> with Frankie Sallivan to talk about gatekeeping in product
            <br /> design and how anyone can get into this growing industry.
          </p>

          <div className="absolute bottom-10 right-6 md:right-12 w-20 md:w-28">
            <img
              src={image1}
              alt="Thumbnail"
              className="w-full h-auto rounded-lg shadow-md border border-none"
            />
          </div>
        </div>
      </section>

      <section className="px-4 md:px-12 lg:px-20 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Recent Blog Posts
        </h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {sampleBlogs.map((blog) => (
            <div key={blog.id} className="w-full sm:w-[48%] lg:w-[30%]">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-2 border bg-black  text-white rounded-md hover:bg-black hover:text-white transition">
            Show more
          </button>
        </div>
      </section>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <BlogForm
            isEdit={false}
            initialData={null}
            onClose={() => navigate("/")}
            onSave={handleCreate}
          />
        </div>
      )}
    </div>
  );
}
