// import { useForm } from "react-hook-form";

// const ProductForm = () => {
//   // const [formData, setFormData] = useState({
//   //   orderNumber: "",
//   //   orderDate: "2025-02-26",
//   //   shipDate: "2025-02-26",
//   //   customer: "Cortez Herring",
//   //   customerName: "",
//   //   customerEmail: "",
//   //   customerPhone: "",
//   //   productNumber: "",
//   //   cost: "",
//   //   quantity: "",
//   //   description: "",
//   //   file: null,
//   //   partFamily: "Cortez Herring",
//   //   partNumber: "",
//   //   partDesc: "",
//   //   partQuantity: "",
//   //   partCost: "",
//   //   time: "09:33 AM",
//   //   process: "Cortez Herring",
//   //   assignTo: "Cortez Herring",
//   // });

//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//   };

//   return (
//     <div className="">
//       <form onSubmit={handleSubmit(onSubmit)} className="">
//         {/* Search Part */}
//         <div className="bg-white p-4">
//           <label className="block font-semibold mb-1">
//             Search Product For Update
//           </label>
//           <input
//             type="text"
//             placeholder="Search product for update....."
//             className="border py-3 px-4 rounded-md w-full text-gray-600 placeholder-black"
//             {...register("searchPart")}
//           />
//         </div>

//         {/* Part Family, Part, and Supplier */}
//         <div className="grid grid-cols-1 gap-4 bg-white p-4 ">
//           {/* <div>
//             <label className="block font-semibold mb-1">
//               Select Part Family
//             </label>
//             <select
//               {...register("partFamily")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="" disabled selected>
//                 Select Part Family
//               </option>
//               <option value="family1">Family 1</option>
//               <option value="family2">Family 2</option>
//               <option value="family3">Family 3</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-1">Select Part</label>
//             <select
//               {...register("part")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="" disabled selected>
//                 Select Part
//               </option>
//               <option value="part1">Part 1</option>
//               <option value="part2">Part 2</option>
//               <option value="part3">Part 3</option>
//             </select>
//           </div> */}
//           <div>
//             <label className="block font-semibold mb-1">Supplier</label>
//             <input
//               type="text"
//               {...register("supplier")}
//               placeholder="Enter supplier"
//               className="border py-3 px-4 rounded-md w-full text-gray-600 "
//             />
//           </div>
//         </div>

//         {/* Return Quantity and Scrap Status */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 ">
//           <div>
//             <label className="block font-semibold mb-1">Return Quantity</label>
//             <select
//               {...register("returnQuantity1")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="" disabled selected>
//                 Select Return Quantity
//               </option>
//               <option value="10">10</option>
//               <option value="20">20</option>
//               <option value="50">50</option>
//               <option value="100">100</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-1">Scrap Status</label>
//             <select
//               {...register("scrapStatus1")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="yes">yes</option>
//               <option value="no">no</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-1">Return Quantity</label>
//             <select
//               {...register("returnQuantity2")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="" disabled selected>
//                 Select Return Quantity
//               </option>
//               <option value="10">10</option>
//               <option value="20">20</option>
//               <option value="50">50</option>
//               <option value="100">100</option>
//             </select>
//           </div>
//           <div>
//             <label className="block font-semibold mb-1">Scrap Status</label>
//             <select
//               {...register("scrapStatus2")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//             >
//               <option value="yes">yes</option>
//               <option value="no">no</option>
//             </select>
//           </div>
//         </div>

//         {/* Add More Parts */}
//         <div className="bg-white p-4">
//           <button
//             type="button"
//             className="text-[#4092FF] text-sm hover:text-blue-800 flex items-center border-b border-[#4092FF]"
//           >
//             <span className="text-sm mr-1 bg-[#4092FF] rounded-full  text-white px-1 ">
//               +
//             </span>{" "}
//             Add More Parts
//           </button>
//         </div>

//         {/* Submit and Reset Buttons */}
//         <div className="flex items-center justify-start bg-white p-6">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-brand text-white text-md hover:bg-[#1a2e57] transition rounded-md"
//           >
//             Save Scrap
//           </button>
//           <button
//             type="reset"
//             className="px-6 py-2 text-red-500 hover:text-red-700 transition rounded-md flex items-center"
//           >
//             <span className="text-lg mr-1">🔄</span> Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ProductForm;
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ScrapEntryApi,
  selectProductNumber,
} from "./https/productionResponseApi";
import { selectCustomer } from "../order_schedule/https/schedulingApis";

