"use client";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from '../hooks/useUserContext';
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Gender() {

    const { userInfo, setUserInfo } = useUserContext();
    const [gender, setGender] = useState(""); // Initialize state with current userInfo name
    const router = useRouter(); // Hook for programmatic navigation

    // Handle input change
    const handleChange = (gender: string) => {
      setGender(gender);
      setUserInfo({ ...userInfo, gender })
      router.push('/mood')
    };
    
    console.log(userInfo)
    return (
      <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl tracking-widest md:text-4xl lg:text-5xl font-bold mb-8 pb-6 text-yellow-600">Pick Your Gender</h1>
        <div className="flex space-x-16">
            <div className="flex flex-col items-center mb-16">
              <div onClick={() => handleChange("Male")} className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
                <Image
                  src="/icons/nobita.png" // Replace with the path to your male image
                  alt="Male"
                  fill // Fill the circle
                  style={{ objectFit: 'cover' }} // Cover the circle area
                  className="rounded-full"
                />
              </div>
              <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110">Male</p>
            </div>
            <div className="flex flex-col items-center mb-16">
              <div onClick={() => handleChange("Female")} className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
                <Image
                  src="/icons/sizuka.png" // Replace with the path to your female image
                  alt="Female"
                  fill // Fill the circle
                  style={{ objectFit: 'cover' }} // Cover the circle area
                  className="rounded-full"
                />
              </div>
              <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110">Female</p>
            </div>
          </div>
        </div>
      </>
    )
  }