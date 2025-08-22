// import belt from "../../assets/belt-solid.png";
// import { IoLogOutOutline } from "react-icons/io5";
// import step_1 from "../../assets/step_1.png";
// import step_2 from "../../assets/step_2.png";
// import step_3 from "../../assets/step_3.png";
// import { NavLink, useNavigate } from "react-router-dom";

// const data = [
//   {
//     img: step_1,
//     title: "Step 1",
//     decs: "Remove burn and sharp edges",
//   },
//   {
//     img: step_2,
//     title: "Step 2",
//     decs: "Inspect for Surface Finish Defects",
//   },
//   {
//     img: step_3,
//     title: "Step 3",
//     decs: "Packaged Products",
//   },
// ];

// const RunSchedule = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/station-logout");
//   };

//   return (
//     <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
//       {/* Header Section */}
//       <div className="bg-[#243C75] relative ">
//         {/* Logout Button */}
//         <div className="flex items-center gap-2 text-white bg-[#17274C] w-full justify-end p-2">
//           <button
//             onClick={handleLogout}
//             className="text-xs md:text-sm font-semibold flex items-center gap-1"
//           >
//             Log out
//             <IoLogOutOutline size={16} className="md:size-[20px]" />
//           </button>
//         </div>
//         <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="relative w-full md:w-auto">
//             <img className="w-24 md:w-40" src={belt} alt="Belt icon" />
//             {/* Text centered above image on all screens */}
//             <div className="text-white text-lg   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  whitespace-nowrap flex justify-between">
//               <div className="gap-2 flex flex-col">
//                 <p className="text-3xl 2xl:text-5xl font-semibold">
//                   {" "}
//                   tdriver GMT800 single
//                 </p>
//                 <div className="flex gap-4">
//                   <p className="md:text-xl font-semibold"> 1001</p>
//                   <p className=" "> january 13 ,2025</p>
//                 </div>
//                 <div className="flex gap-4">
//                   <p className="md:text-xl font-semibold "> 1002</p>
//                   <p className=""> March 13 ,2025</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-white flex gap-4 md:gap-20 flex-wrap justify-center">
//             <div>
//               <p className="md:text-2xl "> Devon Lane</p>
//             </div>

//             <div className="flex flex-col  gap-1 md:gap-2">
//               <p className="text-sm md:text-base">Date: january 17, 2025</p>
//               <p className=" text-sm md:text-base">Qty: 20</p>
//               <p className=" text-sm md:text-base">Scrap Qty: 2</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container mx-auto p-4 md:p-6 flex-grow">
//         {/* Comment and Button Section */}
//         <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
//           <input
//             type="text"
//             placeholder="Write your comments"
//             className="border border-gray-400 py-2 px-4 rounded-md w-full placeholder-gray-400 bg-transparent text-sm md:text-base"
//           />

//           <div className="flex gap-3 w-full ">
//             <button className="bg-brand text-white px-4 md:px-8 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
//               Add Picture
//             </button>

//             <button className="bg-brand text-white px-4 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
//               Send
//             </button>
//           </div>
//         </div>

//         {/* Steps Section */}
//         <div className="py-4 flex flex-col gap-4">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col md:flex-row gap-4 md:gap-20 items-center bg-white rounded-lg shadow-sm p-4"
//             >
//               <div className="w-full md:w-auto">
//                 <img
//                   className="rounded-md w-full max-w-xs md:max-w-none"
//                   src={item.img}
//                   alt={item.title}
//                 />
//               </div>
//               <div className="text-center md:text-left">
//                 <p className="font-semibold text-lg">{item.title}</p>
//                 <p className="text-gray-600">{item.decs}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
//           <button className="bg-brand text-white px-4 py-2 rounded-md text-sm md:text-base font-semibold w-full sm:w-auto">
//             Complete Order
//           </button>

