"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="h-15 flex justify-center items-start mt-10 lg:mt-20 mx-4 mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-center text-yellow-600">
        JAX - AI Powered Captions
      </div>
      <div className="h-10 mx-14 flex justify-center items-center text-sm sm:text-base md:text-xl lg:text-xl xl:text-2xl font-bold text-center text-white">
        <p className="text-center">
          Say goodbye to caption stress with Jax
        </p>
      </div>
      <p className="h-20 flex justify-center items-center mb-5 text-xl sm:text-base md:text-xl lg:text-xl xl:text-2xl font-semibold text-center text-yellow-600">
        How it's done?
      </p>
      <div className="grid grid-cols-2 mx-4 divide-x-2 divide-yellow-600 mb-16">
        <div className="flex justify-end items-center">
          <Image
            src="/icons/Note.png"
            width={45}
            height={45}
            alt="Picture of the author"
            className="mr-9"
          />
        </div>
        <div className="flex flex-col">
          <Image
            src="/icons/one.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="mb-2 ml-9"
          />
          <p className="text-md text-white ml-9">Enter your details</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 divide-x-2 divide-yellow-600 mb-16">
        <div className="flex flex-col justify-end items-end">
          <Image
            src="/icons/two.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="mr-9 mb-2"
          />
          <p className="text-md text-white mr-9 text-end">Upload your image</p>
        </div>
        <div className="flex justify-normal items-center">
          <Image
            src="/icons/photo.png"
            width={45}
            height={45}
            alt="Picture of the author"
            className="ml-9"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 divide-x-2 divide-yellow-600 mb-16">
        <div className="flex justify-end items-center">
          <Image
            src="/icons/vision.png"
            width={45}
            height={45}
            alt="Picture of the author"
            className="mr-9"
          />
        </div>
        <div className="flex flex-col">
          <Image
            src="/icons/three.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="mb-2 ml-9"
          />
          <p className="text-md text-white ml-9">LLaVA provide vision insights</p>
        </div>
      </div>
      <div className="h-15 flex justify-center items-center">
        <Link href="/gender" className="hover:scale-110 tracking-widest flex justify-center items-center px-2 w-36 py-2 border-4 rounded-full border-white bg-yellow-600 text-black font-bold transition duration-300 hover:border-yellow-600 hover:bg-black hover:text-yellow-600 text-lg">
          Start
        </Link>
      </div>
    </>
  );
}
