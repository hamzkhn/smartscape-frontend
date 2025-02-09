"use client";

import { Sidebar } from "./components/sidebar.jsx"
import  EmergencyControl  from "./hk-emergencycontrol.jsx"
import styles from "./kc.module.css"

export default function DashboardPage() {
  return (
    <div className="dashboardLayout">
      <sidebar />
      <main className="mainContent">
        <EmergencyControl />
      </main>
    </div>
  )
}



