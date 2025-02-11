import Avatar from "@/component/Avatar";
import SideBar from "@/component/SideBar";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" sticky top-0 bg-gradient bg-black flex justify-between  items-center z-50">
        <Link href={"/"}>
          <Image
            width={30}
            height={30}
            src={
              "https://cdn-icons-png.freepik.com/256/4608/4608448.png?ga=GA1.1.228051697.1693212978&"
            }
            alt=""
          />
        </Link>
        <Link href={""}>
          <Avatar />
        </Link>
      </div>
      <div className=" grid grid-cols-12">
        <div className=" sticky top-0 col-span-2">
          <SideBar />
        </div>
        <div className=" col-span-9 ml-20 overflow-auto"> {children}</div>
      </div>
    </div>
  );
};

export default layout;
