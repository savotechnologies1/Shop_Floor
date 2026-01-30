// // import { useForm } from "react-hook-form";
// // import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
// // import logo from "../../assets/logo.png";
// // import { NavLink, useNavigate } from "react-router-dom";

// // const StationLogin = () => {
// //   const { register, handleSubmit } = useForm();

// //   const onSubmit = (data: any) => {
// //     console.log(data);
// //   };

// //   const navigate = useNavigate();

// //   const RunSchedule = () => {
// //     navigate("/run-schedule");
// //   };
// //   const RunWithScrap = () => {
// //     navigate("/run-with-scan");
// //   };
// //   const Training = () => {
// //     navigate("/training");
// //   };

// //   return (
// //     <>
// //       <div className="bg-[#F5F6FA]">
// //      <div className="justify-between flex flex-row items-center px-4 py-2">
// //               <div className="flex items-center gap-3">
// //             <div className="relative group">
// //               <button
// //                 onClick={() => navigate(-1)}
// //                 className="text-gray-600 hover:text-black"
// //               >
// //                 <FaArrowLeft size={20} />
// //               </button>
// //               <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
// //                 Back to dashboard
// //               </div>
// //             </div>

// //             <img className="w-[126px]" src={logo} alt="Logo" />
// //           </div>

// //         </div>
// //         <div className="min-h-screen  flex items-center justify-center">
// //           <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
// //             <h1 className="text-2xl font-bold text-center mb-6">
// //               Station / Process Login
// //             </h1>

// //             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //               {/* Station */}
// //               <div>
// //                 <label className="block text-gray-700 font-medium">
// //                   Station
// //                 </label>
// //                 <select
// //                   {...register("station", { required: true })}
// //                   className="w-full mt-1 p-3 border rounded-md"
// //                 >
// //                   <option value="">Select Process Name</option>
// //                   <option value="Cut Trim">Cut Trim</option>
// //                   <option value="Inspection">Inspection</option>
// //                   <option value="Packaging">Packaging</option>
// //                 </select>
// //               </div>

// //               {/* Name */}
// //               <div>
// //                 <label className="block text-gray-700 font-medium">Name</label>
// //                 <select
// //                   {...register("name", { required: true })}
// //                   className="w-full mt-1 p-3 border rounded-md"
// //                 >
// //                   <option value="">No Selection</option>
// //                   <option value="John Doe">John Doe</option>
// //                   <option value="Jane Smith">Jane Smith</option>
// //                   <option value="Alice Brown">Alice Brown</option>
// //                 </select>
// //               </div>

// //               {/* Buttons */}
// //               <div className="flex flex-col gap-3">
// //                 <button
// //                   onClick={RunSchedule}
// //                   className="w-full bg-brand text-white py-2 rounded-md  transition"
// //                 >
// //                   Run Schedule
// //                 </button>

// //                 <div className="flex justify-between ">
// //                   <button
// //                     onClick={RunWithScrap}
// //                     type="button"
// //                     className="w-full bg-gradient-to-r from-[#5BE49B] to-[#00A76F] text-white py-2  rounded-md  transition"
// //                   >
// //                     Run With Scan
// //                   </button>

// //                   <button
// //                     onClick={Training}
// //                     type="button"
// //                     className="w-full bg-gradient-to-r from-[#FFAC82] to-[#FF5630] text-white py-2 rounded-md  transition ml-2"
// //                   >
// //                     Training
// //                   </button>
// //                 </div>
// //                 <NavLink to="/scrap-entry">
// //                   <button
// //                     type="button"
// //                     className="w-full flex items-center justify-center border border-gray-300 py-2 mt-6 rounded-md hover:bg-gray-100 transition font-bold"
// //                   >
// //                     Scrap Entry <FaChevronRight className="ml-2 " />
// //                   </button>
// //                 </NavLink>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default StationLogin;

// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// // import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
// // import logo from "../../assets/logo.png";
// // import setting from "../../assets/settings_icon.png";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { useEffect, useRef, useState } from "react";
// // import {
// //   selecEmployeeProcessApi,
// //   stationLogin,
// // } from "./https/productionResponseApi";
// // import { toast } from "react-toastify";

