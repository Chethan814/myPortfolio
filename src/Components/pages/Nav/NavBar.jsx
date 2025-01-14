import React from "react";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function NavBar() {
    return (
        <>
            <div className="navbar font-nav bg-[#0F1015] text-[16px] text-[#FFFFFF] w-[80rem] h-[4.25rem] mx-auto  pt-[2.375rem] pb-3  ">
                <div className=" flex justify-between items-center border border-[#5C5757] rounded-full py-4 px-14 ">
                <div className="logo">
                    <span>Chethan KR</span>
                </div>
                <div className="Nav">
                    <ul className="w-[14rem] flex justify-between items-center">
                        <li>About</li>
                        <li>Work</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className="contact">
                <i class="fa-sharp fa-solid fa-arrow-right"></i>
                    <span className="pl-2">Contact</span>
                </div>
                </div>
            </div>
        </>
    );
}
