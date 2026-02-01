// // import belt from "../../assets/belt-solid.png";
// // import { IoLogOutOutline } from "react-icons/io5";
// // import step_1 from "../../assets/step_1.png";
// // import step_2 from "../../assets/step_2.png";
// // import step_3 from "../../assets/step_3.png";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useState } from "react";

// // const data = [
// //   {
// //     index: 1,
// //     img: step_1,
// //     title: "Step 1",
// //     decs: "Remove burn and sharp edges",
// //   },
// //   {
// //     index: 2,

// //     img: step_2,
// //     title: "Step 2",
// //     decs: "Inspect for Surface Finish Defects",
// //   },
// //   {
// //     index: 3,
// //     img: step_3,
// //     title: "Step 3",
// //     decs: "Packaged Products",
// //   },
// // ];

// // const Training = () => {
// //   const navigate = useNavigate();

// //   const [completedSteps, setCompletedSteps] = useState(new Set());
// //   const handleStepClick = (stepIndex: unknown) => {
// //     setCompletedSteps((prev) => new Set(prev).add(stepIndex));
// //   };
// //   // Check if all steps are completed
// //   const allCompleted = completedSteps.size === data.length;

// //   const handleLogout = () => {
// //     navigate("/station-logout");
// //   };

// //   return (
// //     <>
// //       <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
// //         {/* Header Section */}
// //         <div className="bg-[#243C75] relative ">
// //            {/* Logout Button */}
// //           <div className="flex items-center gap-2 text-white bg-[#17274C] w-full justify-end p-2">
// //             <button
// //               onClick={handleLogout}
// //               className="text-xs md:text-sm font-semibold flex items-center gap-1"
// //             >
// //               Log out
// //               <IoLogOutOutline size={16} className="md:size-[20px]" />
// //             </button>
// //           </div>
// //           <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// //             <div className="relative w-full md:w-auto">
// //               <img className="w-24 md:w-40" src={belt} alt="Belt icon" />
// //               {/* Text centered above image on all screens */}
// //             <div className="text-white text-lg   absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  whitespace-nowrap flex justify-between">
// //                 <div className="gap-2 flex flex-col">
// //                   <p className="text-3xl 2xl:text-5xl font-semibold">
// //                     {" "}
// //                     tdriver GMT800 single
// //                   </p>
// //                   <div className="flex gap-4">
// //                     <p className="md:text-xl font-semibold"> 1001</p>
// //                     <p className=" "> january 13 ,2025</p>
// //                   </div>
// //                   <div className="flex gap-4">
// //                     <p className="md:text-xl font-semibold "> 1002</p>
// //                     <p className=""> March 13 ,2025</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-white flex gap-4 md:gap-20 flex-wrap justify-center">

// //               <div>
// //                 <p className="md:text-2xl "> Devon Lane</p>
// //               </div>

// //               <div className="flex flex-col  gap-1 md:gap-2">
// //                 <p className="text-sm md:text-base">Date: january 17, 2025</p>
// //                 <p className=" text-sm md:text-base">Qty: 20</p>
// //               <p className=" text-sm md:text-base">Scrap Qty: 2</p>

// //               </div>
// //             </div>
// //           </div>

// //         </div>

// //         {/* Main Content */}
// //         <div className="container mx-auto p-4 md:p-6 flex-grow">
// //           {/* Comment and Button Section */}
// //           <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
// //             <input
// //               type="text"
// //               placeholder="Write your comments"
// //               className="border border-gray-400 py-2 px-4 rounded-md w-full placeholder-gray-400 bg-transparent text-sm md:text-base"
// //             />

// //             <div className="flex gap-3 w-full ">
// //               <button className="bg-brand text-white px-4 md:px-8 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
// //                 Add Picture
// //               </button>

// //               <button className="bg-brand text-white px-4 py-2 rounded-sm text-sm md:text-base font-semibold w-full md:w-auto">
// //                 Send
// //               </button>
// //             </div>
// //           </div>

// //           {/* Steps Section */}
// //           <div className="py-4 flex flex-col gap-4">
// //             {data.map((item, index) => (
// //               <div
// //                 key={index}
// //                 onClick={() => handleStepClick(item.index)}
// //                 className={`flex flex-col md:flex-row gap-4 md:gap-20 items-center bg-white rounded-lg shadow-sm p-4 cursor-pointer
// //     ${completedSteps.has(item.index) ? "border-2 border-green-500" : ""}
// //   `}
// //               >
// //                 <div className="w-full md:w-auto">
// //                   <img
// //                     className="rounded-md w-full max-w-xs md:max-w-none"
// //                     src={item.img}
// //                     alt={item.title}
// //                   />
// //                 </div>
// //                 <div className="text-center md:text-left">
// //                   <p className="font-semibold text-lg">{item.title}</p>
// //                   <p className="text-gray-600">{item.decs}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Action Buttons */}
// //           <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
// //             <button
// //               disabled={!allCompleted} // Disable if not all completed
// //               className={`px-4 py-2 rounded-md text-sm md:text-base font-semibold w-full sm:w-auto
// //                 ${
// //                   allCompleted
// //                     ? "bg-brand text-white cursor-pointer"
// //                     : "bg-gray-400 text-gray-700 cursor-not-allowed"
// //                 }
// //               `}
// //             >
// //               Complete Order
// //             </button>