// // type SubmitType = "run_schedule" | "run_with_scan" | "training";

// // const StationLogin = () => {
// //   const navigate = useNavigate();
// //   const [emoloyeeProcess, setEmployeeProcess] = useState<any | null>(null);

// //   const submitTypeRef = useRef<SubmitType>("run_schedule");

// //   useEffect(() => {
// //     fetchEmployeeProcess();
// //   }, []);

// //   const fetchEmployeeProcess = async () => {
// //     try {
// //       const response = await selecEmployeeProcessApi();
// //       setEmployeeProcess(response || null);
// //     } catch (error) {
// //       toast.error("Failed to fetch login data");
// //       console.error("Failed to fetch process:", error);
// //     }
// //   };

// //   const formik = useFormik({
// //     initialValues: {
// //       processId: "",
// //       stationUserId: "",
// //     },
// //     validationSchema: Yup.object({
// //       processId: Yup.string().required("Station/Process is required"),
// //       stationUserId: Yup.string().required("Name is required"),
// //     }),
// //     onSubmit: async (values) => {
// //       const type = submitTypeRef.current;

// //       const data = {
// //         processId: values.processId,
// //         stationUserId: values.stationUserId,
// //         type: type,
// //       };

// //       try {
// //         const response = await stationLogin(data);
// //         if (response && response.status === 200) {
// //           toast.success("Login Successful!");

// //           switch (type) {
// //             case "run_schedule":
// //               navigate(`/run-schedule/${values.processId}`);
// //               break;
// //             case "run_with_scan":
// //               navigate(`/run-with-scan/${values.processId}`);
// //               break;
// //             case "training":
// //               navigate(`/training/${values.processId}`);
// //               break;
// //             default:
// //               navigate("/");
// //           }
// //         }
// //       } catch (error) {
// //         toast.error(
// //           "An unexpected error occurred. Please check your connection."
// //         );
// //       }
// //     },
// //   });

// //   return (
// //     <div className="bg-[#F5F6FA]">
// //       <div className="justify-between flex flex-row items-center px-4 py-2">
// //         <div className="flex items-center gap-3">
// //           <div className="relative group">
// //             <button
// //               type="button"
// //               onClick={() => navigate(-1)}
// //               className="text-gray-600 hover:text-black"
// //             >
// //               <FaArrowLeft size={20} />
// //             </button>
// //             <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 w-62 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
// //               Back to dashboard
// //             </div>
// //           </div>

// //           <img className="w-[126px]" src={logo} alt="Logo" />
// //         </div>

// //         <div className="flex items-center gap-2">
// //           <img src={setting} alt="Settings" />
// //           <p className="font-semibold text-sm">Need Help?</p>
// //         </div>
// //       </div>
// //       <div className="min-h-screen flex items-center justify-center">
// //         <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
// //           <h1 className="text-2xl font-bold text-center mb-6">
// //             Station / Process Login
// //           </h1>
// //           <form onSubmit={formik.handleSubmit} className="space-y-4">
// //             <div>
// //               <label className="block text-gray-700 font-medium">Station</label>
// //               <select
// //                 name="processId"
// //                 value={formik.values.processId}
// //                 onChange={formik.handleChange}
// //                 onBlur={formik.handleBlur}
// //                 className={`w-full mt-1 p-3 border rounded-md ${
// //                   formik.touched.processId && formik.errors.processId
// //                     ? "border-red-500"
// //                     : ""
// //                 }`}
// //               >
// //                 <option value="">Select Process Name</option>
// //                 {emoloyeeProcess && emoloyeeProcess.stockAndProcess ? (
// //                   emoloyeeProcess.stockAndProcess.map((process: any) => (
// //                     <option key={process.id} value={process.id}>
// //                       {`${process.processName}`}
// //                     </option>
// //                   ))
// //                 ) : (
// //                   <option value="" disabled>
// //                     Loading...
// //                   </option>
// //                 )}
// //               </select>
// //               {formik.touched.processId && formik.errors.processId && (
// //                 <p className="text-red-500 text-sm mt-1">
// //                   {formik.errors.processId}
// //                 </p>
// //               )}
// //             </div>

