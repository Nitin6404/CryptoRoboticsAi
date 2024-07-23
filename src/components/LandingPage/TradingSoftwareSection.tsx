import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import Image from "next/image"

export default function TradingSoftwareSection() {
    const tradingSoftwareList = [
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%BD-6-1.jpg",
            title: "SPOT & FUTURES",
            description: "Trading on 15 popular SPOT & FUTURES cryptocurrency exchanges on your account via API key"
        },
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD-2-1.jpg",
            title: "OCOs (Smart orders)",
            description: "Simultaneous Take Profit, Stop Loss, Trailing Stop, Trailing Take profit, Stop-limit orders, Market-orders, order bots"
        },
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%B2-3-1.jpg",
            title: "Chart trading",
            description: "Creating and editing orders on the chart displaying open and closed orders Crypto charts by TradingView"
        },
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD-1-1.jpg",
            title: "Technical analysis",
            description: "Technical analysis on TradindView charts with templates saving, support of multiple monitors.Trade all crypto pairs in one window"
        },
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD-5-1.jpg",
            title: "Crypto portfolio tracking",
            description: "All exchange balances and trading results are displayed automatically via diagrams and graphs"
        },
        {
            image: "https://cryptorobotics.ai/wp-content/uploads/2023/03/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD-4-1.jpg",
            title: "Multiple accounts",
            description: "An unlimited number of accounts for each crypto exchanges"
        }
    ]

    return (
        <div className="flex flex-col pt-[60px] pb-[79.86px]">
            <div className="flex justify-center">
                <p className="text-[40px] text-[#251359] font-semibold font-monteserrat">
                    Cryptocurrency Trading Software 🦾
                </p>
            </div>
            <div className="flex justify-center mt-7 mb-[30px]">
                <p className="text-[19px] text-[#251359] font-semibold font-monteserrat">
                    Automated crypto trading tools for TOP 15 cryptocurrency exchanges
                </p>
            </div>
            <div className="grid grid-cols-3 pt-5 mx-[92px] gap-y-5 gap-x-5">
                {tradingSoftwareList.map((item, key) => (
                    <div key={key}>
                        <Card className="pt-[10px] px-[25px] pb-[25px] w-[400px] h-[360px]">
                            <CardHeader className="flex flex-row justify-center mb-5 p-0 pt-5">
                                <Image src={item.image} alt="1" width={142} height={142} />
                            </CardHeader>
                            <CardContent className="p-0 mb-5 h-[63px] flex justify-center items-center" >
                                <p className="text-[19px] font-medium text-[#171717] font-monteserrat">{item.title}</p>
                            </CardContent>
                            <CardFooter className="flex p-0 h-[82.4px] text-center pb-[14.4px]">
                                <p className="text-[#7a7a7a] text-sm font-monteserrat font-light">{item.description}</p>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}