//           <NavLink to="/scrap-entry" className="w-full sm:w-auto">
//             <button className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full">
//               Scrap
//             </button>
//           </NavLink>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div className="bg-[#243C75]  bottom-0 w-full">
//         <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           {/* Process & Inspection Section */}
//           <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
//             <div className="flex flex-col items-center">
//               <p className="text-sm md:text-base">Process</p>
//               <p className="text-sm md:text-base">Inspection</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <p className="text-green-500 text-sm md:text-base">Qty</p>
//               <p className="text-green-500 text-sm md:text-base">20</p>
//             </div>

//             <div className="flex flex-col items-center">
//               <p className="text-red-500 text-sm md:text-base">Scrap</p>
//               <p className="text-red-500 text-sm md:text-base">2</p>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-2 md:gap-6  justify-center">
//             {/* <NavLink to="/current-status" className="w-full sm:w-auto">
//               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
//                 Process
//               </button>
//             </NavLink>

//             <NavLink to="/live-production" className="w-full sm:w-auto">
//               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
//                 Employee
//               </button>
//             </NavLink>

//             <NavLink to="/live-production" className="w-full sm:w-auto">
//               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
//                 Count
//               </button>
//             </NavLink>

//             <NavLink to="/current-quality" className="w-full sm:w-auto">
//               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
//                 Cycle
//               </button>
//             </NavLink> */}

//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Employee</p>
//               <p className="text-sm md:text-base">Devon Lane</p>
//             </div>

//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Qty</p>
//               <p className="text-sm md:text-base"> 20</p>
//             </div>

//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold">Cycle Time</p>
//               <p className="text-sm md:text-base">150</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RunSchedule;

// import belt from "../../assets/belt-solid.png";
// import { IoLogOutOutline } from "react-icons/io5";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import {
//   completeOrder,
//   scrapOrder,
//   stationLogoutApi,
//   stationProcessDetail,
// } from "./https/productionResponseApi";
// import { useEffect, useState } from "react";

// const BASE_URL = import.meta.env.VITE_SERVER_URL;

// interface Image {
//   imagePath: string;
// }

// interface Step {
//   id: string;
//   title: string;
//   instruction: string;
//   images: Image[];
// }

// interface WorkInstruction {
//   steps: Step[];
// }

// interface Part {
//   partDescription: string;
//   WorkInstruction: WorkInstruction[];
// }

// interface Order {
//   orderNumber: string;
// }

// interface EmployeeInfo {
//   firstName: string;
//   lastName: string;
// }

// interface Process {
//   processName: string;
// }

// interface JobData {
//   productionId: string;
//   order_id: string;
//   part_id: string;
//   order_date: string;
//   delivery_date: string;
//   upcommingOrder: string;
//   part: Part;
//   order: Order;
//   employeeInfo: EmployeeInfo;
//   process: Process;
//   quantity: number;
//   completedQuantity: number;
//   cycleTime: string;
// }

// const formatDate = (dateString: string | undefined): string => {
//   if (!dateString) return "Not Available";
//   return new Date(dateString).toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// };

// const formatCycleTime = (dateString) => {
//   if (!dateString) return "N/A";

//   try {
//     const date = new Date(dateString);
//     if (isNaN(date.getTime())) {
//       return "Invalid Time";
//     }
//     return date.toLocaleTimeString("en-US");
//   } catch (error) {
//     console.error("Could not format cycle time:", dateString, error);
//     return "N/A";
//   }
// };

// const RunSchedule = () => {
//   const navigate = useNavigate();
//   const { id } = useParams<{ id: string }>();
//   const [jobData, setJobData] = useState<JobData | null>(null);
//   const [loading, setLoading] = useState(true);

//   const fetchJobDetails = async (jobId: string | undefined) => {
//     if (!jobId) {
//       setLoading(false);
//       navigate("/station-login");
//       return;
//     }
//     try {
//       setLoading(true);
//       const response = await stationProcessDetail(jobId);
//       const data = response?.data;
//       if (data) {
//         setJobData(data);
//       }
//     } catch (error: any) {
//       if (error?.status === 404) {
//         navigate("/station-login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobDetails(id);
//   }, [id, navigate]);
//   console.log("jobDatajobData", jobData);

