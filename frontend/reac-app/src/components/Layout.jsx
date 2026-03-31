import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className="flex h-screen">

      {/* Sidebar (conditionally rendered) */}
      {showSidebar && <Sidebar />}

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-1 bg-gray-100 p-6 overflow-auto">
          {children}
        </main>
      </div>

    </div>
  );
}