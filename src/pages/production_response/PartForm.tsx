// import { useEffect } from "react";
// import { useForm } from "react-hook-form";

// const PartForm = () => {

//   const supplier = "Cortez herring";
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

//   const {
//     register,
//     handleSubmit,
//     setValue,
//   } = useForm();

//   const onSubmit = (data: any) => {
//     console.log("Form Data:", data);
//   };

//   useEffect (()=>{
//     setValue("supplier", supplier),
//     [supplier, setValue]
//   });

//   return (
//     <div className="">
//       <form onSubmit={handleSubmit(onSubmit)} className="">
//         {/* Search Part */}
//         <div className="bg-white p-4">
//           <label className="block font-semibold mb-1">
//             Search Part For Update
//           </label>
//           <input
//             type="text"
//             placeholder="Search part for update....."
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
//           </div> */}
//           {/* <div>
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
//             <p
//               {...register("supplier")}
//               className="border py-3 px-4 rounded-md w-full text-gray-600 bg-gray-100"
//             >
//            {supplier}
//             </p>
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

// export default PartForm;

import { useState, useEffect, FC } from "react";
import { useFormik } from "formik";
import {
  ScrapEntryApi,
  selectPartNamber,
  selectSupplier,
} from "./https/productionResponseApi";

// const PartForm = () => {
//   const [partData, setPartData] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);
//   const [supplierData, setSupplierData] = useState([]);
//   const [supplierSuggestions, setSupplierSuggestions] = useState([]);

//   const formik = useFormik({
//     initialValues: {
//       searchPart: "",
//       partId: "",
//       supplier: "",
//       supplierId: "",
//       returnQuantity: "",
//       scrapStatus: "yes",
//       type: "part",
//     },
//     onSubmit: async (values, { setSubmitting }) => {
//       console.log("Form Submitted:", values);
//       const payload = {
//         ...values,
//         type: "part",
//         returnQuantity: parseInt(values.returnQuantity, 10) || 0,
//       };

//       try {
//         setSubmitting(true);
//         console.log("Submitting payload:", payload);
//         await ScrapEntryApi(payload);

//         // This part now only runs if ScrapEntryApi is SUCCESSFUL
//         formik.resetForm();
//         setSuggestions([]);
//         setSupplierSuggestions([]);
//       } catch (error) {
//         // The error is already handled and toasted by ScrapEntryApi
//         // We just need to catch it here to prevent the form from resetting.
//         console.error("Submission failed:", error);
//       } finally {
//         // Ensure the form is re-enabled even if there's an error
//         setSubmitting(false);
//       }
//     },
//   });

//   useEffect(() => {
//     (async () => {
//       try {
//         const parts = await selectPartNamber();
//         const suppliers = await selectSupplier();
//         setPartData(parts?.data || []);
//         setSupplierData(suppliers || []);
//       } catch (err) {
//         console.error(err);
//       }
//     })();
//   }, []);

//   // ... (the rest of your useEffect hooks and handlers are correct)
//   useEffect(() => {
//     if (formik.values.searchPart && !formik.values.partId) {
//       const filtered = partData.filter((part) =>
//         part.partNumber
//           .toLowerCase()
//           .includes(formik.values.searchPart.toLowerCase())
//       );
//       setSuggestions(filtered);
//     } else {
//       setSuggestions([]);
//     }
//   }, [formik.values.searchPart, formik.values.partId, partData]);

//   useEffect(() => {
//     if (formik.values.supplier && !formik.values.supplierId) {
//       const filtered = supplierData.filter((supplier) =>
//         supplier.name
//           .toLowerCase()
//           .includes(formik.values.supplier.toLowerCase())
//       );
//       setSupplierSuggestions(filtered);
//     } else {
//       setSupplierSuggestions([]);
//     }
//   }, [formik.values.supplier, formik.values.supplierId, supplierData]);

//   const handleSuggestionClick = (part) => {
//     formik.setFieldValue("searchPart", part.partNumber);
//     formik.setFieldValue("partId", part.id);
//     setSuggestions([]);
//   };

//   const handleSupplierClick = (supplier) => {
//     formik.setFieldValue("supplier", supplier.name);
//     formik.setFieldValue("supplierId", supplier.id);
//     setSupplierSuggestions([]);
//   };

