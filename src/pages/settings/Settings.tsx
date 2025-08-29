// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { FaCircle } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Settings = () => {
//   const [photo, setPhoto] = useState<string | null>(null);
// const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const file = e.target.files?.[0];
//   if (file) {
//     setPhoto(URL.createObjectURL(file));
//   }
// };

//   const form1 = useForm(); // For Account form
//   // const form2 = useForm(); // For Language/Currency form

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };
//   // const onSubmit1 = (data: any) => {
//   //   console.log(data);
//   // };

//   return (
//     <div className="p-8  min-h-screen">
//       <div className=" mx-auto  p-">
//         <h1 className="text-2xl font-bold mb-2">Account</h1>
//         <div className="flex justify-between  items-center mb-6">
//           <div className="flex gap-2 items-center ">
//             <p
//               className={`text-[14px] text-black`}
//               onClick={() => ("dashboardDetailes")}
//             >
//               <NavLink to={"/dashboardDetailes"}>Dashboard</NavLink>
//             </p>
//             <span>
//               <FaCircle className="text-[6px] text-gray-500" />
//             </span>
//             <span className="text-[14px] hover:cursor-pointer">Account</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Left Profile Card */}
//           <div className="bg-white p-6 shadow rounded-lg">
//             <div className="flex flex-col items-center mt-12">
//               <div className="w-32 h-32 rounded-full shadow-xl relative group overflow-hidden">
//                 {/* Image Preview */}
//                 {photo ? (
//                   <img
//                     src={photo}
//                     alt="Profile"
//                     className="w-full h-full object-cover rounded-full transition-opacity duration-300 "
//                   />
//                 ) : (
//                   <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:opacity-40 transition-opacity duration-300">
//                     Update Photo
//                   </div>
//                 )}

//                 {/* Hidden Input */}
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="absolute inset-0 opacity-0 cursor-pointer z-10"
//                   onChange={handlePhotoChange}
//                 />

//                 {/* Overlay Text */}
//               </div>

//               <p className="text-sm mt-4 text-gray-600">
//                 Allowed: .jpeg, .jpg, .png, .gif
//               </p>
//               <p className="text-sm">Max size of 3.1 MB</p>

//               <div className="flex items-center mt-4">
//                 <span className="mr-2">Public profile</span>
//                 <label className="inline-flex items-center cursor-pointer">
//                   <input type="checkbox" className="sr-only peer" />
//                   <div
//                     className={`relative w-11 h-6 rounded-full peer dark:bg-[#00A76F] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-400 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#00A76F] `}
//                   ></div>
//                 </label>
//               </div>

//               <button className="bg-[#FF563014] text-[#B71D18] px-4 py-2 mt-4 rounded-md font-semibold">
//                 Delete user
//               </button>
//             </div>
//           </div>

//           {/* Right Form */}
//           <div className=" md:col-span-2 bg-white p-4 rounded-lg shadow-md">
//             <form
//               onSubmit={form1.handleSubmit(onSubmit)}
//               className="grid grid-cols-1 md:grid-cols-2 gap-4"
//             >
//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("name")}
//                   placeholder="Name"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   {...form1.register("email")}
//                   placeholder="Email"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div  className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("phone")}
//                   placeholder="365-374-4961"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("address")}
//                   placeholder="Address"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   Country
//                 </label>
//                 <select
//                   {...form1.register("country")}
//                   className="w-full border px-4 py-2 rounded-md "
//                 >
//                   <option>USA</option>
//                   <option>UK</option>
//                   <option>Canada</option>
//                 </select>
//               </div>

//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("city")}
//                   placeholder="city"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2 md:col-span-1">
//                 <label className="text-sm font-medium text-[#637381]">
//                   State/Region
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("state")}
//                   placeholder="State/Region"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-medium text-[#637381]">
//                   Zip/Code
//                 </label>
//                 <input
//                   type="text"
//                   {...form1.register("zip")}
//                   placeholder="Zip code"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2">
//                 <label className="text-sm font-medium ">About</label>
//                 <textarea
//                   {...form1.register("about")}
//                   placeholder="About"
//                   className="w-full border px-4 py-2 rounded-md "
//                 />
//               </div>

