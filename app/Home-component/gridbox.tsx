import { FaFacebookF } from 'react-icons/fa';

const grid = [
  { image: "/", title: "Post 1" },
  { image: "/", title: "Post 2" },
  { image: "/", title: "Post 3" },
  { image: "/", title: "Post 4" },
  { image: "/", title: "Post 5" },
];

export default function Gridbox() {
  return (
    <div className="mt-10 m-5">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[22px] font-semibold">Start Automate Post</h1>
        <button className="border px-3 py-1 rounded-md border-gray-200 text-gray-500">
          View all post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {grid.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border border-gray-300 rounded-lg overflow-hidden p-3"
          >
            <div className="relative">
              {/* Facebook logo button */}
              <button className="absolute top-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow">
                <FaFacebookF size={16} />
              </button>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px]  rounded-md"
              />
            </div>

            <h2 className="mt-3 text-md font-medium">{item.title}</h2>

            <button className="mt-2 bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition">
              Automate Post
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
