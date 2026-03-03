"use client"

import { useEffect, useSyncExternalStore } from "react"
import { useRouter } from "next/navigation"

function getLoggedIn() {
  return typeof window !== "undefined" && localStorage.getItem("aps_logged_in") === "true"
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback)
  return () => window.removeEventListener("storage", callback)
}

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const authorized = useSyncExternalStore(subscribe, getLoggedIn, () => false)

  useEffect(() => {
    if (!authorized) {
      router.replace("/")
    }
  }, [authorized, router])

  if (!authorized) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0A0F13]">
        <div className="w-8 h-8 border-2 border-[#0CC8A8] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return <>{children}</>
}