//               <div className="col-span-2 flex justify-end">
//                 <button
//                 onClick={form1.handleSubmit(onSubmit)}
//                   type="submit"
//                   className="bg-brand text-white px-6 py-2 rounded-sm"
//                 >
//                   Save changes
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         {/* <div className="grid grid-cols-1 mt-6">
//           <div className=" bg-white p-6 rounded-lg shadow-md">
//             <form
//               onSubmit={form2.handleSubmit(onSubmit1)}

//             className="grid grid-cols-1 md:grid-cols-4 gap-6">

//               <div className="col-span-4 md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   LANGUAGE
//                 </label>
//                 <select
//                   {...form2.register("language")}
//                   className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white"
//                 >
//                   <option>English (UK)</option>
//                   <option>English (US)</option>
//                   <option>Other Languages...</option>
//                 </select>
//               </div>

//               <div className= "col-span-4 md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   CURRENCY
//                 </label>
//                 <select
//                   {...form2.register("currency")}
//                   className="w-full border border-gray-300 px-4 py-2 rounded-md bg-white"
//                 >
//                   <option>$ USD</option>
//                   <option>€ EUR</option>
//                   <option>£ GBP</option>
//                   <option>Other Currencies...</option>
//                 </select>
//               </div>

//               <div className="col-span-4 md:col-span-2">
//                 <div className="flex flex-col">
//                   <input
//                     type="text"
//                     id="notifications"
//                     {...form2.register("notifications")}
//                     placeholder=" Notification "
//                     className="w-full p-2 border border-gray-300 rounded-md   "
//                   />
//                 </div>
//               </div>

//               <div className="col-span-4 md:col-span-1">
//                 <input
//                   type="text"
//                   id="Terms"
//                   {...form2.register("Terms&Conditions")}
//                   placeholder=" Terms and conditions"
//                   className="w-full p-2 border border-gray-300 rounded-md  "
//                 />
//               </div>

//               <div className="col-span-4 md:col-span-1">
//                 <NavLink to="/forget-password">
//                   <button
//                     type="button"
//                     className="w-full p-2 border border-gray-300 rounded-md hover:bg-blue-100 transition"
//                   >
//                     Change Password
//                   </button>
//                 </NavLink>
//               </div>

//               <div className="col-span-4">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="autoApproval"
//                     {...form2.register("autoApproval")}
//                     className="h-4 w-4 text-brand focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label htmlFor="autoApproval" className="ml-2 block text-xs md:text-sm ">
//                     Auto approve all process/orders when received (uncheck to
//                     manually edit)
//                   </label>
//                 </div>
//               </div>

//               <div className=" col-span-4 md:col-span-2">
//                 <button
//                   type="button"
//                   className="text-red-600 hover:text-red-800 text-sm font-medium"
//                 >
//                   Delete Account
//                 </button>
//               </div>

//               <div className=" flex md:justify-end col-span-4 md:col-span-2">
//                 <button
//                 onClick={form2.handleSubmit(onSubmit1)}
//                   type="submit"
//                   className="bg-brand text-white px-3  md:px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm md:text-base"
//                 >
//                   Save Settings
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Settings;

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FaCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { deleteProfile, getProfile, updateProfile } from "./https/profileApi";
import { Country, State, City } from "country-state-city";
import Select from "react-select";

const IMAGE_URL = import.meta.env.VITE_SERVER_URL;

const Settings = () => {
  const [photo, setPhoto] = useState<string | null>(null);
  const [employeeProfileImg, setProfileImg] = useState<string | null>(null);
  const [isFile, setIsFile] = useState<string | boolean>(false);

  const form1 = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
      country: null,
      city: null,
      state: null,
      zipCode: "",
      about: "",
    },
  });

  const {
    reset,
    setValue,
    watch,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = form1;

  const handlePhotoChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setIsFile(true);
      setProfileImg(file);
      setPhoto(URL.createObjectURL(file));
    }
  };
  const selectedCountry = watch("country");
  const selectedState = watch("state");

  const countryOptions = Country.getAllCountries().map((c) => ({
    value: c.isoCode,
    label: c.name,
  }));

  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((s) => ({
        value: s.isoCode,
        label: s.name,
      }))
    : [];

  const cityOptions = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(
        (ci) => ({
          value: ci.name,
          label: ci.name,
        })
      )
    : [];

  // const onSubmit = (data) => {
  //   console.log("Submitted:", {
  //     ...data,
  //     country: data.country?.label,
  //     state: data.state?.label,
  //     city: data.city?.label,
  //   });
  // };

  const onSubmit = async (data: any) => {
    await updateProfile(
      {
        ...data,
        country: data.country?.label,
        state: data.state?.label,
        city: data.city?.label,
      },
      employeeProfileImg,
      isFile
    );
  };
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await getProfile();
      const data = res.data;

      // Load profile image
      if (data?.employeeProfileImg) {
        const imageUrl = `${IMAGE_URL}/uploads/employeeProfileImg/${data.employeeProfileImg}`;
        setPhoto(imageUrl);
        setProfileImg(data.employeeProfileImg);
      }

      const countries = Country.getAllCountries();
      const foundCountry = countries.find((c) => c.name === data.country);
      const countryOption = foundCountry
        ? { label: foundCountry.name, value: foundCountry.isoCode }
        : null;

      let stateOption = null;
      let cityOption = null;

      if (countryOption) {
        const states = State.getStatesOfCountry(countryOption.value);
        const foundState = states.find((s) => s.name === data.state);
        stateOption = foundState
          ? { label: foundState.name, value: foundState.isoCode }
          : null;

        if (stateOption) {
          const cities = City.getCitiesOfState(
            countryOption.value,
            stateOption.value
          );
          const foundCity = cities.find((ci) => ci.name === data.city);
          cityOption = foundCity
            ? { label: foundCity.name, value: foundCity.name }
            : null;
        }
      }

      reset({
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        phoneNumber: data.phoneNumber || "",
        address: data.address || "",
        zipCode: data.zipCode || "",
        about: data.about || "",
        country: countryOption,
        state: stateOption,
        city: cityOption,
      });
    };

    fetchUserData();
  }, [reset]);

  const deletProfileApi = async () => {
    try {
      await deleteProfile();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="p-8 mt-8 min-h-screen">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold mb-2">Account</h1>

        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 items-center">
            <p className="text-[14px] text-black">
              <NavLink to={"/dashboardDetailes"}>Dashboard</NavLink>
            </p>
            <FaCircle className="text-[6px] text-gray-500" />
            <span className="text-[14px] hover:cursor-pointer">Account</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="flex flex-col items-center mt-12">
              <div className="w-32 h-32 rounded-full shadow-xl relative group overflow-hidden">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    Update Photo
                  </div>
                )}

                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  onChange={handlePhotoChange}
                />
              </div>

              <p className="text-sm mt-4 text-gray-600">
                Allowed: .jpeg, .jpg, .png
              </p>
              <p className="text-sm">Max size of 3.1 MB</p>

              <button
                className="bg-[#FF563014] text-[#B71D18] px-4 py-2 mt-4 rounded-md font-semibold"
                onClick={deletProfileApi}
              >
                Delete
              </button>
            </div>
          </div>

          <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div>
                <label className="text-sm font-medium text-[#637381]">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="First Name"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#637381]">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="Last Name"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#637381]">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#637381]">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  placeholder="365-374-4961"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#637381]">
                  Address
                </label>
                <textarea
                  {...register("address")}
                  placeholder="Address"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>

              <div className="">
                <label className="text-sm font-medium text-[#637381]">
                  About
                </label>
                <textarea
                  {...register("about")}
                  placeholder="About"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <div>
                <label>Country:</label>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "Country is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={countryOptions}
                      placeholder="Select country..."
                    />
                  )}
                />
                {errors.country && (
                  <p style={{ color: "red" }}>{errors.country.message}</p>
                )}
              </div>

              <div>
                <label>State:</label>
                <Controller
                  name="state"
                  control={control}
                  rules={{ required: "State is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={stateOptions}
                      placeholder="Select state..."
                      isDisabled={!selectedCountry}
                    />
                  )}
                />
                {errors.state && (
                  <p style={{ color: "red" }}>{errors.state.message}</p>
                )}
              </div>

              <div>
                <label>City:</label>
                <Controller
                  name="city"
                  control={control}
                  // rules={{ required: "City is required" }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={cityOptions}
                      placeholder="Select city..."
                      isDisabled={!selectedState}
                    />
                  )}
                />
                {errors.city && (
                  <p style={{ color: "red" }}>{errors.city.message}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-[#637381]">
                  Zip/Code
                </label>
                <input
                  type="text"
                  {...register("zipCode")}
                  placeholder="Zip code"
                  className="w-full border px-4 py-2 rounded-md"
                />
              </div>
              <div className="col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
