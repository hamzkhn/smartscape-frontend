import EmergencyControl from "./hk-emergencycontrol"
import Sidebar from "./components/sidebar-hk"

export default function Home() {
  return (
    <div className="dashboardLayout">
      <sidebar />
    <main className="flex h-screen">
      <EmergencyControl />
    </main>
    </div>
  )
}



