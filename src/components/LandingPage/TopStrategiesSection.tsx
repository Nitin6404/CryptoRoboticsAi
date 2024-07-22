import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";

export default function TopStrategiesSection() {
    return (
        <div className="flex flex-col mt-5 p-2.5 mb-10">
            <div className="h-[140px] mb-5 flex justify-center items-center">
                <p className="flex justify-center items-center">
                    <span className="text-[40px] text-[#251359] font-monteserrat font-bold">Top Strategies</span>
                </p>
            </div>
            <div>
                <div className="flex justify-center items-center gap-10 font-monteserrat">
                    <Card className="p-[27px] w-[360px]">
                        <CardHeader className="flex flex-row mb-5 p-0">
                            <Image className="mr-[15px]" src="https://cryptorobotics.ai/wp-content/uploads/2024/04/1-daily.png" alt="1" width={103.5} height={103.5} />
                            <div className="w-full flex justify-start items-center">
                                <p className="text-[#251359] text-[20px] font-monteserrat font-bold">1% Daily</p>
                            </div>
                        </CardHeader>
                        <Separator className="mt-10 mb-8" />
                        <CardContent className="p-0" >
                            <div >
                                <div className="flex flex-col mb-5">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Tool type</p>
                                    </div>
                                    <div>
                                        <p className="text-[21px] font-bold pl-7">Signal trading</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-col">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Monthy profit</p>
                                    </div>
                                    <div>
                                        <p className="text-[25px] text-[#4fbc87] font-bold mb-[14.7px] pl-7">+21.33%</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <Separator className="my-2" />
                        <CardFooter className="flex flex-col p-0 mt-5">
                            <div className="w-full flex justify-between mb-5">
                                <p>Payemnt per month</p>
                                <p className="text-xl text-[#3d3d3d] font-bold">$20</p>
                            </div>
                            <Button className="mt-3 bg-[#4fbc87] w-[157.79px] h-[48px] text-lg text-white font-monteserrat py-2 rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">Follow</Button>
                        </CardFooter>
                    </Card>
                    <Card className="p-[27px] w-[360px]">
                        <CardHeader className="flex flex-row mb-5 p-0">
                            <Image className="mr-[15px]" src="https://cryptorobotics.ai/wp-content/uploads/2024/04/11zon_cropped-1.png" alt="1" width={103.5} height={103.5} />
                            <div className="w-full flex justify-start items-center">
                                <p className="text-[#251359] text-[20px] font-monteserrat font-bold">Jumper Stars</p>
                            </div>
                        </CardHeader>
                        <Separator className="mt-10 mb-8" />
                        <CardContent className="p-0" >
                            <div >
                                <div className="flex flex-col mb-5">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Tool type</p>
                                    </div>
                                    <div>
                                        <p className="text-[21px] font-bold pl-7">Autofollowing</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-col">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Monthy profit</p>
                                    </div>
                                    <div>
                                        <p className="text-[25px] text-[#4fbc87] font-bold mb-[14.7px] pl-7">+51.37%</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <Separator className="my-2" />
                        <CardFooter className="flex flex-col p-0 mt-5">
                            <div className="w-full flex justify-between mb-5">
                                <p>Payemnt</p>
                                <p className="text-xl text-[#3d3d3d] font-bold">23% from profit</p>
                            </div>
                            <Button className="mt-3 bg-[#4fbc87] w-[157.79px] h-[48px] text-lg text-white font-monteserrat py-2 rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">Follow</Button>
                        </CardFooter>
                    </Card>
                    <Card className="p-[27px] w-[360px]">
                        <CardHeader className="flex flex-row mb-5 p-0">
                            <Image className="mr-[15px]" src="https://cryptorobotics.ai/wp-content/uploads/2024/03/e-trade-futures-2.png" alt="1" width={103.5} height={103.5} />
                            <div className="w-full flex justify-start items-center">
                                <p className="text-[#251359] text-[20px] font-monteserrat font-bold">E-Trade Futures Hedge</p>
                            </div>
                        </CardHeader>
                        <Separator className="mt-10 mb-8" />
                        <CardContent className="p-0" >
                            <div >
                                <div className="flex flex-col mb-5">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Tool type</p>
                                    </div>
                                    <div>
                                        <p className="text-[21px] font-bold pl-7">Copytrading</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="flex flex-col">
                                    <div className="flex justify-start items-center">
                                        <FaCheck className="h-[13.6px] mr-1.5 w-3.5 text-[#4fbc87]"/>
                                        <p className="ml-1.5 text-[#1f1e1e] text-base ">Monthy profit</p>
                                    </div>
                                    <div>
                                        <p className="text-[25px] text-[#4fbc87] font-bold mb-[14.7px] pl-7">+6.67%</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <Separator className="my-2" />
                        <CardFooter className="flex flex-col p-0 mt-5">
                            <div className="w-full flex justify-between mb-5">
                                <p>Payemnt </p>
                                <p className="text-xl text-[#3d3d3d] font-bold">28% from profit</p>
                            </div>
                            <Button className="mt-3 bg-[#4fbc87] w-[157.79px] h-[48px] text-lg text-white font-monteserrat py-2 rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">Follow</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}