//   const handleReset = () => {
//     formik.resetForm();
//     setSuggestions([]);
//     setSupplierSuggestions([]);
//   };

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit} autoComplete="off">
//         {/* Part Input */}
//         <div className="bg-white p-4 relative">
//           <label className="block font-semibold mb-1">Search Part</label>
//           <input
//             type="text"
//             placeholder="Search part ....."
//             className="border py-3 px-4 rounded-md w-full text-gray-600 placeholder-black"
//             value={formik.values.searchPart}
//             onChange={(e) => {
//               formik.setFieldValue("searchPart", e.target.value);
//               formik.setFieldValue("partId", "");
//             }}
//             onFocus={() => {
//               if (formik.values.searchPart) {
//                 const filtered = partData.filter((part) =>
//                   part.partNumber
//                     .toLowerCase()
//                     .includes(formik.values.searchPart.toLowerCase())
//                 );
//                 setSuggestions(filtered);
//               } else {
//                 setSuggestions(partData);
//               }
//             }}
//             onBlur={() => {
//               setTimeout(() => setSuggestions([]), 150);
//             }}
//           />
//           {suggestions.length > 0 && (
//             <ul className="absolute z-50 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
//               {suggestions.map((part) => (
//                 <li
//                   key={part.id}
//                   className="p-2 hover:bg-brand hover:text-white cursor-pointer"
//                   onClick={() => handleSuggestionClick(part)}
//                 >
//                   {part.partNumber} (Stock: {part.stock})
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Supplier Input */}
//         <div className="bg-white p-4 relative mt-4">
//           <label className="block font-semibold mb-1">Supplier</label>
//           <input
//             type="text"
//             placeholder="Search Supplier"
//             className="border py-3 px-4 rounded-md w-full text-gray-600"
//             value={formik.values.supplier}
//             onChange={(e) => {
//               formik.setFieldValue("supplier", e.target.value);
//               formik.setFieldValue("supplierId", "");
//               const filtered = supplierData.filter((s) =>
//                 s.name.toLowerCase().includes(e.target.value.toLowerCase())
//               );
//               setSupplierSuggestions(filtered);
//             }}
//             onFocus={() => {
//               if (formik.values.supplier) {
//                 const filtered = supplierData.filter((s) =>
//                   s.name
//                     .toLowerCase()
//                     .includes(formik.values.supplier.toLowerCase())
//                 );
//                 setSupplierSuggestions(filtered);
//               } else {
//                 setSupplierSuggestions(supplierData);
//               }
//             }}
//             onBlur={() => {
//               setTimeout(() => setSupplierSuggestions([]), 150);
//             }}
//           />
//           {supplierSuggestions.length > 0 && (
//             <ul className="absolute z-50 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
//               {supplierSuggestions.map((supplier) => (
//                 <li
//                   key={supplier.id}
//                   className="p-2 hover:bg-brand hover:text-white cursor-pointer"
//                   onClick={() => handleSupplierClick(supplier)}
//                 >
//                   {supplier.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {/* Return Quantity & Scrap Status */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 mt-4">
//           <div>
//             <label className="block font-semibold mb-1">Return Quantity</label>
//             <input
//               type="number"
//               placeholder="Enter Return Quantity"
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//               {...formik.getFieldProps("returnQuantity")}
//               min="0"
//               onKeyDown={(e) => {
//                 if (["e", "E", "+", "-", "."].includes(e.key)) {
//                   e.preventDefault();
//                 }
//               }}
//             />
//           </div>
//           <div>
//             <label className="block font-semibold mb-1">Scrap Status</label>
//             <select
//               className="border py-3 px-4 rounded-md w-full text-gray-600"
//               {...formik.getFieldProps("scrapStatus")}
//             >
//               <option value="yes">Yes</option>
//               <option value="no">No</option>
//             </select>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center justify-between bg-white p-6 mt-4">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white text-md hover:bg-blue-800 transition rounded-md"
//             disabled={formik.isSubmitting} // Disable button while submitting
//           >
//             {formik.isSubmitting ? "Saving..." : "Save Scrap"}
//           </button>
//           <button
//             type="button"
//             onClick={handleReset}
//             className="ml-4 px-6 py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition rounded-md flex items-center"
//           >
//             <span className="text-lg mr-1">🔄</span> Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PartForm;

// Define the shape of our data
interface Part {
  id: string | number;
  partNumber: string;
  stock: number;
}

interface Supplier {
  id: string | number;
  name: string;
}

interface FormValues {
  searchPart: string;
  partId: string | number; // Should not be null when submitted
  supplier: string;
  supplierId: string | number; // Should not be null when submitted
  returnQuantity: string | number; // Input value can be string, we parse to number
  scrapStatus: "yes" | "no";
  type: "part";
}

// Define the type for our form's initial values, excluding the 'type' field
type PartFormValues = Omit<FormValues, "type">;