// //             <NavLink to="/scrap-entry" className="w-full sm:w-auto">
// //               <button className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full">
// //                 Scrap
// //               </button>
// //             </NavLink>
// //           </div>
// //         </div>

// //         {/* Footer Section */}
// //         <div className="bg-[#243C75]  bottom-0 w-full">
// //           <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
// //             {/* Process & Inspection Section */}
// //             <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
// //               <div className="flex flex-col items-center">
// //                 <p className="text-sm md:text-base">Process</p>
// //                 <p className="text-sm md:text-base">Inspection</p>
// //               </div>

// //               <div className="flex flex-col items-center">
// //                 <p className="text-green-500 text-sm md:text-base">Qty</p>
// //                 <p className="text-green-500 text-sm md:text-base">20</p>
// //               </div>

// //               <div className="flex flex-col items-center">
// //                 <p className="text-red-500 text-sm md:text-base">Scrap</p>
// //                 <p className="text-red-500 text-sm md:text-base">2</p>
// //               </div>
// //             </div>

// //             {/* Action Buttons */}
// //             <div className="flex gap-2 md:gap-4  justify-center">
// //             {/* <NavLink to="/current-status" className="w-full sm:w-auto">
// //               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
// //                 Process
// //               </button>
// //             </NavLink>

// //             <NavLink to="/live-production" className="w-full sm:w-auto">
// //               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
// //                 Employee
// //               </button>
// //             </NavLink>

// //             <NavLink to="/live-production" className="w-full sm:w-auto">
// //               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
// //                 Count
// //               </button>
// //             </NavLink>

// //             <NavLink to="/current-quality" className="w-full sm:w-auto">
// //               <button className="bg-white text-black px-3 py-1 md:px-6 md:py-2 rounded-md shadow-md hover:bg-gray-200 transition text-xs md:text-sm">
// //                 Cycle
// //               </button>
// //             </NavLink> */}
// //                <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold"> Employee</p>
// //               <p className="text-sm md:text-base">Devon Lane</p>
// //             </div>
// //                <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold"> Qty</p>
// //               <p className="text-sm md:text-base"> 20</p>
// //             </div>
// //             <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold">Cycle Time</p>
// //               <p className="text-sm md:text-base">150</p>
// //             </div>
// //           </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Training;

// // import belt from "../../assets/belt-solid.png";
// // import { IoLogOutOutline } from "react-icons/io5";
// // import { NavLink, useNavigate, useParams } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import {
// //   completeTraningApi,
// //   stationProcessDetail,
// //   updateStepTime,
// // } from "./https/productionResponseApi";
// // const BASE_URL = import.meta.env.VITE_SERVER_URL;

// // interface Image {
// //   imagePath: string;
// // }

// // interface Step {
// //   id: string;
// //   title: string;
// //   instruction: string;
// //   images: Image[];
// // }

// // interface WorkInstruction {
// //   id: string;
// //   steps: Step[];
// // }

// // interface Part {
// //   partDescription: string;
// //   WorkInstruction: WorkInstruction[];
// // }

// // interface Order {
// //   orderNumber: string;
// //   order_date: string;
// //   delivery_date: string;
// //   productQuantity: number;
// // }

// // interface EmployeeInfo {
// //   firstName: string;
// //   lastName: string;
// // }

// // interface Process {
// //   processName: string;
// // }

// // interface JobData {
// //   productionId: string;
// //   part: Part;
// //   order: Order;
// //   employeeInfo: EmployeeInfo;
// //   process: Process;
// //   quantity: number;
// //   completedQuantity: number;
// //   cycleTime: string;
// // }

// // const Training = () => {
// //   const navigate = useNavigate();
// //   const { id } = useParams<{ id: string }>();

// //   const [jobData, setJobData] = useState<JobData | null>(null);
// //   const [loading, setLoading] = useState(true);
// //   const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

// //   const handleStepClick = async (stepId: string) => {
// //     if (!jobData) return;

// //     setCompletedSteps((prev) => new Set(prev).add(stepId));

// //     try {
// //       await updateStepTime(jobData.productionId, stepId);
// //     } catch (error) {
// //       console.error("Failed to update step time", error);
// //     }
// //   };

