import React from "react";
import Effect from "../../../assets/Rectangle.png";

import image1 from "../../../assets/ornament 1.png";
import image2 from "../../../assets/ornament 2.png";
import image3 from "../../../assets/ornament 3.png";
import image4 from "../../../assets/ornament 4.png";
import image5 from "../../../assets/ornament 5.png";
import image6 from "../../../assets/ornament 6.png";
import image7 from "../../../assets/ornament 7.png";

import mainImg from "../../../assets/homeSection/image-1.png";

import Ellipse from "../../../../public/Asstes/Ellipse 1.png";

export default function Hero() {
    return (
        <>
        <img src={Ellipse} alt="" className=" absolute z-50 translate-y-[-90rem] translate-x-[1rem] w-[90vw] h-[60vw] blur-3xl opacity- " />
            <div className=" relative font-heading pb-96 ">
                <div className=" absolute w-full ">
                    <div className=" relative ">
                        <div className="hero-left absolute w-[35rem] left-28 top-[9.063rem] z-50 pl-10 translate-y-[-1.5rem]">
                            <div className="txt  text-white ">
                                <h1 className="text-[56px] leading-[4rem] pb-6">
                                    UI/UX designer and Web developer
                                </h1>
                                <p className="text-[18px] font-normal  pb-6">
                                    I’m a web designer and developer, partnering
                                    with brands and agencies across the globe to
                                    create impactful, mission-focused websites
                                    that drive results and achieve business
                                    goals.
                                </p>
                            </div>
                            <div className="socail-iocon text-white font-bold text-[2.6rem] flex  ">
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4">
                                    <i class="fa-brands fa-linkedin-in px-2 bor"></i>
                                </div>
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4">
                                    <i class="fa-brands fa-github  px-2 bor"></i>
                                </div>
                                <div className="w-[4rem] h-[4rem] text-center border-2 rounded-full mx-4">
                                    <i class="fa-sharp fa-solid fa-g  px-2 bor"></i>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="hero-right absolute w-[35rem] right-28 -red-200 ">
                                <div className=" relative w-[100vw] h-[80vh]  ">
                                    <img
                                        src={mainImg}
                                        alt=""
                                        className=" absolute w-[48rem] -translate-x-40 z-50 "
                                    />
                                    <img
                                        src={image1}
                                        alt=""
                                        className=" absolute  bottom-0 translate-y-[4rem] translate-x-[2rem] "
                                    />
                                    <img
                                        src={image2}
                                        alt=""
                                        className="  absolute bottom-0 z-20 translate-x-[2rem] translate-y-[-0.4rem]"
                                    />
                                    <img
                                        src={image3}
                                        alt=""
                                        className=" absolute translate-y-[8rem] translate-x-[-6rem] z-20 "
                                    />

                                    <img
                                        src={image6}
                                        alt=""
                                        className=" absolute translate-x-[10rem] translate-y-[4rem] "
                                    />
                                    <img
                                        src={image7}
                                        alt=""
                                        className=" absolute bottom-0 translate-x-[18rem] translate-y-[3.5rem] "
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className="bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end w-[80rem] h-[40.625rem] mx-auto rounded-3xl mt-16 ">
                        <img src={Effect} alt="" className="h-full" />
                    </div>
                </div>
            </div>
        </>
    );
}