//   const handleCompleteOrder = async () => {
//     if (!jobData) return;
//     console.log(
//       "jobData.employeeInfojobData.employeeInfo",
//       jobData.employeeInfo
//     );
//     console.log("jobDatajobData", jobData);

//     try {
//       await completeOrder(
//         jobData.productionId,
//         jobData.order_id,
//         jobData.part_id,
//         jobData.employeeInfo?.id,
//         jobData.order.partId
//       );
//       fetchJobDetails(id);
//     } catch (error: any) {
//       const status = error?.response?.status;
//       if (status === 400) {
//         console.warn("Order might be already completed. Refetching...");
//         fetchJobDetails(id);
//       } else {
//         console.error("Error completing order:", error);
//       }
//     }
//   };
//   const handleScrapOrder = async () => {
//     if (!jobData) return;
//     console.log("jobData.employeeInfojobData.employeeInfo", jobData);

//     try {
//       await scrapOrder(
//         jobData.productionId,
//         jobData.order_id,
//         jobData.part_id,
//         jobData.employeeInfo.id
//       );
//       fetchJobDetails(id);
//     } catch (error: any) {
//       const status = error?.response?.status;
//       if (status === 400) {
//         console.warn("Order might be already completed. Refetching...");
//         fetchJobDetails(id);
//       } else {
//         console.error("Error completing order:", error);
//       }
//     }
//   };
//   const stationLogout = async () => {
//     if (!jobData) return;

//     try {
//       const response = await stationLogoutApi(jobData.productionId);
//       if (response && response.status === 200) {
//         navigate("/station-login");
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   if (!jobData) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         No job data available.
//       </div>
//     );
//   }

//   const { part, order, employeeInfo, process, upcommingOrder } = jobData;

//   return (
//     <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
//       <div className="bg-[#243C75] relative ">
//         <div className="flex items-center gap-2 text-white bg-[#17274C] w-full justify-end p-2">
//           <button
//             onClick={stationLogout}
//             className="text-xs md:text-sm font-semibold flex items-center gap-1"
//           >
//             Log out
//             <IoLogOutOutline size={16} className="md:size-[20px]" />
//           </button>
//         </div>
//         <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="relative w-full md:w-auto">
//             <img className="w-24 md:w-40" src={belt} alt="Belt icon" />
//             <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap flex justify-between">
//               <div className="gap-2 flex flex-col">
//                 <p className="text-3xl 2xl:text-5xl font-semibold">
//                   {part?.partDescription || "No Description"}
//                 </p>
//                 <div className="flex gap-4">
//                   <p className="md:text-xl font-semibold">
//                     {order?.orderNumber}
//                   </p>
//                   <p className=" ">{formatDate(jobData.order_date)}</p>
//                 </div>
//                 <div className="flex gap-4">
//                   <p className="md:text-xl font-semibold ">Upcoming : </p>
//                   <p className="">{formatDate(upcommingOrder)}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="text-white flex gap-4 md:gap-20 flex-wrap justify-center">
//             <div>
//               <p className="md:text-2xl ">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
//             </div>
//             <div className="flex flex-col  gap-1 md:gap-2">
//               <p className="text-sm md:text-base">
//                 Date: {formatDate(jobData.delivery_date)}
//               </p>
//               <p className=" text-sm md:text-base">
//                 Qty: {jobData.completedQty}
//               </p>
//               <p className=" text-sm md:text-base">
//                 Scrap Qty: {jobData.scrapQty}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto p-4 md:p-6 flex-grow">
//         <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
//           <input
//             type="text"
//             placeholder="Write your comments"
//             className="border border-gray-400 py-2 px-4 rounded-md w-full placeholder-gray-400 bg-transparent text-sm md:text-base"
//           />
//           <div className="flex gap-3 w-full ">
//             <button className="bg-brand text-white px-4 md:px-8 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
//               Add Picture
//             </button>
//             <button className="bg-brand text-white px-4 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
//               Send
//             </button>
//           </div>
//         </div>

