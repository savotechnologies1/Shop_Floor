// import { useState } from "react";
// import img from "../assets/pofile_img.jpg";
// import cross from "../assets/cross.png";
// import home from "../assets/home.png";
// import { Link } from "react-router-dom";
// import upgrade from "../assets/upgrade.png";

// interface AccountProps {
//   onClose: () => void;
// }
// const Account = ({ onClose }: AccountProps) => {
//   const [isOpen, setIsOpen] = useState(true);
//   const [activeTab, setActiveTab] = useState("Dashboard");

//   const section = [
//     {
//       key: "Dashboard",
//       label: "Dashboard",
//       icon: home,
//       path: "dashboardDetailes",
//     },
//     {
//       key: "Profile",
//       label: "Profile",
//       icon: home,
//       path: "settings",
//     },
//     {
//       key: "Time Clock",
//       label: "Time Clock",
//       icon: home,
//       path: "clock-in-out",
//     },
//     {
//       key: "Projects",
//       label: "Projects",
//       icon: home,
//       path: "dashboard/suppliers",
//     },

//     {
//       key: "Security",
//       label: "Security",
//       icon: home,
//       path: "dashboard/suppliers",
//     },
//   ];

//   return (
//     <div>
//       <div className="fixed overflow-y-auto right-0 top-0 z-20 w-[320px] h-full bg-white shadow-lg">
//         <div className="p-4">
//           <div>
//             <img
//               src={cross}
//               alt="Close sidebar"
//               onClick={onClose}
//               className="cursor-pointer"
//             />
//           </div>
//           <div className="flex flex-col items-center pt-6">
//             <div>
//               <img
//                 src={img}
//                 onClick={() => setIsOpen(!isOpen)}
//                 alt="User Avatar"
//                 className="rounded-full w-[90px] border-2 border-green-400 mb-2"
//               />
//             </div>
//             <div className="ml-3">
//               <p className="font-semibold">Hudson Alvarez</p>
//               <p className="text-sm text-gray-500">demo@minimals.cc</p>
//             </div>
//           </div>

//           {/* Menu Items */}
//           <div className="flex flex-col justify-between">
//             <div>
//               <ul className="space-y-2 px-2 py-4 h-[500px]">
//                 {section.map((section) => (
//                   <li key={section.key}>
//                     <Link to={`/${section.path}`}>
//                       <button
//                         className={`flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-brand hover:text-white
//                            ${
//                              activeTab === section.key
//                                ? "bg-brand text-white"
//                                : "hover:bg-brand hover:text-white"
//                            }`}
//                         onClick={() => setActiveTab(section.key)}
//                       >
//                         <img
//                           src={section.icon}
//                           alt={section.label}
//                           className="w-6"
//                         />
//                         {isOpen && (
//                           <span className="block transition-all duration-300">
//                             {section.label}
//                           </span>
//                         )}
//                       </button>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-4 p-4 bg-black text-white rounded-xl flex relative py-8 px-6">
//               <div className="w-[80%]">
//                 <p className="text-lg font-semibold mr-4">
//                   Upgrade Your Plan And Get More Space
//                 </p>
//                 <button className="mt-4 bg-[#FFAB00] text-black px-4 py-2 rounded-lg text-ms">
//                   Upgrade Plan
//                 </button>
//               </div>
//               <div className="absolute right-0 bottom-0 py-4 px-4">
//                 <img
//                   className="w-28"
//                   src={upgrade}
//                   alt="Upgrade illustration"
//                 />
//               </div>
//             </div>
//           </div>

//           <button className="mt-4 w-full bg-[#FF563014] text-[#B71D18] py-2 rounded-lg font-semibold text-lg">
//             Logout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Account;

import { useEffect, useState } from "react";
import img from "../assets/pofile_img.jpg";
import cross from "../assets/cross.png";
import home from "../assets/home.png";
import { Link, useNavigate } from "react-router-dom";
import { getProfile } from "../pages/settings/https/profileApi";
const BASE_URL = import.meta.env.VITE_SERVER_URL;

interface AccountProps {
  onClose: () => void;
}

interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  employeeProfileImg?: string;
}

function Account({ onClose, profileDetail }: AccountProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("Dashboard");
  const navigate = useNavigate();

  const section = [
    {
      key: "Dashboard",
      label: "Dashboard",
      icon: home,
      path: "dashboardDetailes",
    },
    {
      key: "Profile",
      label: "Profile",
      icon: home,
      path: "settings",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/sign-in");
  };
  console.log("profileDetailprofileDetail", profileDetail);

  return (
    <div>
      <div className="fixed overflow-y-auto right-0 top-0 z-60 w-[320px] h-full bg-white shadow-lg">
        <div className="p-4">
          <div>
            <img
              src={cross}
              alt="Close sidebar"
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>

          <div className="flex flex-col items-center pt-6">
            <div>
              <img
                src={
                  profileDetail?.employeeProfileImg
                    ? `${BASE_URL}/uploads/employeeProfileImg/${profileDetail.employeeProfileImg}`
                    : img
                }
                alt="Profile"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full w-[100px] border-2 border-green-400 mb-2 py-4"
              />
            </div>
            <div className="ml-3">
              <p className="font-semibold text-center">
                {profileDetail?.firstName && profileDetail?.lastName
                  ? `${profileDetail.firstName} ${profileDetail.lastName}`
                  : "Loading..."}
              </p>
              <p className="text-sm text-gray-500">{profileDetail?.email}</p>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col justify-between">
            <div>
              <ul className="space-y-2 px-2 py-4 h-[500px]">
                {section.map((section) => (
                  <li key={section.key}>
                    <Link to={`/${section.path}`}>
                      <button
                        className={`flex items-center space-x-4 w-full px-2 py-3 rounded-md
                          ${
                            activeTab === section.key
                              ? "bg-brand text-white"
                              : "hover:bg-brand hover:text-white"
                          }`}
                        onClick={() => setActiveTab(section.key)}
                      >
                        <img
                          src={section.icon}
                          alt={section.label}
                          className="w-6"
                        />
                        {isOpen && (
                          <span className="block transition-all duration-300">
                            {section.label}
                          </span>
                        )}
                      </button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            className="mt-4 w-full bg-[#FF563014] text-[#B71D18] py-2 rounded-lg font-semibold text-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Account;
