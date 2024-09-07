"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from '../hooks/useUserContext';

export default function ImageInsight() {
  const { userInfo, setUserInfo } = useUserContext();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGenerate = () => {
    if (selectedImage) {
      router.push('/generateCaption');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-10">
        Upload & Preview Your Image
      </h1>

      {/* Container for Spidey Icon and Preview */}
      <div className="flex flex-col items-center space-y-11">
        <div className="flex items-center space-x-8">
          {/* Upload Section */}
          <div className="flex flex-col items-center space-y-4">
            <label htmlFor="imageUpload" className="relative w-24 lg:w-48 h-24 md:w-32 md:h-32 lg:h-48 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 transform hover:scale-110 border-4 border-yellow-500 cursor-pointer mb-6">
              <Image
                src="/icons/spidey3.png"
                alt="Upload Image"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
            </label>
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <p className="text-white font-semibold">Click the Spidey icon to upload an image</p>
          </div>

          {/* Image Preview Section */}
          {preview && (
            <div className="flex items-center rounded-xl shadow-xl border-4 border-white">
              <Image
                src={preview}
                alt="Selected Preview"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Generate Button */}
        {selectedImage && (
          <button
          type="submit" // Submit the form when the button is clicked
          className="hover:scale-110 tracking-widest flex justify-center items-center px-2 w-28 py-2 border-4 rounded-full border-white bg-yellow-600 text-black font-bold transition duration-300 hover:border-yellow-600 hover:bg-black hover:text-yellow-600 text-base"
          >
            Generate
          </button>
        )}
      </div>
    </div>
  );
}