//         <div className="py-4 flex flex-col gap-4">
//           {part.WorkInstruction && part.WorkInstruction.length > 0 ? (
//             part.WorkInstruction.flatMap(
//               (instructionSet) => instructionSet.steps
//             ).map((step, index) => (
//               <div
//                 key={step.id || index}
//                 className="flex flex-col md:flex-row gap-4 md:gap-20 items-center bg-white rounded-lg shadow-sm p-4"
//               >
//                 <div className="w-full md:w-auto">
//                   <img
//                     className="rounded-md w-full max-w-xs md:max-w-none"
//                     src={
//                       step.images && step.images.length > 0
//                         ? `${BASE_URL}/uploads/workInstructionImg/${step.images[0].imagePath}`
//                         : "https://via.placeholder.com/150"
//                     }
//                     alt={step.title}
//                   />
//                 </div>
//                 <div className="text-center md:text-left">
//                   <p className="font-semibold text-lg">{step.title}</p>
//                   <p className="text-gray-600">{step.instruction}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-center text-gray-500 p-4">
//               No work instructions available for this part.
//             </div>
//           )}
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
//           <button
//             className="bg-brand text-white px-4 py-2 rounded-md text-sm md:text-base font-semibold w-full sm:w-auto"
//             onClick={handleCompleteOrder}
//           >
//             Complete Order
//           </button>
//           <NavLink className="w-full sm:w-auto">
//             <button
//               className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full"
//               onClick={handleScrapOrder}
//             >
//               Scrap
//             </button>
//           </NavLink>
//         </div>
//       </div>
//       <div className="bg-[#243C75]  bottom-0 w-full">
//         <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
//             <div className="flex flex-col items-center">
//               <p className="text-sm md:text-base">Process</p>
//               <p className="text-sm md:text-base">{process?.processName}</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="text-green-500 text-sm md:text-base">Total Qty</p>
//               <p className="text-green-500 text-sm md:text-base">
//                 {jobData.scheduleQuantity}
//               </p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="text-green-500 text-sm md:text-base">
//                 Remaining Qty
//               </p>
//               <p className="text-green-500 text-sm md:text-base">
//                 {jobData.remainingQty}
//               </p>
//             </div>
//             <div className="flex flex-col items-center">
//               <p className="text-red-500 text-sm md:text-base">Scrap</p>
//               <p className="text-red-500 text-sm md:text-base">
//                 {" "}
//                 {jobData.scrapQty}
//               </p>
//             </div>
//           </div>
//           <div className="flex gap-2 md:gap-6  justify-center">
//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Employee</p>
//               <p className="text-sm md:text-base">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
//             </div>
//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Qty</p>
//               <p className="text-sm md:text-base">{jobData.completedQty}</p>
//             </div>
//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold">Cycle Time</p>
//               <p className="text-sm md:text-base">
//                 {formatCycleTime(jobData?.cycleTime)}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RunSchedule;

import belt from "../../assets/belt-solid.png";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import {
  completeOrder,
  scrapOrder,
  stationLogin,
  stationLogoutApi,
  stationProcessDetail,
} from "./https/productionResponseApi";
import { useEffect, useState } from "react";
import CommentBox from "./CommentBox";
// import CommentBox from "./CommentBox";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

interface Image {
  imagePath: string;
}

interface Step {
  id: string;
  title: string;
  instruction: string;
  images: Image[];
}

interface WorkInstruction {
  steps: Step[];
}

interface Part {
  partDescription: string;
  WorkInstruction: WorkInstruction[];
}

interface Order {
  orderNumber: string;
}

interface EmployeeInfo {
  firstName: string;
  lastName: string;
}

interface Process {
  processName: string;
}

interface JobData {
  id: string;
  productionId: string;
  order_id: string;
  part_id: string;
  order_date: string;
  delivery_date: string;
  upcommingOrder: string;
  part: Part;
  order: Order;
  employeeInfo: EmployeeInfo;
  process: Process;
  quantity: number;
  completedQuantity: number;
  cycleTime: string;
  order_type: string;
  productId: string;
  type: string;
  completedQty: number;
  scrapQty: number;
  remainingQty: number;
  scheduleQuantity: number;
  scrapQuantity: number;
}

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return "Not Available";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const formatCycleTime = (dateString: string) => {
  if (!dateString) return "N/A";

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Time";
    }
    return date.toLocaleTimeString("en-US");
  } catch (error) {
    console.error("Could not format cycle time:", dateString, error);
    return "N/A";
  }
};