const PartForm: FC = () => {
  // Use generics to type the state variables
  const [partData, setPartData] = useState<Part[]>([]);
  const [suggestions, setSuggestions] = useState<Part[]>([]);
  const [supplierData, setSupplierData] = useState<Supplier[]>([]);
  const [supplierSuggestions, setSupplierSuggestions] = useState<Supplier[]>(
    []
  );

  // *** FIX: Explicitly type the initialValues object to match the Formik state ***
  const initialValues: PartFormValues = {
    searchPart: "",
    partId: "", // Now correctly typed as string | number
    supplier: "",
    supplierId: "", // Now correctly typed as string | number
    returnQuantity: "", // Now correctly typed as string | number
    scrapStatus: "yes", // Now correctly typed as 'yes' | 'no'
  };

  // The generic is now inferred from the typed initialValues, no need to pass it explicitly
  const formik = useFormik({
    initialValues, // Use the typed initialValues object
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      console.log("Form Submitted:", values);

      const payload: FormValues = {
        ...values,
        type: "part",
        returnQuantity: parseInt(String(values.returnQuantity), 10) || 0,
        // Ensure IDs are not empty strings before submission, or handle in API
        partId: values.partId || 0,
        supplierId: values.supplierId || 0,
      };

      try {
        setSubmitting(true);
        console.log("Submitting payload:", payload);
        await ScrapEntryApi(payload);

        // Success: Reset form and suggestions
        resetForm();
        setSuggestions([]);
        setSupplierSuggestions([]);
      } catch (error) {
        console.error("Submission failed:", error);
        // Error is handled in ScrapEntryApi, so we just catch it here
        // to prevent the form from resetting on failure.
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const partsResponse = await selectPartNamber();
        const suppliersResponse = await selectSupplier();
        setPartData(partsResponse?.data || []);
        setSupplierData(suppliersResponse || []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    if (formik.values.searchPart && !formik.values.partId) {
      const filtered = partData.filter((part) =>
        part.partNumber
          .toLowerCase()
          .includes(formik.values.searchPart.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [formik.values.searchPart, formik.values.partId, partData]);

  useEffect(() => {
    if (formik.values.supplier && !formik.values.supplierId) {
      const filtered = supplierData.filter((supplier) =>
        supplier.name
          .toLowerCase()
          .includes(formik.values.supplier.toLowerCase())
      );
      setSupplierSuggestions(filtered);
    } else {
      setSupplierSuggestions([]);
    }
  }, [formik.values.supplier, formik.values.supplierId, supplierData]);

  // Type the function parameters for clarity and safety
  const handleSuggestionClick = (part: Part) => {
    formik.setFieldValue("searchPart", part.partNumber);
    formik.setFieldValue("partId", part.id);
    setSuggestions([]);
  };

  const handleSupplierClick = (supplier: Supplier) => {
    formik.setFieldValue("supplier", supplier.name);
    formik.setFieldValue("supplierId", supplier.id);
    setSupplierSuggestions([]);
  };

  const handleReset = () => {
    formik.resetForm();
    setSuggestions([]);
    setSupplierSuggestions([]);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        {/* Part Input */}
        <div className="bg-white p-4 relative">
          <label className="block font-semibold mb-1">Search Part</label>
          <input
            type="text"
            placeholder="Search part ....."
            className="border py-3 px-4 rounded-md w-full text-gray-600 placeholder-black"
            value={formik.values.searchPart}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue("searchPart", e.target.value);
              formik.setFieldValue("partId", ""); // Reset ID when search text changes
            }}
            onFocus={() => {
              if (formik.values.searchPart) {
                const filtered = partData.filter((part) =>
                  part.partNumber
                    .toLowerCase()
                    .includes(formik.values.searchPart.toLowerCase())
                );
                setSuggestions(filtered);
              } else {
                setSuggestions(partData);
              }
            }}
            onBlur={() => {
              setTimeout(() => setSuggestions([]), 150);
            }}
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-50 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
              {suggestions.map((part) => (
                <li
                  key={part.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(part)}
                >
                  {part.partNumber} (Stock: {part.stock})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Supplier Input */}
        <div className="bg-white p-4 relative mt-4">
          <label className="block font-semibold mb-1">Supplier</label>
          <input
            type="text"
            placeholder="Search Supplier"
            className="border py-3 px-4 rounded-md w-full text-gray-600"
            value={formik.values.supplier}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formik.setFieldValue("supplier", e.target.value);
              formik.setFieldValue("supplierId", "");
            }}
            onFocus={() => {
              // Show all suppliers on focus if input is empty
              if (!formik.values.supplier) {
                setSupplierSuggestions(supplierData);
              }
            }}
            onBlur={() => {
              setTimeout(() => setSupplierSuggestions([]), 150);
            }}
          />
          {supplierSuggestions.length > 0 && (
            <ul className="absolute z-50 w-full bg-white border rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg">
              {supplierSuggestions.map((supplier) => (
                <li
                  key={supplier.id}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSupplierClick(supplier)}
                >
                  {supplier.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Return Quantity & Scrap Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 mt-4">
          <div>
            <label className="block font-semibold mb-1">Return Quantity</label>
            <input
              type="number"
              placeholder="Enter Return Quantity"
              className="border py-3 px-4 rounded-md w-full text-gray-600"
              {...formik.getFieldProps("returnQuantity")}
              min="0"
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                // Prevent non-numeric characters in number input
                if (["e", "E", "+", "-", "."].includes(e.key)) {
                  e.preventDefault();
                }
              }}
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

        {/* Buttons */}
        <div className="flex items-center justify-between bg-white p-6 mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white text-md hover:bg-blue-800 transition rounded-md disabled:bg-gray-400"
            disabled={formik.isSubmitting}
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

export default PartForm;
