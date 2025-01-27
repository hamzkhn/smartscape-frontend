"use client"

import { useState } from "react"
import styles from "./hk-emergencycontrol.module.css"

export default function EmergencyButtons() {
  const [isLockdown, setIsLockdown] = useState(false)

  const handleLockdown = () => {
    setIsLockdown(!isLockdown)
    // Add your lockdown logic here
    alert(isLockdown ? "Lockdown deactivated" : "Emergency lockdown activated")
  }

  const handleContactAuthorities = () => {
    // Add your contact authorities logic here
    alert("Contacting authorities...")
  }

  return (
    <div className={`flex flex-col items-center gap-4 mt-6`}>
      <button
        onClick={handleLockdown}
        className={`px-8 py-3 rounded-lg font-semibold text-white transition-all w-64
          ${isLockdown ? "bg-red-600 hover:bg-red-700" : "bg-rose-400 hover:bg-rose-500"}`}
      >
        {isLockdown ? "Disable Lockdown" : "Emergency Lockdown"}
      </button>
      <button
        onClick={handleContactAuthorities}
        className="px-8 py-3 rounded-lg font-semibold text-white bg-rose-400 hover:bg-rose-500 transition-all w-64"
      >
        Contact Authorities
      </button>
    </div>
  )
}