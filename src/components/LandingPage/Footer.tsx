import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col pt-10">
            <div className="flex justify-end mx-[102px] space-x-16">
                <div>
                    <h3 className="text-sm font-semibold text-[#251359]">Contact us</h3>
                    <p className="pt-5 mb-5 text-xs text-[#251359]">Harju maakond, Tallinn, <br /> Kesklinna linnaosa, Tornimäe <br /> tn 5, 10145, <br /> CryptoRobotics OÜ</p>
                    <Link href="mailto:info@cryptorobotics.net" className="text-sm text-[#251359]">
                        <div className="flex space-x-2">
                            <FaMailBulk size={20} className="inline-block" />
                            <p>
                                info@cryptorobotics.net
                            </p>
                        </div>
                    </Link>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#251359]">About us</h3>
                    <ul className="text-sm text-[#7b7b7b] pt-[11px]">
                        <li className="mt-[5px] pb-[5px]">
                            <Link href="#" className="text-xs hover:text-[#3e58de] text-[#251359]">
                                Roadmap
                            </Link>
                        </li>
                        <li className="mt-[5px] pb-[5px]">
                            <Link href="#" className="text-xs hover:text-[#3e58de] text-[#251359]">
                                Our team
                            </Link>
                        </li>
                        <li className="mt-[5px] pb-[5px]">
                            <Link href="#" className="text-xs hover:text-[#3e58de] text-[#251359]">
                                Referral program
                            </Link>
                        </li>
                        <li className="mt-[5px] pb-[5px]">
                            <Link href="#" className="text-xs hover:text-[#3e58de] text-[#251359]">
                                Security
                            </Link>
                        </li>
                        <li className="mt-[5px] pb-[5px]">
                            <Link href="#" className="text-xs hover:text-[#3e58de] text-[#251359]">
                                Cryptorobotics Reviews
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                {/* Second Section */}
                <footer className="py-10">
                    <div className="container mx-auto px-4">
                        <div className="mt-10 flex justify-around items-center">
                            <div className="flex flex-col items-start space-x-4">
                                <Image className="mb-5 pl-4" src='https://cryptorobotics.ai/wp-content/uploads/2023/03/cropped-cropped-crypto-logo-%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87.png' alt="cryptoroboticsai." width={125} height={35} />
                                <p className="text-[11px] text-[#251359] font-monteserrat">© Cryptorobotics, All rights reserved</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="flex justify-start w-full">
                                    <p className="text-sm font-monteserrat font-medium">
                                        Follow us
                                    </p>
                                </div>
                                <div className="mt-5 flex space-x-6">
                                    <Link href="#" className="text-[#251359]"><
                                        FaTwitter size={20} />
                                    </Link>
                                    <Link href="#" className="text-[#251359]"><
                                        FaTelegramPlane size={20} />
                                    </Link>
                                    <Link href="#" className="text-[#251359]"><
                                        FaDiscord size={20} />
                                    </Link>
                                    <Link href="#" className="text-[#251359]"><
                                        FaYoutube size={20} />
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="w-full flex justify-start items-center">
                                    <button className="flex justify-start items-center bg-[#4FBC87] w-[196px] h-[43px] text-[13px] text-white rounded-[22px] py-[15px] px-[30px] font-monteserrat">
                                        <FaBookOpen width={15} height={13} className="inline-block mr-2" />
                                        Knowledge base
                                    </button>
                                </div>
                                <div className="mt-4 flex justify-center space-x-4 text-sm">
                                    <Link href="#" className="text-[#231359] text-xs font-normal hover:text-[#3e58de]">
                                        Privacy policy
                                    </Link>
                                    <Link href="#" className="text-[#231359] text-xs font-normal hover:text-[#3e58de]">
                                        Disclaimer
                                    </Link>
                                    <Link href="#" className="text-[#231359] text-xs font-normal hover:text-[#3e58de]">
                                        Terms of use
                                    </Link>
                                    <Link href="#" className="text-[#231359] text-xs font-normal hover:text-[#3e58de]">
                                        Cookie policy
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
