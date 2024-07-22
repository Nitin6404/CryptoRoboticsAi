import Image from "next/image"
import { FaGlobe } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaWindows } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function MobileApplicationSection() {
    const downloadLinks = [
        {
            icon: <FaGlobe color="#251359" className="h-[28px] w-[28px]" />,
            text: "WEB & MOBILE",
        },
        {
            icon: <FaApple color="#251359" className="h-[28px] w-[28px]" />,
            text: "MacOS",
        },
        {
            icon: <FaWindows color="#251359" className="h-[28px] w-[28px]" />,
            text: "Windows",
        },
        {
            icon: <FaAndroid color="#251359" className="h-[28px] w-[28px]" />,
            text: "Android",
        },
        {
            icon: <FaGooglePlay color="#251359" className="h-[28px] w-[28px]" />,
            text: "Google p lay",
        },
    ];

    return (
        <div className="flex justify-between pt-[100px] pb-[107px] mx-[80px]">
            <div>
                <p className="text-[#251359] text-[40px] font-monteserrat font-semibold mb-5">
                    CryptoRobotics
                </p>
                <div className="mb-5 h-[66px] flex justify-center items-center">
                    <p className="text-[#7b7b7b] text-[19px] font-monteserrat font-medium">
                        BEST CRYPTO PLATFORM FOR DAY TRADING. TRADE
                        <br />
                        ON THE MOST POPULAR DEVICES
                    </p>
                </div>
                <div className="mb-2">
                    <div className="flex flex-col justify-center items-start pt-[10px] pb-2.5 pr-5">
                        {downloadLinks.map((link, index) => (
                            <div key={index} className="flex items-center space-x-3 h-[35px] my-[12px] mb-1">
                                <div className="h-full">
                                    {link.icon}
                                </div>
                                <p className="text-[#3E58DE] text-[17px] font-monteserrat font-bold">
                                    {link.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <Button className="h-[48px] w-[150px] text-white bg-[#6481e6] text-lg font-monteserrat rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">
                        TRADE
                        <FaArrowRight className="ml-2" />
                    </Button>
                </div>
            </div>
            <div className="pt-10 pr-5 pl-5">
                <Image
                    src="https://cryptorobotics.ai/wp-content/uploads/2023/03/Mockup-CR-platforms-2-%D0%B1%D0%BB%D0%BE%D0%BA.png"
                    width={772} height={457}
                    alt="Mobile Application"
                />
            </div>
        </div>
    )
}