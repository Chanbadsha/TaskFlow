import { useState } from "react";
import { useNavigate } from "react-router";

const AddNewTask = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("moderate");
  const [category, setCategory] = useState("To-Do");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setImageError("File size exceeds 5MB");
      } else {
        setImage(file);
        setImageError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, date, priority, category, description, image });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto p-6">
      {/*  Header Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex gap-1 justify-between items-center">
          <div className="w-10/12">
            <h1 className="text-xl lg:text-3xl font-semibold text-gray-900">Create a New Task</h1>
            <p className="text-gray-600 mt-1 text-xs md:text-base">
              Organize your work efficiently by adding new tasks with priorities and deadlines.
            </p>
          </div>
          <button 
            className="text-gray-600 w-2/12 hover:text-gray-800 text-xs md:text-base"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>

      {/*  Form Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title Field */}
            <div>
              <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                id="title"
                className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title..."
                required
              />
            </div>

            {/* Date Field */}
            <div>
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
  Task Completion Deadline
</label>

<input
  type="date"
  id="date"
  className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={date}
  onChange={(e) => setDate(e.target.value)}
  min={new Date().toISOString().split("T")[0]} // Set the minimum date to today
  required
/>

            </div>
          </div>

          {/* Task Category */}
          <div className="mt-6">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Task Category
            </label>
            <select
              id="category"
              className="border border-gray-300 rounded-md px-3 py-2 w-full md:w-[320px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {/*  Priority Selection */}
          <div className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">Priority</label>
            <div className="flex items-center">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="mr-2"
                  value="extreme"
                  checked={priority === "extreme"}
                  onChange={() => setPriority("extreme")}
                />
                <span className="text-red-500">Extreme</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  className="mr-2"
                  value="moderate"
                  checked={priority === "moderate"}
                  onChange={() => setPriority("moderate")}
                />
                <span>Moderate</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="mr-2"
                  value="low"
                  checked={priority === "low"}
                  onChange={() => setPriority("low")}
                />
                <span className="text-green-500">Low</span>
              </label>
            </div>
          </div>

          {/*  Task Description & Image Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Task Description */}
            <div>
              <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                Task Description
              </label>
              <textarea
                id="description"
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a brief description of the task..."
              />
            </div>

            {/* Image Upload */}
            <div className="h-full flex flex-col">
              <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
                Upload Image
              </label>
              <div className="border border-gray-300 rounded-md px-3 py-4 flex items-center justify-center h-full">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <label htmlFor="image" className="cursor-pointer text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-500">Click or Drag to Upload Image</span>
                    {image && <p className="mt-1 text-sm text-gray-500">{image.name}</p>}
                  </div>
                </label>
              </div>
              {imageError && <p className="text-red-500 text-sm">{imageError}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right mt-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTask;
