import { Input } from "@pankod/refine-antd";
import React from "react";

function NavBar() {
  return (
    <div className="w-full h-[62px] px-6 flex justify-between border-b-2 border-gray-300">
      <div>
        <Input className="bg-white w-96 my-3 text-xl" placeholder="Search product, supplier, order" />
      </div>
      <div className="flex my-5">
        <p>Notification</p>
        <p>user</p>
      </div>
    </div>
  )
}

export default NavBar;