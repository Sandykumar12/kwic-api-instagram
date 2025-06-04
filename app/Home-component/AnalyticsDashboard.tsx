import {  MessageCircle,  MessageSquare } from "lucide-react";
import { BiLogoReact } from "react-icons/bi";
import { IoIosLink } from "react-icons/io";

export default function AnalyticsDashboard() {
  const stats = [
    {
      id: 1,
      icon: BiLogoReact,
      value: "3 of 45",
      label: "Post Automated",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      id: 2,
      icon: MessageCircle,
      value: "300",
      label: "Message Sent",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      id: 3,
      icon: IoIosLink,
      value: "56",
      label: "Link Clicked",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      id: 4,
      icon: MessageSquare,
      value: "35",
      label: "Comment Sent",
      bgColor: "bg-green-100",
      iconColor: "text-green-500",
    },
  ];

  return (
    <div className=" bg-gray-50 max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <div
              key={stat.id}
              className="bg-white rounded-lg p-3  border border-gray-300"
            >
              <div className="flex items-center space-x-2">
                <div className={`${stat.bgColor} p-3 rounded-lg`}>
                  <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-semibold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}