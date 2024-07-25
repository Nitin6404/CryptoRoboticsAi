'use client';
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// this is a beautiful page that shows yoou are logged in
export default function ConfirmedPage() {
    const router = useRouter();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div>
            <h1>Confirmed</h1>
            <p>You are logged in</p>
            <div className="flex justify-center items-center">
                <button
                    onClick={logout}
                    className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >Logout</button>
            </div>
        </div>
    );
}
