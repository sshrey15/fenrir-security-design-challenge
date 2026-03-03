"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function SignupLoginCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)


  return (
    <div className="w-full  font-sans max-w-md rounded-3xl bg-white shadow-2xl px-8 py-10">
     
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Sign up</h1>
        <p className="mt-2 text-sm text-gray-500">
          Already have an account?{" "}
          <a href="#" className="text-[#0CC8A8] hover:underline font-medium">
            Log in
          </a>
        </p>
      </div>

   
      <form className="flex flex-col gap-4">
 
        <input
          type="text"
          placeholder="First name*"
          required
          className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20 transition"
        />

       
        <input
          type="text"
          placeholder="Last name*"
          required
          className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20 transition"
        />

    
        <input
          type="email"
          placeholder="Email address*"
          required
          className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20 transition"
        />


        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password (8+ characters)*"
            required
            className="h-12 w-full rounded-lg border border-gray-300 bg-transparent px-4 pr-11 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#0CC8A8] focus:ring-2 focus:ring-[#0CC8A8]/20 transition"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 012.31-3.814M6.938 6.937A9.966 9.966 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.973 9.973 0 01-4.293 5.149M15 12a3 3 0 11-6 0"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3l18 18"
                />
              </svg>
            )}
          </button>
        </div>


        <div className="flex items-start gap-3 py-1">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer rounded border-gray-300 accent-[#0CC8A8]"
          />
          <label
            htmlFor="terms"
            className="text-sm leading-snug text-gray-500 cursor-pointer select-none"
          >
            I agree to Aps&apos;s{" "}
            <a href="#" className="text-gray-900 underline font-medium">
              Terms &amp; Conditions
            </a>{" "}
            and acknowledge the{" "}
            <a href="#" className="text-gray-900 underline font-medium">
              Privacy Policy
            </a>
          </label>
        </div>
 
       <Link href="/dashboard">
        <button
          type="submit"
          className="w-full h-12 rounded-full bg-[#0CC8A8] hover:bg-[#09B898] active:bg-[#089A88] text-white text-base font-semibold transition cursor-pointer"
        >
          Create account
        </button>
        </Link>

        
        <div className="grid grid-cols-3 gap-3 pt-1">
         
          <button
            type="button"
            className="flex h-12 items-center justify-center rounded-full bg-black hover:bg-black/90 active:bg-black/80 transition cursor-pointer"
          >
            <Image src="/auth-page/apple.svg" alt="Apple" width={20} height={20} className="brightness-0 invert" />
          </button>

          {/* Google */}
          <button
            type="button"
            className="flex h-12 items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-50 active:bg-gray-100 transition cursor-pointer"
          >
            <Image src="/auth-page/google.svg" alt="Google" width={20} height={20}  />

        
          </button>

          
          <button
            type="button"
            className="flex h-12 items-center  justify-center rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition cursor-pointer"
          >
           <Image src="/auth-page/meta.svg"  alt="Meta" width={32} height={24} className="brightness-0 invert" />
          </button>
        </div>
      </form>
    </div>
  )
}
