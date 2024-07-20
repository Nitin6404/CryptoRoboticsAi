import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
    return (
        <div className='flex items-center justify-center w-full pt-[59px] mb-5'>
            <div className="flex p-2.5">
                <div className="flex flex-col font-monteserrat mt-[20px]">
                    <div className="mb-5">
                        <p className="text-[#251359] text-[43px] font-bold leading-[2.8rem] pr-[30px]">CryptoRobotics - trading  <br /> platform and crypto trading <br /> bots</p>
                    </div>
                    <div className="h-[43px] mb-5">
                        <p className="my-2.5 font-monteserrat font-medium text-[19px] text-[#7b7b7b] ">MANAGE YOUR CRYPTO ASSETS VIA API</p>
                    </div>
                    <div className="h-[81px] w-[653px] mb-5 mt-[15px] ">
                        <div className="flex justify-start items-center mt-3">
                            <div className="flex h-7 mr-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">Crypto trading bots</p>
                            </div>
                            <div className="flex h-7 mx-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">OCO bots</p>
                            </div>
                            <div className="flex h-7 mx-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">Copytrading</p>
                            </div>
                            <div className="flex h-7 mx-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">FUTURES trading</p>
                            </div>
                        </div>
                        <div className="flex justify-start items-center">
                            <div className="flex h-7 mr-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">Signal trading</p>
                            </div>
                            <div className="flex h-7 mx-[11.5px]">
                                <div className="flex justify-center items-center">
                                    <FaCheckCircle width={14} height={13.6} className="text-[#00d664] w-[14px] h-[13.6px]" />
                                </div>
                                <p className="pl-[5px] text-[#3e58de] text-[16px] font-bold">Crypto exchange APIs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 h-[74px] w-[650px]">
                        <div className="flex font-monteserrat font-medium space-x-8 ">
                            <div>
                                <Button className="h-[48px] px-[40px] w-[245px] py-[15px] text-[18px] text-white bg-[#6481e6] rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">START FOR FREE</Button>
                            </div>
                            <div>
                                <Button className="h-[48px] px-[40px] w-[245px] py-[15px] text-[18px] text-white bg-[#4fbc87] rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">VIDEO OVERVIEW</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-[15px] pl-[30px] pb-[20px] pr-[39px]">
                    <Image className="h-[440px]" src='https://cryptorobotics.ai/wp-content/uploads/2024/05/en-2-1024x779.png' alt="cryptoroboticsai." width={580} height={440} />
                </div>
            </div>
        </div>
    );
}