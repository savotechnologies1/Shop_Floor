// import  { useState } from "react";
// import setting from "../assets/settings_icon.png";

// import notifications from "./Data/notificationsData";

// const NotificationList = () => {
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredNotifications = notifications.filter(
//     (notification) => activeTab === "all" || notification.type === activeTab
//   );

//   return (
//     <div className="w-[420px] bg-white min-h-screen  py-4 fixed right-0 top-0 z-20 overflow-auto">
//       <div className="bg-[] flex justify-between items-center  pb-2 mb-2 px-4">
//         <h2 className="text-lg font-semibold">Notifications</h2>
//         <div className="flex gap-2 items-center">
//           <div className="text-sm text-green-600">✔</div>
//           <div>
//             <img src={setting} alt="" />
//           </div>
//         </div>
//       </div>
//       <div className="flex  justify-between px-2  py-4 bg-[#F4F6F8] items-center">
//         <div className="flex gap-2">
//           <button
//             className={`${
//               activeTab === "all" ? "text-black " : "text-gray-400"
//             }`}
//             onClick={() => setActiveTab("all")}
//           >
//             All
//           </button>
//           <p className="bg-black px-2 rounded-md text-white">22</p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={`${
//               activeTab === "unread" ? "text-black " : "text-gray-400"
//             }`}
//             onClick={() => setActiveTab("unread")}
//           >
//             Unread
//           </button>
//           <p className="bg-[#00B8D929]  px-2 rounded-md text-[#006C9C]">11</p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={`${
//               activeTab === "archived" ? "text-black " : "text-gray-400"
//             }`}
//             onClick={() => setActiveTab("archived")}
//           >
//             Archived
//           </button>
//           <p className="bg-[#22C55E29] px-2 rounded-md text-[#118D57]">12</p>
//         </div>
//       </div>

//       <div className="mt-2">
//         {filteredNotifications.map((notification) => (
//           <div
//             key={notification.id}
//             className="flex items-center space-x-3 p-6 hover:bg-gray-100 border-b border-dashed"
//           >
//             <div className="rounded-full bg-gray-100 p-3">
//               <img src={notification.icon} alt="" />
//             </div>
//             <div>
//               <p className="text-sm sm:text-base font-medium text-brand">
//                 {notification.title}
//               </p>
//               <p className="text-xs sm:text-base text-gray-400">
//                 {notification.date} · {notification.category}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NotificationList;

// import { useState, useEffect } from "react";
// import setting from "../assets/settings_icon.png";
// import axiosInstance from "../utils/axiosInstance";
// const BASE_URL = import.meta.env.VITE_SERVER_URL;
// export const getAllStationNotification = async (status) => {
//   try {
//     const query = status !== undefined ? `?status=${status}` : "";
//     const response = await axiosInstance.get(
//       `/all-station-notification${query}`
//     );
//     return response.data; // { message, data, counts }
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateNotificationStatus = async (id, status) => {
//   try {
//     const res = await axiosInstance.patch(
//       `/change-station-notification-status/${id}`,
//       { status }
//     );
//     return res.data;
//   } catch (error) {
//     console.error("Error updating status:", error);
//   }
// };

// const NotificationList = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [counts, setCounts] = useState({ all: 0, unread: 0, archived: 0 });
//   const [message, setMessage] = useState("");

//   const fetchNotifications = async () => {
//     setLoading(true);
//     try {
//       let statusFilter;
//       if (activeTab === "unread") statusFilter = false;
//       if (activeTab === "archived") statusFilter = true;

//       const res = await getAllStationNotification(statusFilter);
//       setNotifications(res.data || []);
//       setCounts(res.counts || { all: 0, unread: 0, archived: 0 });
//       setMessage(res.message || ""); // ✅ message set
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, [activeTab]);

//   const handleStatusChange = async (id, status) => {
//     await updateNotificationStatus(id, status);
//     fetchNotifications();
//   };

//   return (
//     <div className="w-[420px] bg-white min-h-screen py-4 fixed right-0 top-0 z-20 overflow-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center pb-2 mb-2 px-4">
//         <h2 className="text-lg font-semibold">Notifications</h2>
//         <div className="flex gap-2 items-center">
//           <div className="text-sm text-green-600">✔</div>
//           <div>
//             <img src={setting} alt="Settings" />
//           </div>
//         </div>
//       </div>

//       {/* ✅ API message */}
//       {message && <p className="text-sm text-gray-500 px-4 pb-2">{message}</p>}

//       {/* Tabs */}
//       <div className="flex justify-between px-2 py-4 bg-[#F4F6F8] items-center">
//         <div className="flex gap-2">
//           <button
//             className={activeTab === "all" ? "text-black" : "text-gray-400"}
//             onClick={() => setActiveTab("all")}
//           >
//             All
//           </button>
//           <p className="bg-black px-2 rounded-md text-white">{counts.all}</p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={activeTab === "unread" ? "text-black" : "text-gray-400"}
//             onClick={() => setActiveTab("unread")}
//           >
//             Unread
//           </button>
//           <p className="bg-[#00B8D929] px-2 rounded-md text-[#006C9C]">
//             {counts.unread}
//           </p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={
//               activeTab === "archived" ? "text-black" : "text-gray-400"
//             }
//             onClick={() => setActiveTab("archived")}
//           >
//             Archived
//           </button>
//           <p className="bg-[#22C55E29] px-2 rounded-md text-[#118D57]">
//             {counts.archived}
//           </p>
//         </div>
//       </div>

//       {/* Notification list */}
//       <div className="mt-2">
//         {loading ? (
//           <p className="text-center py-4 text-gray-500">Loading...</p>
//         ) : notifications.length > 0 ? (
//           notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 p-6 hover:bg-gray-100 border-b border-dashed"
//             >
//               {/* Image */}
//               <div className="rounded-full bg-gray-100 p-3">
//                 {notification.enqueryImg ? (
//                   <img
//                     src={`${BASE_URL}/uploads/PartEnquiryImg/${notification.enqueryImg}`}
//                     alt="icon"
//                     className="w-8 h-8 object-cover rounded-full"
//                   />
//                 ) : (
//                   <div className="w-8 h-8 rounded-full bg-gray-300" />
//                 )}
//               </div>

//               {/* Details */}
//               <div className="flex-1">
//                 <p className="text-sm sm:text-base font-medium text-[#052C89]">
//                   {notification.comment || "No comment"}
//                 </p>
//                 <p className="text-xs sm:text-base text-gray-400">
//                   {new Date(notification.createdAt).toLocaleDateString()} ·{" "}
//                   {notification.status ? "Archived" : "Unread"}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-2 mt-2 sm:mt-0">
//                 <button
//                   onClick={() => handleStatusChange(notification.id, true)}
//                   className="px-3 py-1 bg-green-500 text-white rounded"
//                 >
//                   OK
//                 </button>
//                 <button
//                   onClick={() => handleStatusChange(notification.id, false)}
//                   className="px-3 py-1 bg-red-500 text-white rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center py-4 text-gray-500">
//             No notifications found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationList;

import { useState, useEffect } from "react";
import setting from "../assets/settings_icon.png";
import axiosInstance from "../utils/axiosInstance";
// const BASE_URL = import.meta.env.VITE_SERVER_URL;
export const getAllStationNotification = async (status) => {
  try {
    const query = status !== undefined ? `?status=${status}` : "";
    const response = await axiosInstance.get(
      `/all-station-notification${query}`
    );
    return response.data; // { message, data, counts }
  } catch (error) {
    throw error;
  }
};

export const updateNotificationStatus = async (id, status) => {
  try {
    const res = await axiosInstance.patch(
      `/change-station-notification-status/${id}`,
      { status }
    );
    return res.data;
  } catch (error) {
    console.error("Error updating status:", error);
  }
};

// const NotificationList = () => {
//   const [activeTab, setActiveTab] = useState("all");
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [counts, setCounts] = useState({ all: 0, unread: 0, archived: 0 });
//   const [message, setMessage] = useState("");

//   const fetchNotifications = async () => {
//     setLoading(true);
//     try {
//       let statusFilter;
//       if (activeTab === "unread") statusFilter = false;
//       if (activeTab === "archived") statusFilter = true;

//       const res = await getAllStationNotification(statusFilter);
//       setNotifications(res.data || []);
//       setCounts(res.counts || { all: 0, unread: 0, archived: 0 });
//       setMessage(res.message || ""); // ✅ message set
//     } catch (error) {
//       console.error("Error fetching notifications:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, [activeTab]);

//   const handleStatusChange = async (id, status) => {
//     await updateNotificationStatus(id, status);
//     fetchNotifications();
//   };

//   return (
//     <div className="w-[420px] bg-white min-h-screen py-4 fixed right-0 top-0 z-20 overflow-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center pb-2 mb-2 px-4">
//         <h2 className="text-lg font-semibold">Notifications</h2>
//         <div className="flex gap-2 items-center">
//           <div className="text-sm text-green-600">✔</div>
//           <div>
//             <img src={setting} alt="Settings" />
//           </div>
//         </div>
//       </div>

//       {/* ✅ API message */}
//       {message && <p className="text-sm text-gray-500 px-4 pb-2">{message}</p>}

//       {/* Tabs */}
//       <div className="flex justify-between px-2 py-4 bg-[#F4F6F8] items-center">
//         <div className="flex gap-2">
//           <button
//             className={activeTab === "all" ? "text-black" : "text-gray-400"}
//             onClick={() => setActiveTab("all")}
//           >
//             All
//           </button>
//           <p className="bg-black px-2 rounded-md text-white">{counts.all}</p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={activeTab === "unread" ? "text-black" : "text-gray-400"}
//             onClick={() => setActiveTab("unread")}
//           >
//             Unread
//           </button>
//           <p className="bg-[#00B8D929] px-2 rounded-md text-[#006C9C]">
//             {counts.unread}
//           </p>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className={
//               activeTab === "archived" ? "text-black" : "text-gray-400"
//             }
//             onClick={() => setActiveTab("archived")}
//           >
//             Archived
//           </button>
//           <p className="bg-[#22C55E29] px-2 rounded-md text-[#118D57]">
//             {counts.archived}
//           </p>
//         </div>
//       </div>

//       {/* Notification list */}
//       <div className="mt-2">
//         {loading ? (
//           <p className="text-center py-4 text-gray-500">Loading...</p>
//         ) : notifications.length > 0 ? (
//           notifications.map((notification) => (
//             <div
//               key={notification.id}
//               className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 p-6 hover:bg-gray-100 border-b border-dashed"
//             >
//               {/* Image */}
//               <div className="rounded-full bg-gray-100 p-3">
//                 {notification.enqueryImg ? (
//                   <img
//                     src={`${BASE_URL}/uploads/PartEnquiryImg/${notification.enqueryImg}`}
//                     alt="icon"
//                     className="w-8 h-8 object-cover rounded-full"
//                   />
//                 ) : (
//                   <div className="w-8 h-8 rounded-full bg-gray-300" />
//                 )}
//               </div>

//               {/* Details */}
//               <div className="flex-1">
//                 <p className="text-sm sm:text-base font-medium text-[#052C89]">
//                   {notification.comment || "No comment"}
//                 </p>
//                 <p className="text-xs sm:text-base text-gray-400">
//                   {new Date(notification.createdAt).toLocaleDateString()} ·{" "}
//                   {notification.status ? "Archived" : "Unread"}
//                 </p>
//               </div>

//               {/* Actions */}
//               <div className="flex gap-2 mt-2 sm:mt-0">
//                 <button
//                   onClick={() => handleStatusChange(notification.id, true)}
//                   className="px-3 py-1 bg-green-500 text-white rounded"
//                 >
//                   OK
//                 </button>
//                 <button
//                   onClick={() => handleStatusChange(notification.id, false)}
//                   className="px-3 py-1 bg-red-500 text-white rounded"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center py-4 text-gray-500">
//             No notifications found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NotificationList;

// Add props for onClose and onNotificationAction
const NotificationList = ({ onClose, onNotificationAction }) => {
  const [activeTab, setActiveTab] = useState("all");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counts, setCounts] = useState({ all: 0, unread: 0, archived: 0 });
  const [message, setMessage] = useState("");
  const BASE_URL = import.meta.env.VITE_SERVER_URL; // Make sure BASE_URL is accessible here

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      let statusFilter;
      if (activeTab === "unread") statusFilter = false;
      if (activeTab === "archived") statusFilter = true;

      const res = await getAllStationNotification(statusFilter);
      setNotifications(res.data || []);
      setCounts(res.counts || { all: 0, unread: 0, archived: 0 });
      setMessage(res.message || "");
    } catch (error) {
      console.error("Error fetching notifications:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [activeTab]);

  const handleStatusChange = async (id, status) => {
    await updateNotificationStatus(id, status);
    fetchNotifications();
    if (onNotificationAction) {
      onNotificationAction(); // Call the function passed from Navbar to refresh the count
    }
  };

  return (
    <div className="w-[420px] bg-white min-h-screen py-4 fixed right-0 top-0 z-20 overflow-auto">
      {/* Header */}
      <div className="flex justify-between items-center pb-2 mb-2 px-4">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <div className="flex gap-2 items-center">
          <div className="text-sm text-green-600">✔</div>
          <div>
            <img src={setting} alt="Settings" />
          </div>
        </div>
      </div>

      {message && <p className="text-sm text-gray-500 px-4 pb-2">{message}</p>}

      {/* Tabs */}
      <div className="flex justify-between px-2 py-4 bg-[#F4F6F8] items-center">
        <div className="flex gap-2">
          <button
            className={activeTab === "all" ? "text-black" : "text-gray-400"}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <p className="bg-black px-2 rounded-md text-white">{counts.all}</p>
        </div>

        <div className="flex gap-2">
          <button
            className={activeTab === "unread" ? "text-black" : "text-gray-400"}
            onClick={() => setActiveTab("unread")}
          >
            Unread
          </button>
          <p className="bg-[#00B8D929] px-2 rounded-md text-[#006C9C]">
            {counts.unread}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className={
              activeTab === "archived" ? "text-black" : "text-gray-400"
            }
            onClick={() => setActiveTab("archived")}
          >
            Archived
          </button>
          <p className="bg-[#22C55E29] px-2 rounded-md text-[#118D57]">
            {counts.archived}
          </p>
        </div>
      </div>

      {/* Notification list */}
      <div className="mt-2">
        {loading ? (
          <p className="text-center py-4 text-gray-500">Loading...</p>
        ) : notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 p-6 hover:bg-gray-100 border-b border-dashed"
            >
              {/* Image */}
              <div className="rounded-full bg-gray-100 p-3">
                {notification.enqueryImg ? (
                  <img
                    src={`${BASE_URL}/uploads/PartEnquiryImg/${notification.enqueryImg}`}
                    alt="icon"
                    className="w-8 h-8 object-cover rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-gray-300" />
                )}
              </div>

              {/* Details */}
              <div className="flex-1">
                <p className="text-sm sm:text-base font-medium text-[#052C89]">
                  {notification.comment || "No comment"}
                </p>
                <p className="text-xs sm:text-base text-gray-400">
                  {new Date(notification.createdAt).toLocaleDateString()} ·{" "}
                  {notification.status ? "Archived" : "Unread"}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 mt-2 sm:mt-0">
                <button
                  onClick={() => handleStatusChange(notification.id, true)}
                  className="px-3 py-1 bg-green-500 text-white rounded"
                >
                  OK
                </button>
                <button
                  onClick={() => handleStatusChange(notification.id, false)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center py-4 text-gray-500">
            No notifications found
          </p>
        )}
      </div>
    </div>
  );
};

export default NotificationList;
