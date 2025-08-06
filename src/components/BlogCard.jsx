import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`} className="block h-full">
      <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover border-gray-200 rounded-3xl"
        />
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h3 className="text-sm font-semibold mb-2 leading-tight line-clamp-2 font-[Poppins]">
              {blog.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 font-[Poppins]">
              {blog.description}
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 text-sm text-gray-600 font-[Poppins]">
            <img
              src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`}
              alt={blog.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-gray-600">
                {blog.author} • {blog.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
