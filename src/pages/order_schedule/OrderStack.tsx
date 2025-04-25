import React from "react";

type OrderStackProps = {
  text: React.ReactNode;
  text1: React.ReactNode;
  text2: React.ReactNode;
  qty: React.ReactNode;
  place?: string;
  del_date: React.ReactNode;
  bg: string;
  img?: string;
};

const OrderStack = ({
  text,
  text1,
  text2,
  qty,
  place,
  del_date,
  bg,
  img
}: OrderStackProps) => (
  <div className="flex flex-col border border-dashed gap-4">
    <div className="p-4 bg-white shadow-m flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-0">
      <div className="space-y-1">
        <p className="font-semibold">{text}</p>
        <div className="flex gap-2 items-center">
          <p className="text-base text-[#1C252E]">{text1}</p>
          <span>|</span>
          <p className="text-base text-[#1C252E]">{text2}</p>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-[#5A6774]">Available Qty :</p>
          <p className="font-bold text-[#637381] bg-[#919EAB29] px-2 rounded-md">
            {qty}
          </p>
        </div>
        <input
          className="w-40 p-2 border-2 rounded-md text-sm text-[#5A6774]"
          type="text"
          placeholder={place}
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[#1C252E] text-sm">Delivery Date</p>
        <p className="font-semibold">{del_date}</p>
      </div>
      <div
        className="rounded-full p-2 cursor-pointer w-10"
        style={{ backgroundColor: bg }}
      >
        {img && <img src={img} alt="" />}
      </div>
    </div>
  </div>
);

export default OrderStack;