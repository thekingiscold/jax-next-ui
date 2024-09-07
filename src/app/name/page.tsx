"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useUserContext } from '../hooks/useUserContext';

export default function Page() {
  const { userInfo, setUserInfo } = useUserContext();
  const [name, setName] = useState(""); // Initialize state with current userInfo name
  const router = useRouter(); // Hook for programmatic navigation

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setUserInfo({ ...userInfo, name }); // Update context with new name
    console.log({ name }); // Log the updated name value
    router.push('/gender'); // Navigate to the next page programmatically
  };

  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="px-10 py-28 rounded-lg shadow-md border-2 border-yellow-600 lg:w-1/3 w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Enter Your First Name
        </h1>
        <div className="mb-7">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            value={name} // Controlled input
            onChange={handleChange} // Handle input changes
            className="shadow appearance-none border-2 border-yellow-600 rounded w-full py-2 px-3 text-yellow-600 leading-tight focus:outline-none focus:shadow-outline bg-white"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit" // Submit the form when the button is clicked
            className="hover:scale-110 tracking-widest flex justify-center items-center px-2 w-28 py-2 border-4 rounded-full border-white bg-yellow-600 text-black font-bold transition duration-300 hover:border-yellow-600 hover:bg-black hover:text-yellow-600 text-base"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
