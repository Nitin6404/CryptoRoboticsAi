import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaChevronCircleDown } from "react-icons/fa";

export default function PremiumSupportSection() {
    const packages = [
        {
            title: "",
            price: "FREE",
            priceText: "forever",
            features: [
                "Trading on 14 exchanges",
                "10 stop - limit orders",
                "2 OCOs",
                "Technical analysis with saving templates on the chart",
                "Analytical dashboard 30 days",
            ],
            buttonText: "TRADE",
        },
        {
            title: "Basic PRO",
            price: "$19",
            priceText: "for 1 month",
            features: [
                "Stop-Limit Orders unlimited",
                "OCOs unlimited",
                "Add your strategy: 1 bot",
                "Analytical dashboard",
                "Demo trading robots",
                "Multiple accounts",
                "Free package",
            ],
            buttonText: "BUY",
        },
        {
            title: "Expert PRO",
            price: "$79",
            priceText: "for 1 month",
            features: [
                "8 Spot robots",
                "3 Futures robots",
                "Add your strategy: 5 bots",
                "Cryptorobotics trading channels",
                "Cryptorobotics Autofollowing channels",
                "E-trading Copytrading channels",
                "Basic package",
            ],
            buttonText: "BUY",
        },
        {
            title: "Signals PRO",
            price: "$79.05",
            priceText: "for 1 month",
            features: [
                "Trading on 14 exchanges",
                "10 Signals channels:",
                " - Cryptorobotics",
                " - Cryptoleks",
                " - Bitmind",
                " - Al Alpha",
                " - E-Trade",
                " - Jumper Stars",
                " - Flash Signals",
                " - Easy Trade",
                " - Kuresofa",
                " - Cryptosegnali",
            ],
            buttonText: "BUY",
        },
    ]

    return (
        <div className="flex flex-col pt-[60px] pb-[76px]">
            <div className="flex justify-center items-end mb-5">
                <p className="text-[40px] font-semibold font-montserrat text-[#251359]">
                    Tariffs and packages
                </p>
            </div>
            <div className="flex justify-center items-start mb-5">
                <p className="text-[18px] font-semibold font-montserrat text-[#251359]">
                    Choose PRO PACKAGE or trade for FREE
                </p>
            </div>
            <div className="my-[36px] mx-[92px] grid grid-cols-4 gap-5">
                {packages.map((pkg, index) => (
                    <Card className="p-2.5 rounded-[4px] h-[537px] relative" key={index} >
                        <CardHeader className="p-0 pt-6 py-[2px] h-[54.8px] flex justify-center items-center">
                            <p className="text-[#04033a] text-2xl font-monteserrat font-semibold">{pkg.title}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col items-center justify-center space-y-0 pt-[5px] pb-[25px]">
                                <p className="text-[57px] h-[70px] font-monteserrat font-bold text-[#0e41b8]">{pkg.price}</p>
                                <p className="text-[19px] font-monteserrat font-light text-[#54595f]">{pkg.priceText}</p>
                            </div>
                            <ul className="mt-1">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="text-[14px] text-[#090439] font-monteserrat">
                                        <FaChevronCircleDown className="inline mr-2 text-[#090439]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="absolute bottom-7 w-[274px]  p-0">
                            <div className="flex justify-center items-center w-full">
                                <Button className="h-[34px] px-7 py-5 text-white bg-[#6481e6] rounded-full transform hover:scale-90 transition-transform duration-300 ease-in-out">
                                    {pkg.buttonText}
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}