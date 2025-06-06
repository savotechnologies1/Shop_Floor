import Chart from "./Chart";
import Card from "./Card";
import icon1 from "../../assets/icon_1.png";
import icon2 from "../../assets/icon_2.png";
import icon3 from "../../assets/icon_3.png";
import icon4 from "../../assets/icon_4.png";
import overlay2 from "../../assets/Overlay_2.png";
import overlay21 from "../../assets/Overlay_21.png";
import overlay3 from "../../assets/Overlay_3.png";
import overlay31 from "../../assets/Overlay_31.png";
import overlay4 from "../../assets/Overlay_4.png";
import overlay41 from "../../assets/Overlay_41.png";

import OrderStatus from "./OrderStatus";
import ClockInOut from "../timeClock/ClockInOut";
import { useEffect, useState } from "react";

const DasboardDetails = () => {
   const [role, setRole] = useState<string | null>(null); // initially null
  
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);
  if (role === null) {
    return null; // or <Loader />
  }
  console.log('rolerole',role);
  return (
  <>
 {
  role == "frontline-manager"?
   <div className="p-4">
      <h1 className="text-xl font-semibold">Welcome back, USER👋</h1>

      <div className="py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
          <Card
            title="Order Schedule"
            value="55+"
            img={icon1}
            bgColor="bg-green-50"
            overlay2={overlay3}
            overlay21={overlay31}
          />
          <Card
            title=" Total Supplier"
            value="320+"
            img={icon2}
            bgColor="bg-red-50"
            overlay2={overlay2}
            overlay21={overlay21}
          />
          <Card
            title="Total Production"
            value="220+"
            img={icon3}
            bgColor="bg-red-50"
            overlay2={overlay3}
            overlay21={overlay31}
          />
          <Card
            title="Production Live"
            value="50+"
            img={icon4}
            bgColor="bg-red-50"
            overlay2={overlay4}
            overlay21={overlay41}
          />
        </div>

        <div className=" mt-8 bg-gray-100 w-full">
          <Chart />
        </div>

        <div className="py-8">
          <OrderStatus />
        </div>
      </div>
    </div>:
  <ClockInOut />

 }
   
  </>  
  );
};

export default DasboardDetails;
