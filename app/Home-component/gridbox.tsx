import { useState } from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import Button from './Button';

const grid = [
  { 
    image: "https://www.kwic.in/_next/image?url=%2Fassets%2Fbulk-section-img.png&w=1920&q=100", 
    title: "Get in-depth insights into your customer interactions with KWIC's analytics dashboard. Track performance, measure customer engagement, and optimize your strategy for better results.",
    icon: BsInstagram 
  },
  { 
    image: "https://www.kwic.in/_next/image?url=%2Fassets%2Fchatbot-img.png&w=1920&q=100", 
    title: "KWIC's chatbot ensures round-the-clock support with intelligent conversation handling and seamless integration into your platform.",
    icon: BsFacebook
  },
  { 
    image: "https://www.kwic.in/_next/image?url=%2Fassets%2Fchatbot-img.png&w=1920&q=100", 
    title: "KWIC's chatbot ensures round-the-clock support with intelligent conversation handling and seamless integration into your platform.",
    icon: BsFacebook
  },
  { 
    image: "https://www.kwic.in/_next/image?url=%2Fassets%2Fchatbot-img.png&w=1920&q=100", 
    title: "KWIC's chatbot ensures round-the-clock support with intelligent conversation handling and seamless integration into your platform.",
    icon: BsFacebook
  },
  { 
    image: "https://www.kwic.in/_next/image?url=%2Fassets%2Fchatbot-img.png&w=1920&q=100", 
    title: "KWIC's chatbot ensures round-the-clock support with intelligent conversation handling and seamless integration into your platform.",
    icon: BsFacebook
  },
  
];

export default function Gridbox() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index :any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mt-10 px-9 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[22px] font-semibold">Start Automate Post</h1>
        <button className="border px-3 py-1 rounded-md border-gray-200 text-gray-500">
          View all post
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {grid.map((item, index) => {
          const IconComponent = item.icon;
          const isInstagram = item.icon === BsInstagram;

          const isExpanded = expandedIndex === index;
          const shortText = item.title.slice(0, 80) + (item.title.length > 80 ? '...' : '');

          return (
            <div
              key={index}
              className="relative bg-white border border-gray-300 rounded-lg overflow-hidden p-3"
            >
              <div className="relative">
                <button 
                  className={`absolute top-2 right-2 text-white p-2 rounded-full shadow ${
                    isInstagram 
                      ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500' 
                      : 'bg-blue-600'
                  }`}
                >
                  <IconComponent size={16} />
                </button>
                <img
                  src={item.image}
                  alt="Grid item"
                  className="w-full h-[200px] object-cover rounded-md"
                />
              </div>

              <h2 className="mt-3 text-sm">
                {isExpanded ? item.title : shortText}
              </h2>

              {item.title.length > 80 && (
                <button 
                  onClick={() => toggleExpand(index)} 
                  className="text-green-600 text-sm hover:underline mt-1"
                >
                  {isExpanded ? 'See less' : '...See more'}
                </button>
              )}

              <Button label='Automate post' className="mt-2 bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