// //             <div>
// //               <label className="block text-gray-700 font-medium">Name</label>
// //               <select
// //                 id="stationUserId"
// //                 name="stationUserId"
// //                 value={formik.values.stationUserId}
// //                 onChange={formik.handleChange}
// //                 onBlur={formik.handleBlur}
// //                 className={`w-full mt-1 p-3 border rounded-md ${
// //                   formik.touched.stationUserId && formik.errors.stationUserId
// //                     ? "border-red-500"
// //                     : ""
// //                 }`}
// //               >
// //                 <option value="">Select a User</option>
// //                 {emoloyeeProcess && emoloyeeProcess.stationUser ? (
// //                   emoloyeeProcess.stationUser.map((user: any) => (
// //                     <option key={user.id} value={user.id}>
// //                       {`${user.name} (${user.email})`}
// //                     </option>
// //                   ))
// //                 ) : (
// //                   <option value="" disabled>
// //                     Loading...
// //                   </option>
// //                 )}
// //               </select>
// //               {formik.touched.stationUserId && formik.errors.stationUserId && (
// //                 <p className="text-red-500 text-sm mt-1">
// //                   {formik.errors.stationUserId}
// //                 </p>
// //               )}
// //             </div>

// //             <div className="flex flex-col gap-3 pt-4">
// //               <button
// //                 type="submit"
// //                 onClick={() => (submitTypeRef.current = "run_schedule")}
// //                 className="w-full bg-brand text-white py-2 rounded-md transition"
// //               >
// //                 Run Schedule
// //               </button>

// //               <div className="flex justify-between gap-2">
// //                 <button
// //                   type="submit"
// //                   onClick={() => (submitTypeRef.current = "run_with_scan")}
// //                   className="w-full bg-gradient-to-r from-[#5BE49B] to-[#00A76F] text-white py-2 rounded-md transition"
// //                 >
// //                   Run With Scan
// //                 </button>

// //                 <button
// //                   type="submit"
// //                   onClick={() => (submitTypeRef.current = "training")}
// //                   className="w-full bg-gradient-to-r from-[#FFAC82] to-[#FF5630] text-white py-2 rounded-md transition"
// //                 >
// //                   Training
// //                 </button>
// //               </div>

// //               <NavLink to="/scrap-entry">
// //                 <button
// //                   type="button"
// //                   className="w-full flex items-center justify-center border border-gray-300 py-2 mt-6 rounded-md hover:bg-gray-100 transition font-bold"
// //                 >
// //                   Scrap Entry <FaChevronRight className="ml-2 " />
// //                 </button>
// //               </NavLink>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default StationLogin;
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { FaChevronRight } from "react-icons/fa";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
// import {
//   selecEmployeeProcessApi,
//   stationLogin,
// } from "./https/productionResponseApi";

// type SubmitType = "run_schedule" | "run_with_scan" | "training";

// const StationLogin = () => {
//   const navigate = useNavigate();
//   const [emoloyeeProcess, setEmployeeProcess] = useState<any | null>(null);
//   const submitTypeRef = useRef<SubmitType>("run_schedule");

//   const formik = useFormik({
//     initialValues: {
//       processId: "",
//       stationUserId: "", // Se llenará automáticamente desde la API
//     },
//     validationSchema: Yup.object({
//       processId: Yup.string().required("Station/Process is required"),
//       stationUserId: Yup.string().required("User ID is missing"), // Validación interna, no para el usuario
//     }),
//     onSubmit: async (values) => {
//       const type = submitTypeRef.current;
//       const data = {
//         processId: values.processId,
//         stationUserId: values.stationUserId,
//         type: type,
//       };

//       try {
//         const response = await stationLogin(data);
//         if (response && response.status === 200) {
//           toast.success("Login Successful!");
//           localStorage.setItem("stationUserId", values.stationUserId);
//           switch (type) {
//             case "run_schedule":
//               navigate(`/run-schedule/${values.processId}`);
//               break;
//             case "run_with_scan":
//               navigate(`/run-with-scan/${values.processId}`);
//               break;
//             case "training":
//               navigate(`/training/${values.processId}`);
//               break;
//             default:
//               navigate("/");
//           }
//         }
//       } catch (error) {
//         toast.error(
//           "An unexpected error occurred. Please check your connection."
//         );
//       }
//     },
//   });

