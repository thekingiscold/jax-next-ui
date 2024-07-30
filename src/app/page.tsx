import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <>
      {/* <Link href="/home">home</Link> */}
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
          <p className="text-md text-white ml-9">LlarVa provide vision insights</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 divide-x-2 divide-yellow-600 mb-16">
        <div className="flex flex-col justify-end items-end">
          <Image
            src="/icons/four.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="mr-9 mb-2"
          />
          <p className="text-md text-white text-end mr-9">Llama3 generates your caption</p>
        </div>
        <div className="flex justify-normal items-center">
          <Image
            src="/icons/llama.png"
            width={45}
            height={45}
            alt="Picture of the author"
            className="ml-9"
          />
        </div>
      </div>
      <div className="h-15 flex justify-center items-center">
        <Link href="/gender" className="hover:scale-110 tracking-widest flex justify-center items-center px-2 w-36 py-2 border-4 rounded-full border-white bg-yellow-600 text-black font-bold transition duration-300 hover:border-yellow-600 hover:bg-black hover:text-yellow-600 text-lg">
          Start
        </Link>
      </div>
      
      











      {/* <div className="grid grid-cols-2 mx-4 gap-2 place-items-center mb-20">
        <div className="flex flex-col justify-end items-end">
          <Image
              src="/icons/two.png"
              width={20}
              height={20}
              alt="Picture of the author"
              className="mb-1"
            />
            <p className="text-lg text-yellow-600 text">Upload your image</p>
        </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/photo.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
      </div>
      <div className="grid grid-cols-2 mx-4 gap-2 place-items-center mb-20 ">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/icons/vision.png"
            width={50}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col">
          <Image
            src="/icons/three.png"
            width={20}
            height={20}
            alt="Picture of the author"
            className="mb-1"
          />
          <p className="text-lg text-yellow-600">LLaVa vision insights</p>
        </div>
      </div>
      <div className="grid grid-cols-2 mx-4 gap-2 place-items-center m-5 ">
        <div className="flex flex-col justify-end items-end">
          <Image
              src="/icons/four.png"
              width={20}
              height={20}
              alt="Picture of the author"
              className="mb-1"
            />
            <p className="text-lg text-yellow-600 text">Upload your image</p>
        </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/icons/llama.png"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
      </div> */}
      
    </>
  );
}
