"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

interface User {
    email: string;
    password: string;
    username: string;
    country: string;
}

interface Errors {
    email: string;
    password: string;
    username: string;
    country: string;
}

const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];

export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = useState<User>({
        email: "",
        password: "",
        username: "",
        country: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Errors>({
        email: "",
        password: "",
        username: "",
        country: "",
    });

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const validateUser = () => {
        const errors: Errors = {
            email: "",
            password: "",
            username: "",
            country: "",
        };
        if (!emailRegex.test(user.email)) {
            errors.email = "Invalid email address";
        }
        if (!passwordRegex.test(user.password)) {
            errors.password = "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character";
        }
        if (user.username.length < 3) {
            errors.username = "Username must be at least 3 characters";
        }
        if (user.country.length === 0) {
            errors.country = "Please select a country";
        }
        setErrors(errors);
        return Object.values(errors).every((error) => error === "");
    };

    useEffect(() => {
        const isValid = validateUser();
        setButtonDisabled(!isValid);
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? <Loader2 className="animate-spin" /> : "Signup"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.username ? "border-red-500" : ""
                    }`}
                id="username"
                type="text"
                value={user.username}
                onChange={handleChange}
                placeholder="Username"
            />
            {errors.username && <div className="text-red-500">{errors.username}</div>}
            <label htmlFor="email">Email</label>
            <input
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.email ? "border-red-500" : ""
                    }`}
                id="email"
                type="text"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            <label htmlFor="password">Password</label>
            <input
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.password ? "border-red-500" : ""
                    }`}
                id="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
            />
            {errors.password && <div className="text-red-500">{errors.password}</div>}
            <label htmlFor="country">Country</label>
            <select
                className={`p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black ${errors.country ? "border-red-500" : ""
                    }`}
                id="country"
                value={user.country}
                onChange={handleChange}
            >
                <option value="">Select a country</option>
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>
            {errors.country && <div className="text-red-500">{errors.country}</div>}
            <button
                onClick={onSignup}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                disabled={buttonDisabled}
            >
                {loading ? <Loader2 className="animate-spin" /> : "Signup"}
            </button>
            <Link href="/login">Visit login page</Link>
        </div>
    );
}