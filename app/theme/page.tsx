'use client';

import {useTheme} from "next-themes";

export default function PageTheme(){
    const {setTheme} = useTheme();
    return (
        <>
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
        <div className="max-w-3xl text-center space-y-10">
          <h1 className="text-6xl font-semibold">Next.js Dark Mode</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div>
            <button className="mr-4" onClick={()=> setTheme("light")}>Light Mode</button>
            <button className="variant-secondary" onClick={()=> setTheme("dark")}>Dark Mode</button>
          </div>
        </div>
      </div>
    
        </>
    )
}