import {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward, IoMdMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import radius from "../assets/Radius.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faCalendarMinus,
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// const dashboard = <FontAwesomeIcon icon={faGaugeSimpleHigh} />;
// const order = <FontAwesomeIcon icon={faChartSimple} />;
// const supply_chain = <FontAwesomeIcon icon={faUser} />;
const time_clock = <FontAwesomeIcon icon={faUser} />;
// const production_live = <FontAwesomeIcon icon={faVectorSquare} />;
const production_response = <FontAwesomeIcon icon={faCalendarMinus} />;
const setting = <FontAwesomeIcon icon={faGear} />;
// const operation = <FontAwesomeIcon icon={faBagShopping} />;
// const invoice = <FontAwesomeIcon icon={faFileInvoiceDollar} />;
// const blog = <FontAwesomeIcon icon={faNewspaper} />;
// const work = <FontAwesomeIcon icon={faBriefcase} />;
const logout = <FontAwesomeIcon icon={faRightFromBracket} color="red" />;

interface BaseMenuItem {
  key: string;
  label: string;
  icon: JSX.Element;
  path?: string;
}

interface SubMenuItem extends BaseMenuItem {
  hasSubmenu: true;
  submenu: MenuItem[];
}

interface SimpleMenuItem extends BaseMenuItem {
  hasSubmenu?: false;
}

type MenuItem = SubMenuItem | SimpleMenuItem;


interface SidebarProps {
  activeMenu: boolean;
  clicked: () => void;
}

const Sidebar = ({ activeMenu, clicked }: SidebarProps) => {
//  const [role, setRole] = useState(localStorage.getItem("role"));

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     setRole(localStorage.getItem("role"));
  //   };

  //   window.addEventListener("storage", handleStorageChange);

  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);

  // const isShopFloor = role === "shopfloor";

    const handleMenuItemClick = (item: BaseMenuItem) => {
    if (item.key === "Logout") {
      localStorage.removeItem("token");
      navigate("/sign-in");
    } else if ("hasSubmenu" in item && item.hasSubmenu) {
      toggleSubmenu(item.key);
    } else if ("path" in item && item.path) {
      navigate(item.path);
    }
  };
const sections =  
   [
    
      {
        category: "Daily Activity",
        items: [
          {
            key: "Time Clock",
            label: "Time Clock",
            icon: time_clock,
            hasSubmenu: true,
            submenu: [
              {
                key: "Clockinout",
                label: "Clock in and out",
                path: "/clock-in-out",
              },
              {
                key: "VacationRequest",
                label: "Vacation Request",
                path: "/vaction-request",
              },
              {
                key: "Time_Sheet",
                label: "Time Sheet",
                path: "/time-sheet",
              },
            ],
          },
          {
            key: "Production Response",
            label: "Production Response",
            icon: production_response,
            path: "/station-login",
          },
        ],
      },
   
        {
        category: "INSIGHT",
        items: [
      //     {
      //       key: "Operation performance",
      //       label: "Operation performance",
      //       icon: operation,
      //       path: "/operation-performance",
      //     },
      //     {
      //       key: " Quality Performance",
      //       label: " Quality Performance",
      //       icon: invoice,
      //       path: "/quality-performance",
      //     },
      //     {
      //       key: "Continuous Improvement",
      //       label: "Continuous Improvement ",
      //       icon: blog,
      //       path: "/continuous-improvement",
      //     },
      //     {
      //       key: "Customer relation",
      //       label: "Customer relation",
      //       icon: order,
      //       path: "/customer-relation",
      //     },
      //     {
      //       key: "Business Intelligence ",
      //       label: "Business Intelligence  ",
      //       icon: order,
      //       path: "/business-intelligence",
      //     },
      //     {
      //       key: "Business Analysis",
      //       label: "Business Analysis ",
      //       icon: blog,
      //       path: "/business-analysis",
      //     },
      //     {
      //       key: "projecion ",
      //       label: "Projecion  ",
      //       icon: production_response,
      //       path: "/projecion",
      //     },
          {
            key: "Setting",
            label: "Settings",
            icon: setting,
            path: "/settings",
          },
          {
            key: "Logout",
            label: "Logout",
            icon: logout,
            path: "/sign-in",
          },
        ],
      },
    ]
  // : [
  //     {
  //       category: "Overview",
  //       items: [
  //         {
  //           key: "Dashboard",
  //           label: "Dashboard",
  //           icon: dashboard,
  //           path: "/dashboardDetailes",
  //         },
  //       ],
  //     },
  //     {
  //       category: "Daily Activity",
  //       items: [
  //         {
  //           key: "Order Scheduling",
  //           label: "Order Scheduling",
  //           icon: order,
  //           hasSubmenu: true,
  //           submenu: [
  //             {
  //               key: "Customer Order",
  //               label: "Customer Order",
  //               hasSubmenu: true,
  //               submenu: [
  //                 {
  //                   key: "Stock Order",
  //                   label: "Stock Order",
  //                   path: "/stock-order",
  //                 },
  //                 {
  //                   key: "Custom Order",
  //                   label: "Custom Order",
  //                   path: "/custom-order",
  //                 },
  //               ],
  //             },
  //             {
  //               key: "Order Schedule",
  //               label: "Order Schedule",
  //               hasSubmenu: true,
  //               submenu: [
  //                 {
  //                   key: "Stock Order Schedule",
  //                   label: "Stock Order Schedule",
  //                   path: "/stock-order-schedule",
  //                 },
  //                 {
  //                   key: "Custom Order Schedule",
  //                   label: "Custom Order Schedule",
  //                   path: "/custom-order-schedule",
  //                 },
  //                 {
  //                   key: "Daily Schedule",
  //                   label: "Daily Schedule",
  //                   hasSubmenu: true,
  //                   submenu: [
  //                     {
  //                       key: "Daily schedule",
  //                       label: "Daily schedule",
  //                       path: "/daily-schedule",
  //                     },
  //                     {
  //                       key: "Capacity Status",
  //                       label: "Capacity Status",
  //                       path: "/capacity-status",
  //                     },
  //                     {
  //                       key: "Labor Forecast",
  //                       label: "Labor Forecast",
  //                       path: "/labor-forecast",
  //                     },
  //                     {
  //                       key: "Inventory Status",
  //                       label: "Inventory Status",
  //                       path: "/inventory-status",
  //                     },
  //                   ],
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //         {
  //           key: "Supply Chain",
  //           label: "Supply Chain",
  //           icon: supply_chain,
  //           hasSubmenu: true,
  //           submenu: [
  //             {
  //               key: "SupplierInformationList",
  //               label: "Supplier Information List",
  //               hasSubmenu: true,
  //               submenu: [
  //                 {
  //                   key: "SupplierList",
  //                   label: "Supplier List",
  //                   path: "/all-supplier",
  //                 },
  //                 {
  //                   key: "newSupplier",
  //                   label: "Add & Edit supplier",
  //                   path: "/new-supplier",
  //                 },
  //               ],
  //             },
  //             {
  //               key: "SupplierOrder",
  //               label: "Supplier Order",
  //               path: "/supplier-order",
  //             },
  //             {
  //               key: "SupplierInventory",
  //               label: "Supplier inventory",
  //               path: "/supplier-inventory",
  //             },
  //           ],
  //         },

  //         // {
  //         //   key: "Time Clock",
  //         //   label: "Time Clock",
  //         //   icon: time_clock,
  //         //   hasSubmenu: true,
  //         //   submenu: [
  //         //     {
  //         //       key: "Clockinout",
  //         //       label: "Clock in and out",
  //         //       path: "/clock-in-out",
  //         //     },
  //         //     {
  //         //       key: "VacationRequest",
  //         //       label: "Vacation Request",
  //         //       path: "/vaction-request",
  //         //     },
  //         //     {
  //         //       key: "Time_Sheet",
  //         //       label: "Time Sheet",
  //         //       path: "/time-sheet",
  //         //     },
  //         //   ],
  //         // },

  //         {
  //           key: "Production Live",
  //           label: "Production Live",
  //           icon: production_live,
  //           hasSubmenu: true,
  //           submenu: [
  //             {
  //               key: "liveProduction",
  //               label: "Live Production goal board",
  //               path: "/live-production",
  //             },
  //             {
  //               key: "currentState",
  //               label: "Current status of each process",
  //               path: "/current-status",
  //             },
  //             {
  //               key: "currentQuality",
  //               label: "Current quality performance",
  //               path: "/current-quality",
  //             },
  //           ],
  //         },

  //         {
  //           key: "Work Instruction ",
  //           label: "Work Instruction ",
  //           icon: work,
  //           hasSubmenu: true,
  //           submenu: [
  //             {
  //               key: "All work Instruction",
  //               label: "All work Instruction",
  //               path: "/all-work-instruction",
  //             },
  //             {
  //               key: "select process & product",
  //               label: "select process & product",
  //               path: "/work-instruction",
  //             },
  //             {
  //               key: "Add & Edit work Instruction",
  //               label: "Add & Edit work Instruction ",
  //               path: "/add-work-instruction",
  //             },
  //             {
  //               key: "Apply work instruction to diffrent product/process",
  //               label:
  //                 " Apply work instruction to diffrent product/process ",
  //               path: "/apply-work-instruction",
  //             },
  //           ],
  //         },

  //         {
  //           key: "Production Response",
  //           label: "Production Response",
  //           icon: production_response,
  //           path: "/station-login",
  //         },
  //       ],
  //     },
  //     {
  //       category: "INSIGHT",
  //       items: [
  //         {
  //           key: "Operation performance",
  //           label: "Operation performance",
  //           icon: operation,
  //           path: "/operation-performance",
  //         },
  //         {
  //           key: " Quality Performance",
  //           label: " Quality Performance",
  //           icon: invoice,
  //           path: "/quality-performance",
  //         },
  //         {
  //           key: "Continuous Improvement",
  //           label: "Continuous Improvement ",
  //           icon: blog,
  //           path: "/continuous-improvement",
  //         },
  //         // {
  //         //   key: "Customer relation",
  //         //   label: "Customer relation",
  //         //   icon: order,
  //         //   path: "/customer-relation",
  //         // },
  //         // {
  //         //   key: "Business Intelligence ",
  //         //   label: "Business Intelligence  ",
  //         //   icon: order,
  //         //   path: "/business-intelligence",
  //         // },
  //         // {
  //         //   key: "Business Analysis",
  //         //   label: "Business Analysis ",
  //         //   icon: blog,
  //         //   path: "/business-analysis",
  //         // },
  //         // {
  //         //   key: "projecion ",
  //         //   label: "Projecion  ",
  //         //   icon: production_response,
  //         //   path: "/projecion",
  //         // },
  //         {
  //           key: "Setting",
  //           label: "Settings",
  //           icon: setting,
  //           path: "/settings",
  //         },
  //         {
  //           key: "Logout",
  //           label: "Logout",
  //           icon: logout,
  //           path: "/sign-in",
  //         },
  //       ],
  //     },
  //   ];
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const location = useLocation();
  const navigate = useNavigate();

  const toggleSubmenu = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleLogout = () => {
    // localStorage.removeItem("loggedIn"); // Clear the loggedIn flag from localStorage
    navigate("/sign-in"); // Redirect to the sign-in page
  };
 
const hasSubmenu = (
  item: any
): item is {
  key: string;
  label: string;
  icon: JSX.Element;
  hasSubmenu: boolean;
  submenu: any[];
} => {
  return item.hasSubmenu === true && Array.isArray(item.submenu);
};

  return (
    <>
      <div className="">
  <div
    className={` fixed top-0 left-0 xl:w-64 ${
      activeMenu ? "w-64 " : "w-16 "
    } bg-white shadow-lg flex flex-col items-center z-40 h-screen transition-all duration-300`}
  >
    <div className="flex w-full justify-end xl:hidden">
      <button
        onClick={clicked}
        className="p-2 rounded-md hover:bg-gray-200 transition"
      >
        <IoMdMenu
          className={`w-6 h-6 transition-transform duration-300 ${
            activeMenu ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
    </div>

    <div className="flex justify-center items-center p-2 mb-6">
      <img className="w-[126px]" src={logo} alt="logo" />
    </div>

    <div className="flex overflow-y-auto h-screen">
      <ul className="p-2">
        {sections.map((section) => (
          <li key={section.category} className="mb-4">
            <h2
              className={`text-[#919EAB] text-xs font-semibold uppercase mb-2 ${
                !activeMenu ? "hidden xl:block" : ""
              }`}
            >
              {section.category}
            </h2>

            {Array.isArray(section.items) ? (
              section.items.map((item) => (
                <div key={item.key} className="mb-2">
                  <Link
                    to={item.path || "#"}
                     onClick={(e) => {
                            e.preventDefault(); // Prevent default navigation
                            handleMenuItemClick(item);
                          }}
                    className={`flex items-center justify-between w-full p-2 
                      rounded-md transition text-[#061D22] text-[16px] ${
                        location.pathname === item.path
                          ? "bg-brand text-white"
                          : "hover:bg-gray-100"
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <p>{item.icon}</p>
                      <span
                        className={`block truncate max-w-[160px] overflow-hidden text-ellipsis ${
                          activeMenu ? "inline" : "hidden xl:inline"
                        } ${
                          location.pathname === item.path
                            ? "text-white"
                            : "text-gray-700"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>

                    {hasSubmenu(item) && (
                      <IoIosArrowForward
                        color="#637381"
                        className={`${
                          activeMenu ? "inline" : "hidden xl:inline"
                        } ${openSections[item.key] ? "rotate-90" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Render Submenu */}
                  {hasSubmenu(item) && openSections[item.key] && (
                    <ul className="ml-4">
                      {item.submenu.map((submenu) => (
                        <li key={submenu.key} className="mt-2">
                          <div className="flex items-center">
                            <img src={radius} alt="" />
                            <Link
                              to={"path" in submenu && submenu.path ? submenu.path : "#"}
                              onClick={() =>
                                hasSubmenu(submenu) && toggleSubmenu(submenu.key)
                              }
                              className={`flex items-center justify-between w-full p-2
                                rounded-md transition text-[#061D22] text-sm ${
                                  "path" in submenu &&
                                  location.pathname === submenu.path
                                    ? "bg-brand text-white"
                                    : "hover:bg-gray-100"
                                }`}
                            >
                              <span
                                className={`block truncate max-w-[160px] overflow-hidden text-ellipsis ${
                                  activeMenu ? "inline" : "hidden xl:inline"
                                } ${
                                  "path" in submenu &&
                                  location.pathname === submenu.path
                                    ? "text-white"
                                    : "text-gray-700"
                                }`}
                              >
                                {submenu.label}
                              </span>
                              {hasSubmenu(submenu) && (
                                <IoIosArrowForward
                                  color="#637381"
                                  className={`${
                                    activeMenu ? "inline" : "hidden xl:inline"
                                  } ${
                                    openSections[submenu.key] ? "rotate-90" : ""
                                  }`}
                                />
                              )}
                            </Link>
                          </div>

                          {/* Render Nested Submenu */}
                          {hasSubmenu(submenu) && openSections[submenu.key] && (
                            <ul className="ml-4">
                              {submenu.submenu.map((subSubmenu) => (
                                <li key={subSubmenu.key} className="mt-2">
                                  <div className="flex items-center">
                                    <img src={radius} alt="" />
                                    <Link
                                      to={subSubmenu.path || "#"}
                                      onClick={() =>
                                        hasSubmenu(subSubmenu) &&
                                        toggleSubmenu(subSubmenu.key)
                                      }
                                      className={`flex items-center justify-between w-full p-2 rounded-md transition font text-[#061D22] text-sm ${
                                        location.pathname === subSubmenu.path
                                          ? "bg-brand text-white"
                                          : "hover:bg-gray-100"
                                      }`}
                                    >
                                      <span
                                        className={`block truncate max-w-[160px] overflow-hidden text-ellipsis ${
                                          activeMenu ? "inline" : "hidden xl:inline"
                                        } ${
                                          location.pathname === subSubmenu.path
                                            ? "text-white"
                                            : "text-gray-700"
                                        }`}
                                      >
                                        {subSubmenu.label}
                                      </span>
                                      {hasSubmenu(subSubmenu) && (
                                        <IoIosArrowForward
                                          color="#637381"
                                          className={`${
                                            openSections[subSubmenu.key]
                                              ? "rotate-90"
                                              : ""
                                          }`}
                                        />
                                      )}
                                    </Link>
                                  </div>

                                  {/* Deepest Submenu */}
                                  {hasSubmenu(subSubmenu) &&
                                    openSections[subSubmenu.key] && (
                                      <ul className="ml-4">
                                        {subSubmenu.submenu.map((child) => (
                                          <li key={child.key} className="mt-2">
                                            <div className="flex items-center">
                                              <img src={radius} alt="" />
                                              <Link
                                                to={child.path}
                                                className={`block p-2 rounded-md transition text-[#061D22] text-sm truncate max-w-[160px] overflow-hidden text-ellipsis ${
                                                  activeMenu
                                                    ? "inline"
                                                    : "hidden xl:inline"
                                                } ${
                                                  location.pathname === child.path
                                                    ? "bg-brand text-white"
                                                    : "hover:bg-gray-100"
                                                }`}
                                              >
                                                {child.label}
                                              </Link>
                                            </div>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <div key={(section.items as any).key} className="mb-2">
                <button
                  onClick={() =>
                    (section.items as any).hasSubmenu &&
                    toggleSubmenu((section.items as any).key)
                  }
                  className={`flex items-center justify-between w-full p-2 
                    rounded-md transition text-[#061D22] ${
                      location.pathname === (section.items as any).path
                        ? "bg-brand text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={(section.items as any).icon}
                      alt={(section.items as any).label}
                      className="w-5"
                    />
                    <Link
                      to={(section.items as any).path || "#"}
                      className={`block ${
                        location.pathname === (section.items as any).path
                          ? "text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {(section.items as any).label}
                    </Link>
                  </div>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

      {activeMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 xl:hidden"
          onClick={clicked}
        />
      )}
    </>
  );
};

export default Sidebar;


