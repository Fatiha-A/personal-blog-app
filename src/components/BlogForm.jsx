import { useState } from "react";

export default function BlogForm({ initialData, onSave, onClose, isEdit }) {
  const [form, setForm] = useState(
    initialData || {
      title: "",
      author: "",
      role: "",
      date: "",
      description: "",
      content: "",
      image: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      form.title &&
      form.author &&
      form.date &&
      form.description &&
      form.content &&
      form.image
    ) {
      onSave(form);
    } else {
      alert("Please fill all required fields.");
    }
  };

  return (
    <div className=" flex justify-center bg-opacity-40 px-4 rounded-3xl placeholder-cyan-100">
      <div className=" max-w-1x1 px-6  bg-white border-gray-200 rounded-2xl shadow-lg font-[Poppins]">
        <h2 className="text-2xl px-16 font-semibold mb-2">
          {isEdit ? "Edit Your Post" : "Post a Blog"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 text-sm">
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Author</label>
              <input
                name="author"
                value={form.author}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg"
                placeholder="Full Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block font-medium mb-1">Role</label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg"
                placeholder="e.g. UI Designer"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-medium mb-1">Image URL</label>
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg"
                placeholder="Paste blog image URL"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Short Description</label>
            <textarea
              name="description"
              rows="2"
              value={form.description}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-1 rounded-lg"
              placeholder="Brief summary..."
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Full Content</label>
            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-1 rounded-lg"
              placeholder="Write the blog content..."
            />
          </div>

          <div className=" flex flex-row justify-between py-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="  px-2 py-1 rounded-md bg-red-700 text-gray-200 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1 rounded-md bg-gray-900 text-white hover:bg-gray-800"
            >
              {isEdit ? "Save" : "save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