const ProductForm = () => {
  const [partData, setPartData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [customerSuggestions, setCustomerSuggestions] = useState([]);

  const formik = useFormik({
    initialValues: {
      searchPart: "",
      partId: "",
      customer: "",
      customerId: "",
      returnQuantity: "",
      scrapStatus: "yes",
      type: "product",
      defectDesc: "", // ✅ Added defectDesc key
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log("Form Submitted:", values);
      try {
        setSubmitting(true);
        await ScrapEntryApi({
          ...values,
          type: "product",
          returnQuantity: parseInt(values.returnQuantity, 10) || 0,
        });

        // Success handling
        formik.resetForm();
        setSuggestions([]);
        setCustomerSuggestions([]);
      } catch (error) {
        console.error("Submission failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleReset = () => {
    formik.resetForm();
    setSuggestions([]);
    setCustomerSuggestions([]);
  };

  useEffect(() => {
    (async () => {
      try {
        const parts = await selectProductNumber();
        const customers = await selectCustomer();

        setPartData(parts || []);
        setCustomerData(customers || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    })();
  }, []);

  // Product Suggestions Logic
  useEffect(() => {
    if (formik.values.searchPart && !formik.values.partId) {
      const filteredSuggestions = partData.filter((part) =>
        part.partNumber
          .toLowerCase()
          .includes(formik.values.searchPart.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [formik.values.searchPart, formik.values.partId, partData]);

  // Customer Suggestions Logic
  useEffect(() => {
    if (formik.values.customer && !formik.values.customerId) {
      const filtered = customerData.filter((c) =>
        c.name.toLowerCase().includes(formik.values.customer.toLowerCase()),
      );
      setCustomerSuggestions(filtered);
    } else {
      setCustomerSuggestions([]);
    }
  }, [formik.values.customer, formik.values.customerId, customerData]);

  const handleSuggestionClick = (part) => {
    formik.setFieldValue("searchPart", part.partNumber);
    formik.setFieldValue("partId", part.id);
    setSuggestions([]);
  };

  const handleCustomerClick = (customer) => {
    formik.setFieldValue("customer", customer.name);
    formik.setFieldValue("customerId", customer.id);
    setCustomerSuggestions([]);
  };

  return (
    <div className="">
      <form onSubmit={formik.handleSubmit} className="">
        {/* 🔍 Search Product */}
        <div className="bg-white p-4">
          <label className="block font-semibold mb-1">Search Product</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search product ....."
              className="border py-3 px-4 rounded-md w-full text-gray-600 placeholder-black"
              value={formik.values.searchPart}
              onChange={(e) => {
                formik.setFieldValue("searchPart", e.target.value);
                formik.setFieldValue("partId", "");
              }}
              onFocus={() => {
                if (!formik.values.searchPart) setSuggestions(partData);
              }}
              onBlur={() => {
                setTimeout(() => setSuggestions([]), 150);
              }}
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                {suggestions.map((part) => (
                  <li
                    key={part.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleSuggestionClick(part)}
                  >
                    {part.partNumber} (Stock: {part.availStock})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 👥 Customer Selection */}
        <div className="grid grid-cols-1 gap-4 bg-white p-4">
          <label className="block font-semibold mb-1">Customer</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Customer"
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              value={formik.values.customer}
              onChange={(e) => {
                formik.setFieldValue("customer", e.target.value);
                formik.setFieldValue("customerId", "");
              }}
              onFocus={() => {
                if (!formik.values.customer)
                  setCustomerSuggestions(customerData);
              }}
              onBlur={() => {
                setTimeout(() => setCustomerSuggestions([]), 150);
              }}
            />
            {customerSuggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
                {customerSuggestions.map((customer) => (
                  <li
                    key={customer.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleCustomerClick(customer)}
                  >
                    {customer.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* 📦 Return Quantity & Scrap Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4">
          <div>
            <label className="block font-semibold mb-1">Return Quantity</label>
            <input
              type="number"
              placeholder="Enter Return Quantity"
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              {...formik.getFieldProps("returnQuantity")}
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Scrap Status</label>
            <select
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              {...formik.getFieldProps("scrapStatus")}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* ✅ NEW: Description / Defect Description Field */}
        <div className="bg-white p-4">
          <label className="block font-semibold mb-1">Defect Description</label>
          <textarea
            rows={3}
            placeholder="Enter reason for scrap or defect details..."
            className="border py-3 px-4 rounded-md w-full text-gray-600 focus:outline-blue-500"
            {...formik.getFieldProps("defectDesc")}
          />
        </div>

        {/* ✅ Buttons */}
        <div className="flex items-center justify-between bg-white p-6">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="px-6 py-2 bg-blue-600 text-white text-md hover:bg-blue-800 transition rounded-md disabled:bg-gray-400"
          >
            {formik.isSubmitting ? "Saving..." : "Save Scrap"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="ml-4 px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-md flex items-center"
          >
            <span className="text-lg mr-1">🔄</span> Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
