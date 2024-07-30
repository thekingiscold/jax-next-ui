import Image from "next/image";
import Link from "next/link";

export default function Mood() {
    return (
      <>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl tracking-widest md:text-4xl lg:text-5xl font-bold mb-8 pb-6 text-yellow-600">Pick Your Mood</h1>
      <div className="flex space-x-16">
        <div className="flex flex-col items-center mb-20">
          <div className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 bg-blue-500 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
            <Image
              src="/icons/rogers.png" // Replace with the path to your male image
              alt="Male"
              fill // Fill the circle
              style={{ objectFit: 'cover' }} // Cover the circle area
              className="rounded-full"
            />
          </div>
          <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110">Chill</p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <div className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 bg-pink-500 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
            <Image
              src="/icons/bunny.png" // Replace with the path to your female image
              alt="Female"
              fill // Fill the circle
              style={{ objectFit: 'cover' }} // Cover the circle area
              className="rounded-full"
            />
          </div>
          <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110 ">Sarcastic</p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <div className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 bg-pink-500 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
            <Image
              src="/icons/simpson.png" // Replace with the path to your female image
              alt="Female"
              fill // Fill the circle
              style={{ objectFit: 'cover' }} // Cover the circle area
              className="rounded-full"
            />
          </div>
          <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110">Humorous</p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <div className="cursor-pointer relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 bg-pink-500 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-2 border-yellow-600">
            <Image
              src="/icons/gloomy.png" // Replace with the path to your female image
              alt="Female"
              fill // Fill the circle
              style={{ objectFit: 'cover' }} // Cover the circle area
              className="rounded-full"
            />
          </div>
          <p className="tracking-widest cursor-pointer mt-7 pt-5 text-lg md:text-xl lg:text-2xl text-yellow-600 transition-transform duration-300 transform hover:scale-110">Gloomy</p>
        </div>
      </div>
    </div>
      </>
    )
  }