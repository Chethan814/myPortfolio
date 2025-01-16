import React from "react";
import Effect from "../../../assets/homeSection/Rectangle.png";

import AboutImg from '../../../../public/Asstes/about_img.png'

export default function CTASection() {
    return (
        <>

        <div className=" ">
            <div className="">
            <img src={AboutImg} alt="" className="heading absolute w-[23rem]  translate-x-[50vw]  translate-y-[10rem]" />
            </div>
            <div className=" absolute text-white  translate-x-[12rem] translate-y-[15rem]">
                <h2 className="text-[36px] w-[20rem] pb-2">UI/UX designer and Webflow developer</h2>
                <p className="w-[34rem] pb-8">I have the skills to develop the UX/UI (User Experience, User Interface) of your website. I will help you create your No-code website with Webflow.</p>
                <div className="socail-iocon text-white font-bold text-[2.6rem] flex  ">
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4 vibrate-1-normal">
                                    <a
                                        href="https://www.linkedin.com/in/chethan-k-r-559748229/"
                                        target="_blank"
                                    >
                                        <i class="fa-brands fa-linkedin-in px-2 bor "></i>
                                    </a>
                                </div>
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4 vibrate-1-reverse ">
                                    <a
                                        href="https://github.com/Chethan814"
                                        target="_blank"
                                    >
                                        <i class="fa-brands fa-github  px-2 bor"></i>
                                    </a>
                                </div>
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4 vibrate-1-normal">
                                    <a href="mailto:chethanchethu99339@gmail.com">
                                        <i class="fa-sharp fa-solid fa-g  px-2 bor"></i>
                                    </a>
                                </div>
                            </div>
            </div>
        </div>
            <div className="mb-[8rem] ">
                <div className="bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end w-[80rem] h-[40.625rem] mx-auto rounded-3xl mt-16 ">
                    <img src={Effect} alt="" className="h-full" />
                </div>
            </div>
        </>
    );
}
