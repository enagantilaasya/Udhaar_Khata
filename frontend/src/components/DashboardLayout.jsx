import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-6">
        <Outlet />
      </main>

    </div>
  );
}

export default DashboardLayout;