//   const fetchEmployeeProcess = async () => {
//     try {
//       const response = await selecEmployeeProcessApi();
//       if (response) {
//         setEmployeeProcess(response);
//         // ***** CAMBIO 1: Acceder al primer usuario del array 'stationUsers' *****
//         // La API ahora siempre devuelve un array, incluso si es para un solo usuario.
//         if (response.stationUsers && response.stationUsers.length > 0) {
//           const user = response.stationUsers[0]; // Tomamos el primer (y único) usuario
//           formik.setFieldValue("stationUserId", user.id);
//         }
//       } else {
//         setEmployeeProcess(null);
//       }
//     } catch (error) {
//       toast.error("Failed to fetch login data");
//       console.error("Failed to fetch process:", error);
//     }
//   };

//   useEffect(() => {
//     fetchEmployeeProcess();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="bg-[#F5F6FA]">
//       <div className="justify-between flex flex-row items-center px-4 py-2">
//         <button
//           type="button"
//           onClick={() => navigate(-1)} // Go back one page
//           className="w-full flex items-center justify-start ml-7 py-2 rounded-md hover:bg-gray-100 transition font-bold"
//         >
//           <FaArrowLeft className="mr-2" />
//           Back
//         </button>
//       </div>
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//           <h1 className="text-2xl font-bold text-center mb-6">
//             Station / Process Login
//           </h1>
//           <form onSubmit={formik.handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700 font-medium">Station</label>
//               <select
//                 name="processId"
//                 value={formik.values.processId}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 className={`w-full mt-1 p-3 border rounded-md ${
//                   formik.touched.processId && formik.errors.processId
//                     ? "border-red-500"
//                     : ""
//                 }`}
//               >
//                 <option value="">Select Process Name</option>
//                 {/* Esta parte ya estaba correcta */}
//                 {emoloyeeProcess && emoloyeeProcess.processOverviews ? (
//                   emoloyeeProcess.processOverviews.map((process: any) => (
//                     <option key={process.processId} value={process.processId}>
//                       {`${process.processName}`}
//                     </option>
//                   ))
//                 ) : (
//                   <option value="" disabled>
//                     Loading...
//                   </option>
//                 )}
//               </select>
//               {formik.touched.processId && formik.errors.processId && (
//                 <p className="text-red-500 text-sm mt-1">
//                   {formik.errors.processId}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium">Name</label>

//               <input
//                 type="text"
//                 // Usamos encadenamiento opcional (?.) para evitar errores si los datos aún no han llegado.
//                 value={
//                   emoloyeeProcess?.stationUsers?.[0]
//                     ? `${emoloyeeProcess.stationUsers[0].name} (${emoloyeeProcess.stationUsers[0].email})`
//                     : "Loading..."
//                 }
//                 disabled
//                 className="w-full mt-1 p-3 border rounded-md bg-gray-100 cursor-not-allowed"
//               />
//             </div>

//             <div className="flex flex-col gap-3 pt-4">
//               <button
//                 type="submit"
//                 onClick={() => (submitTypeRef.current = "run_schedule")}
//                 className="w-full bg-brand text-white py-2 rounded-md transition"
//               >
//                 Run Schedule
//               </button>

//               <div className="flex justify-between gap-2">
//                 <button
//                   type="submit"
//                   onClick={() => (submitTypeRef.current = "run_with_scan")}
//                   className="w-full bg-gradient-to-r from-[#5BE49B] to-[#00A76F] text-white py-2 rounded-md transition"
//                 >
//                   Run With Scan
//                 </button>

//                 <button
//                   type="submit"
//                   onClick={() => (submitTypeRef.current = "training")}
//                   className="w-full bg-gradient-to-r from-[#FFAC82] to-[#FF5630] text-white py-2 rounded-md transition"
//                 >
//                   Training
//                 </button>
//               </div>

