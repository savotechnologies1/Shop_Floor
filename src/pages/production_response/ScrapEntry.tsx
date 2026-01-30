// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FaCircle } from "react-icons/fa";
// import PartForm from "./PartForm";
// import ProductForm from "./ProductForm";

// const ScrapEntry = () => {
//   const [activeTab, setActiveTab] = useState("part"); // 'part' or 'product'

//   return (
//     <div className="p-4">
//       <div className="flex justify-between">
//         <h1 className="font-semibold text-[20px] md:text-[24px] text-black">
//           Scrap Entry
//         </h1>
//       </div>

//       <div className="flex justify-between items-center">
//         <div className="flex gap-2 items-center">
//           <p className="text-[14px] text-black">
//             <NavLink to="/dashboardDetailes">Dashboard</NavLink>
//           </p>
//           <FaCircle className="text-[6px] text-gray-500" />
//           <span className="text-[14px]">Shop Floor</span>
//           <FaCircle className="text-[6px] text-gray-500" />
//           <span className="text-[14px]">Scrap Entry</span>
//         </div>
//       </div>

//       <div className="py-6 bg-white mt-4 rounded-md p-4">
//         {/* Custom Tabs Implementation */}
//         <div className="flex gap-4 border-b">
//           <button
//             className={`p-2 px-4 rounded-t-md transition cursor-pointer ${
//               activeTab === "part" ? "bg-brand text-white" : "bg-transparent"
//             }`}
//             onClick={() => setActiveTab("part")}
//           >
//             Part
//           </button>
//           <button
//             className={`p-2 px-4 rounded-t-md transition cursor-pointer ${
//               activeTab === "product" ? "bg-brand text-white" : "bg-transparent"
//             }`}
//             onClick={() => setActiveTab("product")}
//           >
//             Product
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="mt-4">
//           {activeTab === "part" ? <PartForm /> : <ProductForm />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrapEntry;
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCircle } from "react-icons/fa";
import PartForm from "./PartForm";
import ProductForm from "./ProductForm";
const ScrapEntry = () => {
  const [activeTab, setActiveTab] = useState("part");
  const navigate = useNavigate();

  return (
    <div className="p-6 mt-5">
  <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-3 py-2 mb-3 rounded-md hover:bg-gray-100 transition font-medium"
          title="Go Back"
        >
          <FaArrowLeft />
          Back
        </button>
      <div className="flex flex-wrap items-center gap-4">
       

        <h1 className="font-semibold text-[20px] md:text-[24px] text-black">
          Scrap Entry
        </h1>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 mt-3 text-[14px]">
        <NavLink to="/dashboardDetailes" className="text-black hover:underline">
          Dashboard
        </NavLink>
        <FaCircle className="text-[6px] text-gray-400" />
        <span className="text-gray-500">Production Response</span>
        <FaCircle className="text-[6px] text-gray-400" />
        <span className="font-medium text-black">Scrap Entry</span>
      </div>

      {/* Content Box */}
      <div className="bg-white mt-5 rounded-lg shadow-sm border">
        {/* Tabs */}
        <div className="flex gap-2 border-b px-4 pt-4">
          <button
            onClick={() => setActiveTab("part")}
            className={`px-6 py-2 rounded-t-md font-medium transition
              ${
                activeTab === "part"
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Part
          </button>

          <button
            onClick={() => setActiveTab("product")}
            className={`px-6 py-2 rounded-t-md font-medium transition
              ${
                activeTab === "product"
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            Product
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-4">
          {activeTab === "part" ? <PartForm /> : <ProductForm />}
        </div>
      </div>
    </div>
  );
};

export default ScrapEntry;