// //   const fetchJobDetails = async (jobId: string | undefined) => {
// //     if (!jobId) {
// //       setLoading(false);
// //       navigate("/station-login");
// //       return;
// //     }
// //     try {
// //       setLoading(true);
// //       const stationUserId = localStorage.getItem("stationUserId");
// //       const response = await stationProcessDetail(jobId, stationUserId);
// //       const data = response?.data;
// //       if (data) setJobData(data);
// //     } catch (error: any) {
// //       if (error?.status === 404) {
// //         navigate("/station-login");
// //       }
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleLogout = () => {
// //     navigate("/station-logout");
// //   };

// //   const allCompleted =
// //     jobData?.part?.WorkInstruction?.every((wi) =>
// //       wi.steps.every((step) => completedSteps.has(step.id))
// //     ) ?? false;

// //   const handleCompleteOrder = async () => {
// //     if (!jobData) return;

// //     try {
// //       const response = await completeTraningApi(jobData.productionId);
// //       fetchJobDetails(id);
// //       if (response?.status === 200) {
// //         navigate("/station-login");
// //       }
// //     } catch (error: any) {
// //       if (error?.response?.status === 400) {
// //         fetchJobDetails(id);
// //       } else {
// //         console.error("Error completing order:", error);
// //       }
// //     }
// //   };

// //   const formatDate = (date: string | undefined) =>
// //     date ? new Date(date).toLocaleDateString("en-IN") : "N/A";

// //   const formatTime = (timeStr: string | undefined) =>
// //     timeStr ? new Date(`1970-01-01T${timeStr}Z`).toLocaleTimeString() : "N/A";

// //   useEffect(() => {
// //     fetchJobDetails(id);
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen flex justify-center items-center">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   if (!jobData) {
// //     return (
// //       <div className="min-h-screen flex justify-center items-center">
// //         No job data found.
// //       </div>
// //     );
// //   }

// //   const formatCycleTime = (dateString) => {
// //     if (!dateString) return "N/A";

// //     try {
// //       const date = new Date(dateString);
// //       if (isNaN(date.getTime())) {
// //         return "Invalid Time";
// //       }
// //       return date.toLocaleTimeString("en-US");
// //     } catch (error) {
// //       console.error("Could not format cycle time:", dateString, error);
// //       return "N/A";
// //     }
// //   };
// //   const { part, order, employeeInfo, process, upcommingOrder } = jobData;

// //   return (
// //     <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
// //       <div className="bg-[#243C75] relative">
// //         <div className="flex justify-end p-2 bg-[#17274C] text-white">
// //           <button
// //             onClick={handleLogout}
// //             className="text-xs md:text-sm font-semibold flex items-center gap-1"
// //           >
// //             Log out <IoLogOutOutline size={16} className="md:size-[20px]" />
// //           </button>
// //         </div>
// //         <div className="container mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
// //           <div className="relative w-full md:w-auto">
// //             <img className="w-24 md:w-40" src={belt} alt="Belt icon" />
// //             <div className="text-white text-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap flex justify-between">
// //               <div className="gap-2 flex flex-col">
// //                 <p className="text-3xl 2xl:text-5xl font-semibold">
// //                   {part?.partDescription || "No Description"}
// //                 </p>
// //                 <div className="flex gap-4">
// //                   <p className="md:text-xl font-semibold">
// //                     {order?.orderNumber}
// //                   </p>
// //                   <p className=" ">{formatDate(jobData.order_date)}</p>
// //                 </div>
// //                 <div className="flex gap-4">
// //                   <p className="md:text-xl font-semibold ">Upcoming : </p>
// //                   <p className="">{formatDate(upcommingOrder)}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="text-white flex gap-4 md:gap-20 flex-wrap justify-center">
// //             <div>
// //               <p className="md:text-2xl ">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
// //             </div>
// //             <div className="flex flex-col  gap-1 md:gap-2">
// //               <p className="text-sm md:text-base">
// //                 Date: {formatDate(jobData.delivery_date)}
// //               </p>
// //               <p className=" text-sm md:text-base">
// //                 Qty: {jobData.completedQty}
// //               </p>
// //               <p className=" text-sm md:text-base">
// //                 Scrap Qty: {jobData.scrapQty}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="container mx-auto p-4 md:p-6 flex-grow">
// //         <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
// //           <input
// //             type="text"
// //             placeholder="Write your comments"
// //             className="border border-gray-400 py-2 px-4 rounded-md w-full text-sm"
// //           />
// //           <div className="flex gap-3 w-full">
// //             <button className="bg-brand text-white px-4 py-2 rounded-sm w-full md:w-auto">
// //               Add Picture
// //             </button>
// //             <button className="bg-brand text-white px-4 py-2 rounded-sm w-full md:w-auto">
// //               Send
// //             </button>
// //           </div>
// //         </div>

// //         <div className="flex flex-col gap-4">
// //           {part?.WorkInstruction?.flatMap((wi) =>
// //             wi.steps.map((step) => (
// //               <div
// //                 key={step.id}
// //                 onClick={() => handleStepClick(step.id)}
// //                 className={`flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-sm rounded-lg cursor-pointer ${
// //                   completedSteps.has(step.id) ? "border-2 border-green-500" : ""
// //                 }`}
// //               >
// //                 <div className="w-full md:w-auto">
// //                   <img
// //                     className="rounded-md w-full max-w-xs"
// //                     src={
// //                       step.images?.[0]?.imagePath
// //                         ? `${BASE_URL}/uploads/workInstructionImg/${step.images[0].imagePath}`
// //                         : "https://via.placeholder.com/150"
// //                     }
// //                     alt={step.title}
// //                   />
// //                 </div>
// //                 <div className="text-center md:text-left">
// //                   <p className="font-semibold text-lg">{step.title}</p>
// //                   <p className="text-gray-600">{step.instruction}</p>
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
// //           <button
// //             onClick={handleCompleteOrder}
// //             disabled={!allCompleted}
// //             className={`px-4 py-2 rounded-md text-sm font-semibold w-full sm:w-auto ${
// //               allCompleted
// //                 ? "bg-brand text-white cursor-pointer"
// //                 : "bg-gray-400 text-gray-700 cursor-not-allowed"
// //             }`}
// //           >
// //             Complete Training
// //           </button>
// //           <NavLink to="/scrap-entry" className="w-full sm:w-auto">
// //             <button className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full">
// //               Scrap
// //             </button>
// //           </NavLink>
// //         </div>
// //       </div>
// //       <div className="bg-[#243C75]  bottom-0 w-full">
// //         <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
// //           <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
// //             <div className="flex flex-col items-center">
// //               <p className="text-sm md:text-base">Process</p>
// //               <p className="text-sm md:text-base">{process?.processName}</p>
// //             </div>
// //             <div className="flex flex-col items-center">
// //               <p className="text-green-500 text-sm md:text-base">Total Qty</p>
// //               <p className="text-green-500 text-sm md:text-base">
// //                 {jobData.quantity}
// //               </p>
// //             </div>
// //             <div className="flex flex-col items-center">
// //               <p className="text-green-500 text-sm md:text-base">
// //                 Remaining Qty
// //               </p>
// //               <p className="text-green-500 text-sm md:text-base">
// //                 {jobData.remainingQty}
// //               </p>
// //             </div>
// //             <div className="flex flex-col items-center">
// //               <p className="text-red-500 text-sm md:text-base">Scrap</p>
// //               <p className="text-red-500 text-sm md:text-base">
// //                 {" "}
// //                 {jobData.scrapQuantity}
// //               </p>
// //             </div>
// //           </div>
// //           <div className="flex gap-2 md:gap-6  justify-center">
// //             <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold"> Employee</p>
// //               <p className="text-sm md:text-base">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
// //             </div>
// //             <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold"> Qty</p>
// //               <p className="text-sm md:text-base">{jobData.completedQty}</p>
// //             </div>
// //             <div className="flex flex-col items-center text-white">
// //               <p className="text-sm md:text-base font-semibold">Cycle Time</p>
// //               <p className="text-sm md:text-base">
// //                 {formatCycleTime(jobData?.cycleTime)}
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Training;

// import belt from "../../assets/belt-solid.png";
// import { IoLogOutOutline } from "react-icons/io5";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState, useCallback } from "react";
// import {
//   completeTraningApi,
//   stationProcessDetail,
//   updateStepTime,
// } from "./https/productionResponseApi";

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
//   id: string;
//   steps: Step[];
// }

// interface Part {
//   partDescription: string;
//   WorkInstruction: WorkInstruction[];
// }

// interface Order {
//   orderNumber: string;
//   productQuantity: number;
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
//   part: Part;
//   order: Order;
//   employeeInfo: EmployeeInfo;
//   process: Process;
//   quantity: number;
//   completedQuantity: number;
//   cycleTime: string;
//   // FIX: Added missing properties that were used in the JSX and logic.
//   order_date: string;
//   delivery_date: string;
//   upcommingOrder: string;
//   completedQty: number;
//   scrapQty: number;
//   remainingQty: number;
//   scrapQuantity: number;
// }

// const Training = () => {
//   const navigate = useNavigate();
//   const { id } = useParams<{ id: string }>();

//   const [jobData, setJobData] = useState<JobData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

//   const handleStepClick = async (stepId: string) => {
//     if (!jobData) return;

//     setCompletedSteps((prev) => new Set(prev).add(stepId));

//     try {
//       await updateStepTime(jobData.productionId, stepId);
//     } catch (error) {
//       console.error("Failed to update step time", error);
//     }
//   };

//   // FIX: Wrapped fetchJobDetails in useCallback to stabilize the function.
//   const fetchJobDetails = useCallback(
//     async (jobId: string | undefined) => {
//       if (!jobId) {
//         setLoading(false);
//         navigate("/station-login");
//         return;
//       }
//       try {
//         setLoading(true);
//         const stationUserId = localStorage.getItem("stationUserId");

//         // FIX: Added a guard clause to ensure stationUserId is not null before the API call.
//         if (!stationUserId) {
//           console.error("Station user ID not found. Redirecting to login.");
//           setLoading(false);
//           navigate("/station-login");
//           return;
//         }

//         const response = await stationProcessDetail(jobId, stationUserId);
//         const data = response?.data;
//         if (data) setJobData(data);
//       } catch (error: any) {
//         if (error?.status === 404) {
//           navigate("/station-login");
//         }
//       } finally {
//         setLoading(false);
//       }
//     },
//     [navigate]
//   );

//   const handleLogout = () => {
//     // A direct navigation might not clear session state, but assuming it's the intended action.
//     // For a real logout, you'd likely call a logout API and clear local storage.
//     navigate("/station-login");
//   };

//   const allCompleted =
//     jobData?.part?.WorkInstruction?.every((wi) =>
//       wi.steps.every((step) => completedSteps.has(step.id))
//     ) ?? false;

//   const handleCompleteOrder = async () => {
//     if (!jobData) return;

//     try {
//       const response = await completeTraningApi(jobData.productionId);
//       if (response?.status === 200) {
//         navigate("/station-login");
//       } else {
//         // Refetch details if the completion wasn't fully successful but didn't error
//         fetchJobDetails(id);
//       }
//     } catch (error: any) {
//       if (error?.response?.status === 400) {
//         // Refetch details on specific errors like "already completed"
//         fetchJobDetails(id);
//       } else {
//         console.error("Error completing order:", error);
//       }
//     }
//   };

//   const formatDate = (date: string | undefined) =>
//     date
//       ? new Date(date).toLocaleDateString("en-US", {
//           month: "long",
//           day: "numeric",
//           year: "numeric",
//         })
//       : "N/A";

//   // FIX: Typed the dateString parameter to avoid implicit 'any'.
//   const formatCycleTime = (dateString: string | undefined) => {
//     if (!dateString) return "N/A";

//     try {
//       const date = new Date(dateString);
//       if (isNaN(date.getTime())) {
//         return "Invalid Time";
//       }
//       return date.toLocaleTimeString("en-US");
//     } catch (error) {
//       console.error("Could not format cycle time:", dateString, error);
//       return "N/A";
//     }
//   };

//   // FIX: Added fetchJobDetails to the dependency array.
//   useEffect(() => {
//     fetchJobDetails(id);
//   }, [id, fetchJobDetails]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         Loading...
//       </div>
//     );
//   }

//   if (!jobData) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         No job data found.
//       </div>
//     );
//   }

//   // FIX: Destructuring is now safe because 'upcommingOrder' is in the JobData interface.
//   const { part, order, employeeInfo, process, upcommingOrder } = jobData;

//   return (
//     <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
//       <div className="bg-[#243C75] relative">
//         <div className="flex justify-end p-2 bg-[#17274C] text-white">
//           <button
//             onClick={handleLogout}
//             className="text-xs md:text-sm font-semibold flex items-center gap-1"
//           >
//             Log out <IoLogOutOutline size={16} className="md:size-[20px]" />
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
//                   {/* FIX: These properties now exist on jobData */}
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
//         {/* CommentBox component could be used here for consistency */}
//         <div className="flex flex-col md:flex-row items-center gap-3 mb-6">
//           <input
//             type="text"
//             placeholder="Write your comments"
//             className="border border-gray-400 py-2 px-4 rounded-md w-full text-sm"
//           />
//           <div className="flex gap-3 w-full md:w-auto">
//             <button className="bg-brand text-white px-4 py-2 rounded-sm w-full md:w-auto">
//               Add Picture
//             </button>
//             <button className="bg-brand text-white px-4 py-2 rounded-sm w-full md:w-auto">
//               Send
//             </button>
//           </div>
//         </div>

//         <div className="flex flex-col gap-4">
//           {part?.WorkInstruction?.flatMap((wi) =>
//             wi.steps.map((step) => (
//               <div
//                 key={step.id}
//                 onClick={() => handleStepClick(step.id)}
//                 className={`flex flex-col md:flex-row items-center gap-4 p-4 bg-white shadow-sm rounded-lg cursor-pointer ${
//                   completedSteps.has(step.id) ? "border-2 border-green-500" : ""
//                 }`}
//               >
//                 <div className="w-full md:w-auto">
//                   <img
//                     className="rounded-md w-full max-w-xs"
//                     src={
//                       step.images?.[0]?.imagePath
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
//           )}
//         </div>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
//           <button
//             onClick={handleCompleteOrder}
//             disabled={!allCompleted}
//             className={`px-4 py-2 rounded-md text-sm font-semibold w-full sm:w-auto ${
//               allCompleted
//                 ? "bg-brand text-white cursor-pointer"
//                 : "bg-gray-400 text-gray-700 cursor-not-allowed"
//             }`}
//           >
//             Complete Training
//           </button>
//           <NavLink to="/scrap-entry" className="w-full sm:w-auto">
//             <button className="bg-transparent text-brand px-4 py-2 font-semibold border-2 border-black rounded-md w-full">
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
//                 {jobData.quantity}
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
//                 {jobData.scrapQuantity}
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

// export default Training;
// import belt from "../../assets/belt-solid.png";
// import { IoLogOutOutline } from "react-icons/io5";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   completeTraningApi,
//   stationProcessDetail,
//   updateStepTime,
// } from "./https/productionResponseApi";
// import CommentBox from "./CommentBox";
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
//   id: string;
//   steps: Step[];
// }

// interface Part {
//   partDescription: string;
//   WorkInstruction: WorkInstruction[];
// }

// interface Order {
//   orderNumber: string;
//   order_date: string;
//   delivery_date: string;
//   productQuantity: number;
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
//   part: Part;
//   order: Order;
//   employeeInfo: EmployeeInfo;
//   process: Process;
//   quantity: number;
//   completedQuantity: number;
//   cycleTime: string;
// }

// const Training = () => {
//   const navigate = useNavigate();
//   const { id } = useParams<{ id: string }>();
//   console.log("idid", id);
//   const [jobData, setJobData] = useState<JobData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());
//   const allSteps =
//     jobData?.part?.WorkInstruction?.flatMap((wi) => wi.steps) || [];

//   // Check if all steps are selected

//   const handleStepClick = async (stepId: string) => {
//     if (!jobData) return;

//     // UI update
//     setCompletedSteps((prev) => {
//       const newSet = new Set(prev);
//       newSet.add(stepId);
//       return newSet;
//     });

//     try {
//       // Backend call
//       await updateStepTime(jobData.productionId, stepId);
//     } catch (error) {
//       console.error("Failed to update step time", error);
//     }
//   };
//   const fetchJobDetails = async (jobId: string | undefined) => {
//     if (!jobId) {
//       setLoading(false);
//       navigate("/station-login");
//       return;
//     }
//     console.log("jobIdjobId", jobId);
//     const stationUserId = localStorage.getItem("stationUserId");
//     try {
//       setLoading(true);
//       const response = await stationProcessDetail(jobId, stationUserId);
//       const data = response?.data;
//       if (data) setJobData(data);
//     } catch (error: any) {
//       if (error?.status === 404) {
//         navigate("/station-login");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     navigate("/station-logout");
//   };

//   const allCompleted =
//     allSteps.length > 0 && completedSteps.size === allSteps.length;

//   const handleCompleteOrder = async () => {
//     if (!jobData) return;

//     try {
//       const response = await completeTraningApi(jobData.productionId);
//       fetchJobDetails(id);
//       if (response?.status === 200) {
//         navigate("/station-login");
//       }
//     } catch (error: any) {
//       if (error?.response?.status === 400) {
//         fetchJobDetails(id);
//       } else {
//         console.error("Error completing order:", error);
//       }
//     }
//   };

//   const formatDate = (date: string | undefined) =>
//     date ? new Date(date).toLocaleDateString("en-IN") : "N/A";

//   const formatTime = (timeStr: string | undefined) =>
//     timeStr ? new Date(`1970-01-01T${timeStr}Z`).toLocaleTimeString() : "N/A";

//   useEffect(() => {
//     fetchJobDetails(id);
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex justify-center items-center">
//         Loading...
//       </div>
//     );
//   }

//   if (!jobData) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center gap-4">
//         <p>No any traning available.</p>

//         <button
//           onClick={() => navigate(-1)}
//           className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand"
//         >
//           Go Back to station login
//         </button>
//       </div>
//     );
//   }
//   const formatCycleTime = (dateString) => {
//     if (!dateString) return "N/A";

//     try {
//       const startTime = new Date(dateString);
//       if (isNaN(startTime.getTime())) {
//         return "Invalid Time";
//       }
//       const now = new Date();
//       const diffMs = now - startTime;
//       const diffMinutes = Math.floor(diffMs / (1000 * 60));

//       return `${diffMinutes} min`;
//     } catch (error) {
//       console.error("Could not format cycle time:", dateString, error);
//       return "N/A";
//     }
//   };
//   const {
//     part,
//     order,
//     employeeInfo,
//     process,
//     upcommingParts,
//     upcommingOrder,
//     order_date,
//   } = jobData;
//   console.log("partpart", jobData);
//   // const rows = [
//   //   { part: part.partNumber, date: order_date },
//   //   { part: upcommingParts, date: upcommingOrder },
//   // ];
//   const rows = [
//     { part: part?.partNumber || part?.partDescription, date: order_date },
//   ];
//   return (
//     <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
//       <div className="bg-[#243C75] relative">
//         <div className="flex justify-end p-2 bg-[#17274C] text-white">
//           <button
//             onClick={handleLogout}
//             className="text-xs md:text-sm font-semibold flex items-center gap-1"
//           >
//             Log out <IoLogOutOutline size={16} className="md:size-[20px]" />
//           </button>
//         </div>
//         <div className="container p-4 flex flex-col md:flex-row items-center justify-between gap-4">
//           <div className="relative w-full max-w-xl mx-auto">
//             <div className="w-full  mb-8 sm:mb-8 md:mb-8">
//               <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold break-words leading-snug text-white px-2">
//                 Process Name :
//                 <span className="text-md font-medium">
//                   {part?.process.processName || "No Available"}
//                 </span>
//               </p>
//             </div>

//             <img
//               src={belt}
//               alt="Belt icon"
//               className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain"
//             />

//             {/* Table overlay on image */}
//             <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-3 md:px-4 mt-5">
//               <div className=" bg-opacity-50 rounded-md overflow-x-auto w-full">
//                 <table className="border border-white text-white text-center w-full min-w-[280px]">
//                   <thead>
//                     <tr className="font-semibold">
//                       <th className="border border-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base">
//                         Part
//                       </th>
//                       <th className="border border-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base">
//                         Schedule date
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {rows.map((row, i) => (
//                       <tr key={i}>
//                         <td className="border border-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base">
//                           {row.part}
//                         </td>
//                         <td className="border border-white px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm md:text-base">
//                           {formatDate(row.date)}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
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
//         <CommentBox employeeInfo={employeeInfo} />

//         <div className="py-4 flex flex-col gap-4">
//           {allSteps.map((step, index) => (
//             <div
//               key={step.id || index}
//               onClick={() => handleStepClick(step.id)} // Card click logic
//               className={`flex flex-col md:flex-row gap-4 md:gap-20 items-center bg-white rounded-lg shadow-sm p-4 cursor-pointer transition-all
//                 ${
//                   completedSteps.has(step.id)
//                     ? "border-2 border-green-500 bg-green-50"
//                     : "border-2 border-transparent"
//                 }
//               `}
//             >
//               <div className="w-full md:w-auto">
//                 <img
//                   className="rounded-md w-40 h-24 object-cover"
//                   src={
//                     step.images?.[0]
//                       ? `${BASE_URL}/uploads/workInstructionImg/${step.images[0].imagePath}`
//                       : "https://via.placeholder.com/150"
//                   }
//                   alt={step.title}
//                 />
//               </div>
//               <div className="text-center md:text-left">
//                 <p className="font-semibold text-lg">{step.title}</p>
//                 <p className="text-gray-600">{step.instruction}</p>
//               </div>
//               {completedSteps.has(step.id) && (
//                 <div className="ml-auto text-green-600 font-bold">
//                   ✓ Selected
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-col items-center gap-3 mt-6">
//           <button
//             onClick={handleCompleteOrder}
//             disabled={!allCompleted}
//             className={`px-10 py-3 rounded-md font-bold transition-all ${
//               allCompleted
//                 ? "bg-green-600 text-white cursor-pointer shadow-lg"
//                 : "bg-gray-400 text-gray-700 cursor-not-allowed"
//             }`}
//           >
//             Complete Training
//           </button>
//         </div>
//       </div>

//       <div className="bg-[#243C75]  bottom-0 w-full">
//         <div className="container mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-white flex gap-4 md:gap-10 items-center flex-wrap justify-center">
//             <div className="flex flex-col items-center">
//               <p className="text-sm md:text-base">Process</p>
//               <p className="text-sm md:text-base">{process?.processName}</p>
//             </div>
//             {/* <div className="flex flex-col items-center">
//               <p className="text-green-500 text-sm md:text-base">Total Qty</p>
//               <p className="text-green-500 text-sm md:text-base">
//                 {jobData.quantity}
//               </p>
//             </div> */}
//             {/* <div className="flex flex-col items-center">
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
//                 {jobData.scrapQuantity}
//               </p>
//             </div> */}
//           </div>
//           <div className="flex gap-2 md:gap-6  justify-center">
//             <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Employee</p>
//               <p className="text-sm md:text-base">{`${employeeInfo?.firstName} ${employeeInfo?.lastName}`}</p>
//             </div>
//             {/* <div className="flex flex-col items-center text-white">
//               <p className="text-sm md:text-base font-semibold"> Qty</p>
//               <p className="text-sm md:text-base">{jobData.completedQty}</p>
//             </div> */}
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

// export default Training;
import belt from "../../assets/belt-solid.png";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  completeTraningApi,
  stationProcessDetail,
  updateStepTime,
} from "./https/productionResponseApi";
import CommentBox from "./CommentBox";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

// --- Interfaces Fixed to match your JSON ---
interface Image {
  imagePath: string;
}

interface Step {
  id: string;
  title: string;
  instruction: string;
  images: Image[];
  stepNumber: number;
}

interface JobData {
  productionId: string;
  workInstructionSteps: Step[]; // JSON ke hisaab se seedha yahan hai
  part: {
    partNumber: string;
    partDescription: string;
    process: { processName: string };
  };
  order: {
    orderNumber: string;
    orderDate: string;
    delivery_date: string;
  };
  employeeInfo: {
    firstName: string;
    lastName: string;
  };
  process: {
    processName: string;
  };
  cycleTime: string;
  completedQuantity: number;
  scrapQuantity: number;
  incomingJobs: any[]; // Table ke liye
}

const Training = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [jobData, setJobData] = useState<JobData | null>(null);
  const [loading, setLoading] = useState(true);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  // FIXED: Accessing steps directly from jobData
  const allSteps = jobData?.workInstructionSteps || [];

  const handleStepClick = async (stepId: string) => {
    if (!jobData) return;
    setCompletedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(stepId)) return prev; // Avoid duplicate calls
      newSet.add(stepId);
      return newSet;
    });

    try {
      await updateStepTime(jobData.productionId, stepId);
    } catch (error) {
      console.error("Failed to update step time", error);
    }
  };

  const fetchJobDetails = async (jobId: string | undefined) => {
    if (!jobId) {
      navigate("/station-login");
      return;
    }
    const stationUserId = localStorage.getItem("stationUserId");
    try {
      setLoading(true);
      const response = await stationProcessDetail(jobId, stationUserId);
      if (response?.data) {
        setJobData(response.data);
      }
    } catch (error: any) {
      if (error?.status === 404) navigate("/station-login");
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteOrder = async () => {
    if (!jobData) return;
    try {
      const response = await completeTraningApi(jobData.productionId);
      if (response?.status === 200) {
        navigate("/station-login");
      }
    } catch (error: any) {
      console.error("Error completing training:", error);
    }
  };

  const formatDate = (date: string | undefined) =>
    date ? new Date(date).toLocaleDateString("en-IN") : "N/A";

  const formatCycleTime = (dateString: string | undefined) => {
    if (!dateString) return "0 min";
    const startTime = new Date(dateString);
    const diffMs = new Date().getTime() - startTime.getTime();
    return `${Math.floor(diffMs / (1000 * 60))} min`;
  };

  useEffect(() => {
    fetchJobDetails(id);
  }, [id]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  if (!jobData) return <div className="min-h-screen flex flex-col items-center justify-center">No Training Available.</div>;

  return (
    <div className="bg-[#F5F6FA] min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-[#243C75] relative">
        <div className="flex justify-end p-2 bg-[#17274C] text-white">
          <button onClick={() => navigate("/station-logout")} className="text-xs flex items-center gap-1">
            Log out <IoLogOutOutline size={20} />
          </button>
        </div>
         <div className="container  p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="relative w-full max-w-xl">
            <p className="text-xl font-semibold text-white mb-4">
              Process Name: <span className="font-normal">{jobData.process?.processName}</span>
            </p>

            <div className="relative">
                <img src={belt} alt="Belt" className="w-full h-32 object-contain" />
                <div className="absolute inset-0 flex items-center justify-center mt-6">
                <table className="border border-white text-white text-center w-4/5 text-xs">
                    <thead>
                    <tr>
                        <th className="border border-white p-1">Part</th>
                        <th className="border border-white p-1">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-white p-1">{jobData.part?.partNumber}</td>
                        <td className="border border-white p-1">{formatDate(jobData.order?.orderDate)}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
          </div>

          <div className="text-white text-right">
            <p className="text-2xl">{`${jobData.employeeInfo?.firstName} ${jobData.employeeInfo?.lastName}`}</p>
            {/* <p>Completed Qty: {jobData.completedQuantity}</p>
            <p>Scrap Qty: {jobData.scrapQuantity}</p> */}
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="container mx-auto p-6 flex-grow">
        <CommentBox employeeInfo={jobData.employeeInfo} />

        <div className="py-6 flex flex-col gap-4">
          {allSteps.length > 0 ? (
            allSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`flex gap-6 items-center bg-white rounded-lg shadow-md p-4 cursor-pointer border-2 transition-all
                  ${completedSteps.has(step.id) ? "border-green-500 bg-green-50" : "border-transparent"}
                `}
              >
                <img
                  className="rounded-md w-32 h-20 object-cover"
                  src={step.images?.[0] ? `${BASE_URL}/uploads/workInstructionImg/${step.images[0].imagePath}` : "https://via.placeholder.com/150"}
                  alt={step.title}
                />
                <div>
                  <p className="font-bold text-lg">{step.stepNumber}. {step.title}</p>
                  <p className="text-gray-600">{step.instruction}</p>
                </div>
                {completedSteps.has(step.id) && <div className="ml-auto text-green-600 font-bold">✓ DONE</div>}
              </div>
            ))
          ) : (
            <p className="text-center py-10">No steps found for this training.</p>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={handleCompleteOrder}
            disabled={completedSteps.size < allSteps.length || allSteps.length === 0}
            className={`px-10 py-3 rounded-md font-bold ${
              completedSteps.size >= allSteps.length && allSteps.length > 0
                ? "bg-green-600 text-white shadow-lg"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            Complete Training
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#243C75] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs uppercase opacity-70">Process</p>
            <p>{jobData.process?.processName}</p>
          </div>
          <div>
            <p className="text-xs uppercase opacity-70">Cycle Time</p>
            <p>{formatCycleTime(jobData.cycleTime)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;