//               <NavLink to="/scrap-entry">
//                 <button
//                   type="button"
//                   className="w-full flex items-center justify-center border border-gray-300 py-2 mt-6 rounded-md hover:bg-gray-100 transition font-bold"
//                 >
//                   Scrap Entry <FaChevronRight className="ml-2 " />
//                 </button>
//               </NavLink>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StationLogin;

// import { useForm } from "react-hook-form";
// import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
// import logo from "../../assets/logo.png";
// import { NavLink, useNavigate } from "react-router-dom";

// const StationLogin = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };

//   const navigate = useNavigate();

//   const RunSchedule = () => {
//     navigate("/run-schedule");
//   };
//   const RunWithScrap = () => {
//     navigate("/run-with-scan");
//   };
//   const Training = () => {
//     navigate("/training");
//   };

//   return (
//     <>
//       <div className="bg-[#F5F6FA]">
//         <div className="justify-between flex flex-row items-center px-4 py-2">
//               <div className="flex items-center gap-3">
//             <div className="relative group">
//               <button
//                 onClick={() => navigate(-1)}
//                 className="text-gray-600 hover:text-black"
//               >
//                 <FaArrowLeft size={20} />
//               </button>
//               <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 w-62 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition">
//                 Back to dashboard
//               </div>
//             </div>

//             <img className="w-[126px]" src={logo} alt="Logo" />
//           </div>

//         </div>
//         <div className="min-h-screen  flex items-center justify-center">
//           <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//             <h1 className="text-2xl font-bold text-center mb-6">
//               Station / Process Login
//             </h1>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               {/* Station */}
//               <div>
//                 <label className="block text-gray-700 font-medium">
//                   Station
//                 </label>
//                 <select
//                   {...register("station", { required: true })}
//                   className="w-full mt-1 p-3 border rounded-md"
//                 >
//                   <option value="">Select Process Name</option>
//                   <option value="Cut Trim">Cut Trim</option>
//                   <option value="Inspection">Inspection</option>
//                   <option value="Packaging">Packaging</option>
//                 </select>
//               </div>

//               {/* Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium">Name</label>
//                 <select
//                   {...register("name", { required: true })}
//                   className="w-full mt-1 p-3 border rounded-md"
//                 >
//                   <option value="">No Selection</option>
//                   <option value="John Doe">John Doe</option>
//                   <option value="Jane Smith">Jane Smith</option>
//                   <option value="Alice Brown">Alice Brown</option>
//                 </select>
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col gap-3">
//                 <button
//                   onClick={RunSchedule}
//                   className="w-full bg-brand text-white py-2 rounded-md  transition"
//                 >
//                   Run Schedule
//                 </button>

//                 <div className="flex justify-between ">
//                   <button
//                     onClick={RunWithScrap}
//                     type="button"
//                     className="w-full bg-gradient-to-r from-[#5BE49B] to-[#00A76F] text-white py-2  rounded-md  transition"
//                   >
//                     Run With Scan
//                   </button>

//                   <button
//                     onClick={Training}
//                     type="button"
//                     className="w-full bg-gradient-to-r from-[#FFAC82] to-[#FF5630] text-white py-2 rounded-md  transition ml-2"
//                   >
//                     Training
//                   </button>
//                 </div>
//                 <NavLink to="/scrap-entry">
//                   <button
//                     type="button"
//                     className="w-full flex items-center justify-center border border-gray-300 py-2 mt-6 rounded-md hover:bg-gray-100 transition font-bold"
//                   >
//                     Scrap Entry <FaChevronRight className="ml-2 " />
//                   </button>
//                 </NavLink>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default StationLogin;

import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowLeft, FaChevronRight } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  selecEmployeeProcessApi,
  stationLogin,
} from "./https/productionResponseApi";
import { useAuth } from "../../context/AuthContext";

type SubmitType = "run_schedule" | "run_with_scan" | "training";

