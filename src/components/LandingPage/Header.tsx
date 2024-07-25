import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"


export default function Header() {
    return (
        <div className='flex justify-between items-center px-8 py-4 font-monteserrat text-sm'>
            <div className='flex items-center ml-6'>
                <Image src='https://cryptorobotics.ai/wp-content/uploads/2023/03/cropped-cropped-crypto-logo-%D0%BF%D1%80%D0%BE%D0%B7%D1%80%D0%B0%D1%87.png' alt="cryptoroboticsai." width={140} height={40} />
            </div>
            <div className='flex items-center'>
                <Button className="h-[34px] px-7 py-5 text-white bg-[#6481e6] rounded-full ml-4 transform hover:scale-90 transition-transform duration-300 ease-in-out">About us</Button>
                <Link href="/login">
                    <Button className='h-[34px] px-7 py-5 text-white bg-[#6481e6] rounded-full ml-4 transform hover:scale-90 transition-transform duration-300 ease-in-out'>Login</Button>
                </Link>
                <Link href="/signup">
                    <Button className='h-[34px] px-7 py-5 text-white bg-[#6481e6] rounded-full ml-4 transform hover:scale-90 transition-transform duration-300 ease-in-out'>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
}
