import React from "react";
import Effect from "../../../assets/homeSection/Rectangle.png";

import AboutImg from '../../../../public/Asstes/about_img.png'

export default function AboutSection() {
    return (
        <>

        <div className=" ">
            <div className="">
            <img src={AboutImg} alt="" className="heading absolute w-[28rem]  translate-x-[13rem] translate-y-[8rem] " />
            </div>
            <div className=" absolute text-white translate-x-[48vw]  translate-y-[17rem]">
                <h2 className="text-[48px] w-[35rem] pb-2">UI/UX designer and Webflow developer</h2>
                <p className="w-[34rem] pb-8">I have the skills to develop the UX/UI (User Experience, User Interface) of your website. I will help you create your No-code website with Webflow.</p>
                <span className="text-[#101116] bg-white rounded-full p-5 mt-10 font-semibold">GET STARTED</span>
            </div>
        </div>
            <div className="mb-[8rem] ">
                <div className="bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end w-[87rem] h-[40.625rem] mx-auto rounded-3xl mt-16 ">
                    <img src={Effect} alt="" className="h-full" />
                </div>
            </div>
        </>
    );
}