const StationLogin = () => {
  const navigate = useNavigate();
  const [emoloyeeProcess, setEmployeeProcess] = useState<any | null>(null);
  const submitTypeRef = useRef<SubmitType>("run_schedule");

  useEffect(() => {
    fetchEmployeeProcess();
  }, []);

  const fetchEmployeeProcess = async () => {
    try {
      const response = await selecEmployeeProcessApi();
      setEmployeeProcess(response || null);
    } catch (error) {
      toast.error("Failed to fetch login data");
      console.error("Failed to fetch process:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      processId: "",
      stationUserId: "",
    },
    validationSchema: Yup.object({
      processId: Yup.string().required("Station/Process is required"),
      stationUserId: Yup.string().required("Name is required"),
    }),
    onSubmit: async (values) => {
      const type = submitTypeRef.current;
      const selectedProcess = emoloyeeProcess?.processOverviews?.find(
        (p: any) => p.processId === values.processId,
      );
      const partId = selectedProcess?.nextJob?.partId || null;
      const data = {
        processId: values.processId,
        stationUserId: values.stationUserId,
        type: type,
        partId: partId,
      };

      try {
        const response = await stationLogin(data);
        if (response && response.status === 200) {
          localStorage.setItem("stationUserId", values.stationUserId);
          toast.success("Login Successful!");
          switch (type) {
            case "run_schedule":
              navigate(`/run-schedule/${values.processId}`);
              break;
            case "run_with_scan":
              navigate(`/run-with-scan/${values.processId}`);
              break;
            case "training":
              navigate(`/training/${values.processId}`);
              break;
            default:
              navigate("/");
          }
        }
      } catch (error) {
        toast.error(
          "An unexpected error occurred. Please check your connection.",
        );
      }
    },
  });

  return (
    <div className="bg-[#F5F6FA]">
      <div className="justify-between flex flex-row items-center px-4 py-2"></div>
      <button
        type="button"
        onClick={() => navigate("/dashboardDetailes")}
        className="flex items-center justify-start ml-7 py-2 rounded-md hover:bg-gray-100 transition font-bold w-auto"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Station / Process Login
          </h1>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Station</label>
              <select
                name="processId"
                value={formik.values.processId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full mt-1 p-3 border rounded-md ${
                  formik.touched.processId && formik.errors.processId
                    ? "border-red-500"
                    : ""
                }`}
              >
                <option value="">Select Process Name</option>
                {emoloyeeProcess && emoloyeeProcess.processOverviews ? (
                  emoloyeeProcess.processOverviews.map((process: any) => (
                    <option key={process.processId} value={process.processId}>
                      {`${process.processName}`} ({`${process.machineName}`})
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Loading...
                  </option>
                )}
              </select>
              {formik.touched.processId && formik.errors.processId && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.processId}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <select
                id="stationUserId"
                name="stationUserId"
                value={formik.values.stationUserId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full mt-1 p-3 border rounded-md ${
                  formik.touched.stationUserId && formik.errors.stationUserId
                    ? "border-red-500"
                    : ""
                }`}
              >
                <option value="">Select a User</option>
                {emoloyeeProcess && emoloyeeProcess.stationUsers ? (
                  emoloyeeProcess.stationUsers.map((user: any) => (
                    <option key={user.id} value={user.id}>
                      {`${user.name} (${user.email})`}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>
                    Loading...
                  </option>
                )}
              </select>
              {formik.touched.stationUserId && formik.errors.stationUserId && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.stationUserId}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <button
                type="submit"
                onClick={() => (submitTypeRef.current = "run_schedule")}
                className="w-full bg-brand text-white py-2 rounded-md transition"
              >
                Run Schedule
              </button>

              <div className="flex justify-between gap-2">
                <button
                  type="submit"
                  onClick={() => (submitTypeRef.current = "run_with_scan")}
                  className="w-full bg-gradient-to-r from-[#5BE49B] to-[#00A76F] text-white py-2 rounded-md transition"
                >
                  Run With Scan
                </button>

                <button
                  type="submit"
                  onClick={() => (submitTypeRef.current = "training")}
                  className="w-full bg-gradient-to-r from-[#FFAC82] to-[#FF5630] text-white py-2 rounded-md transition"
                >
                  Training
                </button>
              </div>

              <NavLink to="/scrap-entry">
                <button
                  type="button"
                  className="w-full flex items-center justify-center border border-gray-300 py-2 mt-6 rounded-md hover:bg-gray-100 transition font-bold"
                >
                  Scrap Entry <FaChevronRight className="ml-2 " />
                </button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StationLogin;