const RunSchedule = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchJobDetails = async (jobId: string | undefined) => {
    if (!jobId) {
      setLoading(false);
      // navigate("/station-login");
      return;
    }
    const stationUserId = localStorage.getItem("stationUserId");

    try {
      setLoading(true);
      const response = await stationProcessDetail(jobId, stationUserId);
      const data = response?.data;
      if (data) {
        setJobData(data);
      }
    } catch (error: any) {
      if (error?.status === 404) {
        navigate("/station-login");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobDetails(id);
  }, [id, navigate]);
  console.log("jobDatajobData", jobData);

  // const handleCompleteOrder = async () => {
  //   if (!jobData) return;
  //   console.log(
  //     "jobData.employeeInfojobData.employeeInfo",
  //     jobData.employeeInfo
  //   );

  //   try {
  //     await completeOrder(
  //       jobData.productionId,
  //       jobData.order_id,
  //       jobData.part_id,
  //       jobData.employeeInfo.id,
  //       jobData.order.partId
  //     );
  //     fetchJobDetails(id);
  //   } catch (error: any) {
  //     const status = error?.response?.status;
  //     if (status === 400) {
  //       console.warn("Order might be already completed. Refetching...");
  //       fetchJobDetails(id);
  //     } else {
  //       console.error("Error completing order:", error);
  //     }
  //   }
  // };
  const [isCompleting, setIsCompleting] = useState(false);
  const handleCompleteOrder = async () => {
    if (!jobData || isCompleting) return;
    setIsCompleting(true);
    try {
      if (jobData.type === "product") {
        const stationLoginData = {
          processId: jobData.processId,
          stationUserId: jobData.employeeInfo.id,
          type: "run_schedule",
        };

        const loginRes = await stationLogin(stationLoginData);
        if (loginRes?.status !== 200) {
          console.error("Station login failed");
          setIsCompleting(false);
          return;
        }
        console.log("Station login successful!");
      }

      let productId = null;
      if (jobData.type === "product") {
        productId = jobData.productId || jobData.order.productId;
      }

      await completeOrder(
        jobData.productionId,
        jobData.order_id,
        jobData.order_type,
        jobData.part_id,
        jobData.employeeInfo.id,
        jobData.productId || jobData.order.productId,
        jobData.type,
        `${jobData.employeeInfo.firstName} ${jobData.employeeInfo.lastName}`
      );
      fetchJobDetails(id);
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 400) {
        console.warn("Order might be already completed. Refetching...");
        fetchJobDetails(id);
      } else {
        console.error("Error completing order:", error);
      }
    } finally {
      setIsCompleting(false);
    }
  };
  const handleScrapOrder = async () => {
    if (!jobData) return;
    try {
      await scrapOrder(
        jobData.productionId,
        jobData.order_id,
        jobData.order_type,
        jobData.part_id,
        jobData.employeeInfo.id
      );
      fetchJobDetails(id);
    } catch (error: any) {
      const status = error?.response?.status;
      if (status === 400) {
        console.warn("Order might be already completed. Refetching...");
        fetchJobDetails(id);
      } else {
        console.error("Error completing order:", error);
      }
    }
  };
  const stationLogout = async () => {
    if (!jobData) return;

    try {
      const response = await stationLogoutApi(jobData.productionId);
      if (response && response.status === 200) {
        navigate("/station-login");
      }
    } catch (error) {
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!jobData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No job data available.
      </div>
    );
  }

  const { part, order, employeeInfo, process, upcommingOrder } = jobData;

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      <div className="bg-[#243C75] relative ">
        <div className="flex items-center gap-2 text-white bg-[#17274C] w-full justify-end p-2">
          <button
            onClick={stationLogout}
            className="text-xs md:text-sm font-semibold flex items-center gap-1"
          >
            Log out
            <IoLogOutOutline size={16} className="md:size-[20px]" />
          </button>
        </div>
        <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full md:w-auto">
            <img className="w-24 md:w-40" src={belt} alt="Belt icon" />
            <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap flex justify-between">
              <div className="gap-2 flex flex-col">
                <p className="text-3xl 2xl:text-5xl font-semibold">
                  {part?.partDescription || "No Description"}
                </p>
                <div className="flex gap-4">
                  <p className="md:text-xl font-semibold">
                    {order?.orderNumber}
                  </p>
                  <p className=" ">{formatDate(jobData.order_date)}</p>
                </div>
                <div className="flex gap-4">
                  <p className="md:text-xl font-semibold ">Upcoming : </p>
                  <p className="">{formatDate(upcommingOrder)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white flex gap-4 md:gap-20 flex-wrap justify-center">
            <div>
              <p className="md:text-2xl ">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
            </div>
            <div className="flex flex-col  gap-1 md:gap-2">
              <p className="text-sm md:text-base">
                Date: {formatDate(jobData.delivery_date)}
              </p>
              <p className=" text-sm md:text-base">
                Qty: {jobData.completedQty}
              </p>
              <p className=" text-sm md:text-base">
                Scrap Qty: {jobData.scrapQty}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 md:p-6 flex-grow">
        <CommentBox employeeInfo={employeeInfo} />

        <div className="py-4 flex flex-col gap-4">
          {part.WorkInstruction && part.WorkInstruction.length > 0 ? (
            part.WorkInstruction.flatMap(
              (instructionSet) => instructionSet.steps
            ).map((step, index) => (
              <div
                key={step.id || index}
                className="flex flex-col md:flex-row gap-4 md:gap-20 items-center bg-white rounded-lg shadow-sm p-4"
              >
                <div className="w-full md:w-auto">
                  <img
                    className="rounded-md w-full max-w-xs md:max-w-none"
                    src={
                      step.images && step.images.length > 0
                        ? `${BASE_URL}/uploads/workInstructionImg/${step.images[0].imagePath}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={step.title}
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">{step.title}</p>
                  <p className="text-gray-600">{step.instruction}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 p-4">
              No work instructions available for this part.
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
          <button
            className="bg-brand text-white px-4 py-2 rounded-md text-sm md:text-base font-semibold w-full sm:w-auto"
            onClick={handleCompleteOrder}
          >
            Complete Order
          </button>
          {/* <NavLink className="w-full sm:w-auto"> */}
          <button
            className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full"
            onClick={handleScrapOrder}
          >
            Scrap
          </button>
          {/* </NavLink> */}
        </div>
      </div>
      <div className="bg-[#243C75]  bottom-0 w-full">
        <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
            <div className="flex flex-col items-center">
              <p className="text-sm md:text-base">Process</p>
              <p className="text-sm md:text-base">{process?.processName}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-green-500 text-sm md:text-base">Total Qty</p>
              <p className="text-green-500 text-sm md:text-base">
                {jobData.scheduleQuantity}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-green-500 text-sm md:text-base">
                Remaining Qty
              </p>
              <p className="text-green-500 text-sm md:text-base">
                {jobData.remainingQty}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-red-500 text-sm md:text-base">Scrap</p>
              <p className="text-red-500 text-sm md:text-base">
                {jobData.scrapQuantity}
              </p>
            </div>
          </div>
          <div className="flex gap-2 md:gap-6  justify-center">
            <div className="flex flex-col items-center text-white">
              <p className="text-sm md:text-base font-semibold"> Employee</p>
              <p className="text-sm md:text-base">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <p className="text-sm md:text-base font-semibold"> Qty</p>
              <p className="text-sm md:text-base">{jobData.completedQty}</p>
            </div>
            <div className="flex flex-col items-center text-white">
              <p className="text-sm md:text-base font-semibold">Cycle Time</p>
              <p className="text-sm md:text-base">
                {formatCycleTime(jobData?.cycleTime)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunSchedule;
